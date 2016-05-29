# Visual Studio Code Dash

[Dash](https://kapeli.com/dash) documentation integration for [Visual Studio Code](https://code.visualstudio.com/)

[![Build Status](https://travis-ci.org/deerawan/vscode-dash.svg?branch=master)](https://travis-ci.org/deerawan/vscode-dash) [![Coverage Status](https://coveralls.io/repos/deerawan/vscode-dash/badge.svg?branch=master&service=github)](https://coveralls.io/github/deerawan/vscode-dash?branch=master)

![vscode dash](https://raw.githubusercontent.com/deerawan/vscode-dash/master/images/vscode-dash.gif)

## Installation
Type `cmd-shift-p` to launch command palette and choose `Extensions: Install Extension`. Search this package and install.

## Usage
Get the text under your cursor or selected first.

- Pressing `ctrl-h`. It will search for current specific documentation depends on language.
- Pressing `ctrl-alt-h`. It will search for all documentation.

## Docset Configuration
You can add or change docset in `settings.json` or pressing `cmd-,`.
Every configuration start with "dash.docset" following with language like below:

```
"dash.docset.dart": [
    "dartlang",
    "polymerdart",
    "angulardart"
]
```

## License
MIT
