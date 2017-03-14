import {platform} from 'os';

export class Dash {

    /**
     * Get command to open dash
     *
     * @param {string} query - text to find
     * @param {string} docsets - array of docset e.g. [css, less]
     * @return {string} dash uri
     */
    getCommand(query: string, docsets: Array<string> = []): string {

        var uri = 'dash-plugin://query=' + encodeURIComponent(query);
        var keys = this.getKeys(docsets);

        if (keys) {
            uri += '&keys=' + keys;
        }

        return `${this.getPlatformCommand()} "${uri}"`;
    }

    /**
     * Get docset keys parameter for dash
     *
     * @param {Array<string>} docsets - array of docset e.g [css, less]
     * @return {string} joined array in string e.g. "ruby,css,dimas" or empty string
     */
    getKeys(docsets: Array<string>): string {

        if (docsets.length > 0) {
            return docsets.join(',');
        }

        return '';
    }

    /**
     * Get platform specific command to run/execute query on Dash, Zeal or Velocity
     *
     * @return {string} the command that will be run to 
     */
    getPlatformCommand() {
        // Inspired by the Dash plugin for Atom
        // (see https://github.com/blakeembrey/atom-dash/blob/master/lib/dash.coffee)
        let command = '';
        switch (platform().toLowerCase()) {
            case 'win32':
                command = 'cmd /c start ""';
                break;
            case 'linux':
            case 'freebsd':
            case 'sunos':
                command = 'xdg-open';
                break;
            case 'darwin':
            default:
                command = 'open -g';
        }
        return command;
    }
}