import {
  window,
  workspace,
  commands,
  ExtensionContext,
  TextEditor,
  Selection,
  InputBoxOptions,
} from 'vscode';
import * as path from 'path';
import * as micromatch from 'micromatch';
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
  const docsets = getDocsets();

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
  const query = '';
  const docsets = getDocsets();
  const dash = new Dash(OS);

  exec(dash.getCommand(query, docsets));
}

/**
 * Search in dash for editor syntax documentation with a custom query
 */
function searchCustomWithSyntax() {
  const docsets = getDocsets();
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
 * @return {string}
 */
function getDocsets(): string[] {
  const editor = getEditor();
  const fileName = path.basename(editor.document.fileName);
  const languageId = editor.document.languageId;

  const fileNameDocsets = getFileNameDocsets(fileName);
  const languageIdDocsets = getLanguageIdDocsets(languageId);

  // prioritize docset matching by file name then language id
  return [...fileNameDocsets, ...languageIdDocsets];
}

/**
 * Get docsets based on file name
 * @param {string} fileName
 * @return {string}
 */
function getFileNameDocsets(fileName: string) {
  const fileNameConfig = workspace.getConfiguration('dash.fileNameToDocsetMap');
  const matchedFileNameConfigKey = Object.keys(fileNameConfig).find(config =>
    micromatch.isMatch(fileName, config)
  );

  return matchedFileNameConfigKey
    ? fileNameConfig[matchedFileNameConfigKey]
    : [];
}

/**
 * Get docsets based on languge id
 * @param languageId
 * @return {string}
 */
function getLanguageIdDocsets(languageId: string) {
  const languageIdConfig = workspace.getConfiguration(
    'dash.languageIdToDocsetMap'
  );

  return languageIdConfig[languageId] || [];
}
