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
    handleZeal(dash);
    exec(dash.getCommand(query, docsets));
}

/**
 * Search in dash for all documentation
 */
function searchAll() {
    var editor = getEditor();
    var query = getSelectedText(editor);

    var dash = new Dash();
    handleZeal(dash);
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

/**
 * Handle weird Zeal bug where it does not start up correctly
 *
 * @param {Dash} dash dash object
 * @return {void}
 */
function handleZeal(dash: Dash): void {
    if (dash.usingZeal()) {
        exec('zeal');
        // not sure why but the other command does not open zeal correctly sometimes, there's an error in Qt
    }
}
