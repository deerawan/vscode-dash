const OSOptions: OSOptions = {
  darwin: 'open -g',
  //Allows any dash compatible program to handle the request, even on flatpak.
  linux: 'xdg-open',
  // Same technique as Silverlake Software's "Search Docsets" extension,
  // which is written by Velocity's developer and is tested to work with current Velocity on W10.
  win32: 'cmd.exe /c start "" ', // TODO: do we need extra space?
};

export class Dash {
  private OS: string;
  private URIHandler: string;
  private option: DashOption;

  constructor(OS: string, option: DashOption) {
    this.OS = OS;
    this.URIHandler = OSOptions[this.OS as keyof OSOptions] || 'zeal';
    this.option = option;
  }

  /**
   * Get command to open dash
   *
   * @param {string} query - text to find
   * @param {string} docsets - array of docset e.g. [css, less]
   * @return {string} dash handler and uri
   */
  getCommand(query: string, docsets: string[] = []): string {
    const keys = (docsets || [])
      .map(docset => `${this.option.exactDocset ? 'exact:' : ''}${docset}`)
      .join(',');
    const encodedQuery = encodeURIComponent(query);
    return `${this.URIHandler} "dash-plugin://query=${encodedQuery}${
      keys ? `&keys=${keys}` : ``
    }"`;
  }
}

export interface DashOption {
  exactDocset: boolean;
}

interface OSOptions {
  darwin: string;
  linux: string;
  win32: string;
}
