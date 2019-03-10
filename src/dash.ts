export class Dash {
  private OS: string;
  private URIHandler: string;

  constructor(OS: string) {
    this.OS = OS;
    this.URIHandler =
      {
        darwin: 'open -g',
        linux: 'zeal',
        // Same technique as Silverlake Software's "Search Docsets" extension,
        // which is written by Velocity's developer and is tested to work with current Velocity on W10.
        win32: 'cmd.exe /c start "" ',
      }[this.OS] || 'zeal';
  }

  /**
   * Get command to open dash
   *
   * @param {string} query - text to find
   * @param {string} docsets - array of docset e.g. [css, less]
   * @return {string} dash handler and uri
   */
  getCommand(query: string, docsets: string[] = []): string {
    let uri = 'dash-plugin://query=' + encodeURIComponent(query);
    const keys = this.getKeys(docsets);

    if (keys) {
      uri += '&keys=' + keys;
    }

    return `${this.URIHandler} "${uri}"`;
  }

  /**
   * Get docset keys parameter for dash
   *
   * @param {Array<string>} docsets - array of docset e.g [css, less]
   * @return {string} joined array in string e.g. "ruby,css,dimas" or empty string
   */
  getKeys(docsets: string[]): string {
    if (docsets.length > 0) {
      return docsets.join(',');
    }

    return '';
  }

}
