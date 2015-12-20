# Visual Studio Code Dash

[Dash](https://kapeli.com/dash) documentation integration for [Visual Studio Code](https://code.visualstudio.com/)

## Installation
Type `cmd-shift-p` to launch command palette and choose `Extensions: Install Extension`. Search this package and install.

## Usage
Get the text under your cursor or selected first.

- Pressing `cmd-h`. It will search for current specific documentation depends on language.
- Pressing `cmd-shift-h`. It will search for all documentation.

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
