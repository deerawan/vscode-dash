import {platform} from 'os';
import {exec} from 'child_process';
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

        return this.getDashURIHandler() + ' ' + this.getOSSpecificURI(uri);
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
     * Returns the command to handle the URI in the command line.
     *
     * @return {string} name and flags of the command that takes the URI as an argument
     */
    getDashURIHandler(): String {
        // hacky switch statement
        return {
            'darwin': 'open -g',
            'linux': 'zeal',
            // start Zeal before we pass it a URI so it works whether Zeal is running in background or not.
            // Why is this needed? I have no idea, but I think Qt has to start up a listener on cmd before it will work.
            'win32': 'start dash-plugin:// && start'
        }[platform()] || 'zeal';
    }

    /**
     * Returns the OS specific URI to be handled.
     *
     * @param {string} uri - original constructed URI
     * @return {string} OS-specific URI to pass to handler, mainly because of Windows
     */
    getOSSpecificURI(uri: String): String {
        return {
            // on Windows, start can't deal with the double quotes, and & needs to be escaped with ^
            'win32': uri.replace('&', '^&')
        }[platform()] || '"' + uri + '"';
    }
}
