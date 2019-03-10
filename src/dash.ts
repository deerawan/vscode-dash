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
    const keys = (docsets || []).join(",");
    const encodedQuery = encodeURIComponent(query);
    return `${this.URIHandler} "dash-plugin://query=${encodedQuery}${keys?`&keys=${keys}`:``}"`;
  }

}
