import { window, workspace, commands, ExtensionContext, TextEditor, Selection, InputBoxOptions } from 'vscode';
import { exec } from 'child_process';
import { Dash } from './dash';
import { platform } from 'os';

const OS: string = platform();

export function activate(context: ExtensionContext) {

  context.subscriptions.push(commands.registerCommand('extension.dash.selection', () => {
    searchSpecific();
  }));

  context.subscriptions.push(commands.registerCommand('extension.dash.all', () => {
    searchAll();
  }));

  context.subscriptions.push(commands.registerCommand('extension.dash.syntax', () => {
    searchSyntax();
  }));

  context.subscriptions.push(commands.registerCommand('extension.dash.customWithSyntax', () => {
    customWithSyntax();
  }));
}

/**
 * Search in dash for selection syntax documentation
 */
function searchSpecific() {
  var editor = getEditor();
  var query = getSelectedText(editor);
  var languageId = editor.document.languageId;
  var docsets = getDocsets(languageId);

  var dash = new Dash(OS);

  exec(dash.getCommand(query, docsets));
}

/**
 * Search in dash for all documentation
 */
function searchAll() {
  var editor = getEditor();
  var query = getSelectedText(editor);

  var dash = new Dash(OS);

  exec(dash.getCommand(query));
}

/**
 * Search in dash for editor syntax documentation
 */
function searchSyntax() {

  var editor = getEditor();
  var query = "";
  var languageId = editor.document.languageId;
  var docsets = getDocsets(languageId);
  var dash = new Dash(OS);

  exec(dash.getCommand(query, docsets));
}

/**
 * Search in dash for editor syntax documentation with a custom query
 */
function customWithSyntax() {

  var editor = getEditor();
  var languageId = editor.document.languageId;
  var docsets = getDocsets(languageId);
  var dash = new Dash(OS);

  var inputOptions: InputBoxOptions = {
    placeHolder: "Something to search in dash.",
    prompt: "Enter something to search for in dash."
  }

  window.showInputBox(inputOptions)
    .then(function (query: string) {
      if(query) //If they actually input code
        exec(dash.getCommand(query, docsets)); //Open it in dash
    }, function (noQuery: any) {
      //Only happens on VSCode error
    })

}

/**
 * Get vscode active editor
 *
 * @return {TextEditor}
 */
function getEditor(): TextEditor {
  var editor = window.activeTextEditor;
  if (!editor) {
    return;
  }

  return editor;
}

/**
 * Get selected text by selection or by cursor position
 *
 * @param {TextEditor} active editor
 * @return {string}
 */
function getSelectedText(editor: TextEditor) {
  var selection = editor.selection;
  var text = editor.document.getText(selection);

  if (!text) {
    var range = editor.document.getWordRangeAtPosition(selection.active);
    text = editor.document.getText(range);
  }

  return text;
}

/**
 * Get docset configuration
 *
 * @param {string} languageId e.g javascript, ruby
 * @return {Array<string>}
 */
function getDocsets(languageId: string): Array<string> {
  let config = workspace.getConfiguration('dash.docset');

  if (config[languageId]) {
    return config[languageId];
  }

  return [];
}
