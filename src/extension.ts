import {window, workspace, commands, ExtensionContext, TextEditor, Selection} from 'vscode';
import {exec} from 'child_process';
import {Dash} from './dash';

export function activate(context: ExtensionContext) {

	context.subscriptions.push(commands.registerCommand('extension.dash.specific', () => {
        searchSpecific();
	}));

    context.subscriptions.push(commands.registerCommand('extension.dash.all', () => {
        searchAll();
	}));
}

/**
 * Search in dash for specific syntax documentation
 */
function searchSpecific() {
    var editor = getEditor();
    var query = getSelectedText(editor);
    var languageId = editor.document.languageId;
    var docsets = getDocsets(languageId);

    var dash = new Dash();

    exec(dash.getCommand(query, docsets));
}

/**
 * Search in dash for all documentation
 */
function searchAll() {
    var editor = getEditor();
    var query = getSelectedText(editor);

    var dash = new Dash();

    exec(dash.getCommand(query));
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
