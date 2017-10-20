import {
  window,
  workspace,
  commands,
  ExtensionContext,
  TextEditor,
  Selection,
  InputBoxOptions,
} from 'vscode';
import { exec } from 'child_process';
import { Dash } from './dash';
import { platform } from 'os';

const OS: string = platform();

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('extension.dash.specific', () => {
      searchSpecific();
    })
  );

  context.subscriptions.push(
    commands.registerCommand('extension.dash.all', () => {
      searchAll();
    })
  );

  context.subscriptions.push(
    commands.registerCommand('extension.dash.emptySyntax', () => {
      searchEmptySyntax();
    })
  );

  context.subscriptions.push(
    commands.registerCommand('extension.dash.customSyntax', () => {
      searchCustomWithSyntax();
    })
  );
}

/**
 * Search in dash for selection syntax documentation
 */
function searchSpecific() {
  let editor = getEditor();
  let query = getSelectedText(editor);
  let languageId = editor.document.languageId;
  let docsets = getDocsets(languageId);

  let dash = new Dash(OS);

  exec(dash.getCommand(query, docsets));
}

/**
 * Search in dash for all documentation
 */
function searchAll() {
  let editor = getEditor();
  let query = getSelectedText(editor);
  let dash = new Dash(OS);

  exec(dash.getCommand(query));
}

/**
 * Search in dash for editor syntax documentation
 */
function searchEmptySyntax() {
  let editor = getEditor();
  let query = '';
  let languageId = editor.document.languageId;
  let docsets = getDocsets(languageId);
  let dash = new Dash(OS);

  exec(dash.getCommand(query, docsets));
}

/**
 * Search in dash for editor syntax documentation with a custom query
 */
function searchCustomWithSyntax() {
  let editor = getEditor();
  let languageId = editor.document.languageId;
  let docsets = getDocsets(languageId);
  let dash = new Dash(OS);

  let inputOptions: InputBoxOptions = {
    placeHolder: 'Something to search in Dash.',
    prompt: 'Enter something to search for in Dash.',
  };

  window.showInputBox(inputOptions).then((query: string) => {
    if (query) {
      // If they actually input code
      exec(dash.getCommand(query, docsets)); // Open it in dash
    }
  });
}

/**
 * Get vscode active editor
 *
 * @return {TextEditor}
 */
function getEditor(): TextEditor {
  let editor = window.activeTextEditor;
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
  let selection = editor.selection;
  let text = editor.document.getText(selection);

  if (!text) {
    let range = editor.document.getWordRangeAtPosition(selection.active);
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
