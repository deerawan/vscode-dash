
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

    public _getKeys(languageId: string): string {
        let config = vscode.workspace.getConfiguration('dash');
        return config[languageId].join(',');
    }

    public _getUri(query, languageId) {
        var uri = 'dash-plugin://query=' + encodeURIComponent(query);

        if (languageId) {
            let keys = this._getKeys(languageId);
            uri += '&keys=' + keys;
        }

        return uri;
    }
}