import {
  window,
  workspace,
  commands,
  ExtensionContext,
  TextEditor,
  Selection,
  InputBoxOptions,
  ConfigurationTarget,
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
  const editor = getEditor();
  const query = getSelectedText(editor);
  const languageId = editor.document.languageId;
  const docsets = getDocsets(languageId);

  const dash = new Dash(OS);

  exec(dash.getCommand(query, docsets));
}

/**
 * Search in dash for all documentation
 */
function searchAll() {
  const editor = getEditor();
  const query = getSelectedText(editor);
  const dash = new Dash(OS);

  exec(dash.getCommand(query));
}

/**
 * Search in dash for editor syntax documentation
 */
function searchEmptySyntax() {
  const editor = getEditor();
  const query = '';
  const languageId = editor.document.languageId;
  const docsets = getDocsets(languageId);
  const dash = new Dash(OS);

  exec(dash.getCommand(query, docsets));
}

/**
 * Search in dash for editor syntax documentation with a custom query
 */
function searchCustomWithSyntax() {
  const editor = getEditor();
  const languageId = editor.document.languageId;
  const docsets = getDocsets(languageId);
  const dash = new Dash(OS);

  const inputOptions: InputBoxOptions = {
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
  const editor = window.activeTextEditor;
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
  const selection = editor.selection;
  let text = editor.document.getText(selection);

  if (!text) {
    const range = editor.document.getWordRangeAtPosition(selection.active);
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
  const config = workspace.getConfiguration('dash');

  const customLang = config.get('custom_docsets')[languageId];
  if (customLang) {
    if (typeof (customLang) === 'string')
      return [customLang];
    else if (customLang instanceof Array)
      return customLang;
  }

  const docsets = config.get('docset');

  if (docsets[languageId]) {
    return docsets[languageId];
  }

  const showWarning = config.get('custom_docsets_warning');

  if (showWarning) {
    window.showInformationMessage(
      `Unknown language id. You may add '${languageId}' to dash.custom_docsets setting`,
      'Never show again').then((s) => {
        config.update('custom_docsets_warning', false, ConfigurationTarget.Global);
      });
  }

  return [];
}
