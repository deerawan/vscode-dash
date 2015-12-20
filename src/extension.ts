
import {window, workspace, commands, ExtensionContext, TextEditor} from 'vscode';
import {exec} from 'child_process';

export function activate(context: ExtensionContext) {

    var dash = new Dash();

	context.subscriptions.push(commands.registerCommand('extension.dash.specific', () => {
        dash.searchSpecific();
	}));

    context.subscriptions.push(commands.registerCommand('extension.dash.all', () => {
        dash.searchAll();
	}));
}

export function deactivate() {
}

export class Dash {

    /**
     * Search in dash for specific syntax documentation
     */
    public searchSpecific() {
        var editor = this._getEditor();
        var query = this._getQuery(editor);
        var languageId = this._getLanguageId(editor);

        exec(this._getCommand(query, languageId));
    }

    /**
     * Search in dash for all documentation
     */
    public searchAll() {
        var editor = this._getEditor();
        var query = this._getQuery(editor);

        exec(this._getCommand(query));
    }

    /**
     * Get vscode active editor
     */
    private _getEditor() {
        var editor = window.activeTextEditor;
        if (!editor) {
            return;
        }

        return editor;
    }

    /**
     * Get query (selected text) for dash
     *
     * @param {TextEditor} editor
     * @return {string} query (selected text)
     */
    private _getQuery(editor: TextEditor) {
        var selection = editor.selection;
        var query = editor.document.getText(selection);

        return query;
    }

    /**
     * Get language id
     *
     * @param {TextEditor} editor
     * @return {string} language id e.g. javascript, css, html
     */
    private _getLanguageId(editor: TextEditor) {
        return editor.document.languageId;
    }

    /**
     * Get command to open dash
     *
     * @param {string} query - text to find
     * @param {languageId} - language id e.g. javascript, css, yaml
     */
    private _getCommand(query: string, languageId: string = '') {
        return 'open -g "' + this._getUri(query, languageId) + '"';
    }

    /**
     * Get dash uri
     *
     * @param {string} query - text to find
     * @param {string} languageId - language id e.g. javascript, css, yaml
     * @return {string} dash uri
     */
    public _getUri(query: string, languageId: string = '') {
        var uri = 'dash-plugin://query=' + encodeURIComponent(query);

        if (languageId) {
            let keys = this._getKeys(languageId);
            uri += '&keys=' + keys;
        }

        return uri;
    }

    /**
     * Get docset for keys parameter to dash
     *
     * @param {string} languageId - language id e.g. javascript, css, yaml
     * @return {array} array of docset for keys parameter
     */
    public _getKeys(languageId: string): string {
        let config = workspace.getConfiguration('docset');
        console.log(config);

        return config[languageId].join(',');
    }
}