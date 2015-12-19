
import * as vscode from 'vscode';
import {exec} from 'child_process';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('extension.dash', () => {
        var dash = new Dash();
        dash.lookUp();
	}));
}

export function deactivate() {
}

export class Dash {

    /**
     * Look up in dash 
     */
    public lookUp() {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        var selection = editor.selection;
        var query = editor.document.getText(selection);
        var languageId = editor.document.languageId;

        exec('open -g "' + this._getUri(query, languageId) + '"');
    }

    /**
     * Get docset for keys parameter to dash
     *
     * @param {string} languageId - language id e.g. javascript, css, yaml
     * @return {array} array of docset for keys parameter
     */
    public _getKeys(languageId: string): string {
        let config = vscode.workspace.getConfiguration('dash');
        return config[languageId].join(',');
    }

    /**
     * Get dash uri
     *
     * @param {string} query - text to find
     * @param {string} languageId - language id e.g. javascript, css, yaml
     * @return {string} dash uri
     */
    public _getUri(query, languageId) {
        var uri = 'dash-plugin://query=' + encodeURIComponent(query);

        if (languageId) {
            let keys = this._getKeys(languageId);
            uri += '&keys=' + keys;
        }

        return uri;
    }
}