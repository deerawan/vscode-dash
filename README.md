# Visual Studio Code Dash

[Dash](https://kapeli.com/dash) documentation integration for [Visual Studio Code](https://code.visualstudio.com/)

> Dash is an API Documentation Browser and Code Snippet Manager for MacOS

Also support [Zeal](https://zealdocs.org/) for Windows and Linux.

[![Build Status](https://travis-ci.org/deerawan/vscode-dash.svg?branch=master)](https://travis-ci.org/deerawan/vscode-dash) [![Coverage Status](https://coveralls.io/repos/deerawan/vscode-dash/badge.svg?branch=master&service=github)](https://coveralls.io/github/deerawan/vscode-dash?branch=master)
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors)

![vscode dash](https://raw.githubusercontent.com/deerawan/vscode-dash/master/images/vscode-dash.gif)

## Installation

Type `cmd + shift + p` to launch command palette and choose `Extensions: Install Extension`. Search this package and install.

## Usage

Get the text under your cursor or selected first:

- Pressing `ctrl + h`. It will search for current specific documentation depends on language.
- Pressing `ctrl + alt + h`. It will search for all documentation.

No need to select the text:

- Pressing `ctrl + shift + h`. It will open dash with current file's docset.
- Pressing `alt + h`. It will open dash with custom string and current file's docset.

## Supported Docsets

This plugin supports almost all docset configuration based on [Dash Mapping](https://kapeli.com/dash_plugins)

### Language to docset matching

This plugin supports language to docset mapping.

For other languages that are not supported by default in VS Code,
you probably need to install [language plugins](https://marketplace.visualstudio.com/search?target=VSCode&category=Languages&sortBy=Downloads)
first in order to allow VS Code to detect the language.

<!-- prettier-ignore -->
Language | Dash Docset Keys | Docset Setting | Language Plugin |
------------ | ------------- | ------------- | :-------------: |
Ansible | ansible | dash.languageIdToDocsetMap.ansible, dash.languageIdToDocsetMap.ansible-advanced | [link](https://marketplace.visualstudio.com/items?itemName=haaaad.ansible)
C++ | cpp,net,boost,qt,cvcpp,cocos2dx,c,manpages | dash.languageIdToDocsetMap.cpp | [link](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
C# | net,mono,unity3d | dash.languageIdToDocsetMap.csharp
Clojure | clojure | dash.languageIdToDocsetMap.clojure
CoffeeScript | coffee | dash.languageIdToDocsetMap.coffee
CSS | css,bootstrap,foundation,less,awesome,<br>cordova,phonegap | dash.languageIdToDocsetMap.css
Dart | dartlang,polymerdart,angulardart | dash.languageIdToDocsetMap.dart | [link](https://marketplace.visualstudio.com/items?itemName=DanTup.dart-code)
Elixir | elixir | dash.languageIdToDocsetMap.elixir | [link](https://marketplace.visualstudio.com/items?itemName=mjmcloug.vscode-elixir)
Erlang | erlang | dash.languageIdToDocsetMap.erlang
Go | go,godoc | dash.languageIdToDocsetMap.go | [link](https://marketplace.visualstudio.com/items?itemName=lukehoban.Go)
Haskell | haskell | dash.languageIdToDocsetMap.haskell
Haml | haml | dash.languageIdToDocsetMap.haml | [link](https://marketplace.visualstudio.com/items?itemName=karunamurti.haml)
Haxe | haxe | dash.languageIdToDocsetMap.haxe | [link](https://marketplace.visualstudio.com/items?itemName=nadako.vshaxe)
HTML | html,svg,css,bootstrap,foundation,<br>awesome,statamic,javascript,jquery,jqueryui,<br>jquerym,angularjs,backbone,marionette,<br>meteor,moo,prototype,ember,lodash,<br>underscore,sencha,extjs,knockout,<br>zepto,cordova,phonegap,yui | dash.languageIdToDocsetMap.html
Jade | jade | dash.languageIdToDocsetMap.jade
Java | java,javafx,grails,groovy,playjava,spring,<br>cvj,processing | dash.languageIdToDocsetMap.java | [link](https://marketplace.visualstudio.com/items?itemName=redhat.java)
JavaScript | javascript,jquery,jqueryui,jquerym,react,<br>angularjs,backbone,marionette,meteor,<br>sproutcore,moo,prototype,bootstrap,<br>foundation,lodash,underscore,ember,<br>sencha,extjs,titanium,knockout,zepto,<br>yui,d3,svg,dojo,coffee,nodejs,express,<br>grunt,mongoose,moment,require,<br>awsjs,jasmine,sails,sinon,chai,<br>html,css,cordova,phonegap,unity3d | dash.languageIdToDocsetMap.javascript
Julia | julia | dash.languageIdToDocsetMap.julia | [link](https://marketplace.visualstudio.com/items?itemName=julialang.language-julia)
Less | less | dash.languageIdToDocsetMap.less
Lua | lua,corona | dash.languageIdToDocsetMap.lua | [link](https://marketplace.visualstudio.com/items?itemName=gccfeli.vscode-lua)
Markdown | markdown | dash.languageIdToDocsetMap.markdown
Objective-C | iphoneos,macosx,watchos,tvos,<br>appledoc,cocos2d,cocos3d,<br>kobold2d,sparrow,c,manpages | dash.languageIdToDocsetMap.objective-c
Perl | perl,manpages | dash.languageIdToDocsetMap.perl
PHP | php,wordpress,drupal,zend,laravel,yii,joomla,ee,<br>codeigniter,cakephp,phpunit,symfony,typo3,<br>twig,smarty,craft,phpp,html,statamic,mysql,<br>sqlite,mongodb,psql,redis | dash.languageIdToDocsetMap.php
Processing | processing | dash.languageIdToDocsetMap.pde | [link](https://marketplace.visualstudio.com/items?itemName=Tobiah.language-pde)
Puppet | puppet | dash.languageIdToDocsetMap.puppet | [link](https://marketplace.visualstudio.com/items?itemName=Borke.Puppet)
Python | python,django,twisted,sphinx,flask,tornado,<br>sqlalchemy,numpy,scipy,salt,pandas,matplotlib,cvp | dash.languageIdToDocsetMap.python | [link](https://marketplace.visualstudio.com/items?itemName=tht13.python)
R | r | dash.languageIdToDocsetMap.r
Ruby | ruby,rubygems,rails | dash.languageIdToDocsetMap.ruby | [link](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby)
Rust | rust | dash.languageIdToDocsetMap.rust | [link](https://marketplace.visualstudio.com/items?itemName=saviorisdead.RustyCode)
Sass | sass,compass,bourbon,neat,susy,css | dash.languageIdToDocsetMap.sass
Scala | scala,akka,playscala | dash.languageIdToDocsetMap.scala
Shell Scripts | bash,manpages | dash.languageIdToDocsetMap.shellscript
SQL | mysql,sqlite,psql | dash.languageIdToDocsetMap.sql
Stylus | stylus | dash.languageIdToDocsetMap.stylus | [link](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)
Swift | swift,iphoneos,macosx,watchos,tvos,appledoc | dash.languageIdToDocsetMap.swift | [link](https://marketplace.visualstudio.com/items?itemName=rlovelett.vscode-swift-language)
Tcl | tcl | dash.languageIdToDocsetMap.tcl | [link](https://marketplace.visualstudio.com/items?itemName=rashwell.tcl)
Terraform | terraform | dash.languageIdToDocsetMap.terraform | [link](https://marketplace.visualstudio.com/items?itemName=mauve.terraform)
TypeScript | typescript | dash.languageIdToDocsetMap.typescript
YAML | chef,ansible | dash.languageIdToDocsetMap.yaml

#### Added docset in this plugin

<!-- prettier-ignore -->
Language | Dash Docset Keys | Docset Setting | Language Plugin
------------ | ------------- | ------------- | :-------------:
Elm | elm | dash.languageIdToDocsetMap.elm | [link](https://marketplace.visualstudio.com/items?itemName=sbrink.elm)
React | react | dash.languageIdToDocsetMap.javascriptreact | [link](https://marketplace.visualstudio.com/items?itemName=TwentyChung.jsx)

### File name to docset matching

This plugin also supports file name matching to docset, this is useful to target docset for any specific file name such as `docker.yml` or `vagrantfile`.

**NOTE: You can use glob pattern to define the file name**

<!-- prettier-ignore -->
File Name | Dash Docset Keys | Docset Setting
------------ | ------------- | -------------
[dD]ocker* | docker | dash.fileNameToDocsetMap["docker.yml"]
vagrantfile | vagrant | dash.fileNameToDocsetMap["vagrantfile"]
gruntfile.js | grunt | dash.fileNameToDocsetMap["gruntfile.js"]
gulpfile.js | gulp | dash.fileNameToDocsetMap["gulpfile.js"]

### What is `Dash Docset Keys`?

You can find dash docset key in Dash application.

![dash docset key](https://raw.githubusercontent.com/deerawan/vscode-dash/master/images/dash-docset-key.jpg)

## Change Docset Configuration

You can change docset in `settings.json` or pressing `cmd + ,`.
Every configuration start with `dash.docset`. See `Docset Setting` column in Supported Docset table above.

### Example Case:

Based on default docset configuration, if we search in typescript files (.ts), it will search in typescript docset.
But now we want to make it able to search in javascript docset too.

Type `cmd + ,` then we change typescript docset by adding new dash docset key "javascript". So, whenever we search from typescript files, it will search in typescript and javascript docset.

The result will look like below:

```
// settings.json, add lines below
"dash.languageIdToDocsetMap": {
  ...,
  "typescript": [
    "typescript",
    "javascript" // we add new dash docset key here
  ]
  ...
}
```

## Change Keyboard Shortcut

You can bind default shortcut to another shortcut keys

Choose in top menu `Code -> Preferences -> Keyboard Shortcuts` or using shortcuts `cmd + K, cmd + S`

Add one or two lines below

```json
{ "key": "your_shortcut", "command": "extension.dash.specific" }, // search selection in corresponding docset
{ "key": "your_shortcut", "command": "extension.dash.all" } // search in all docset
{ "key": "your_shortcut", "command": "extension.dash.emptySyntax" } // open dash with current file's docset open
{ "key": "your_shortcut", "command": "extension.dash.searchSyntax" } // open dash with custom string and current file's docset
```

## Contributors

Thank you for these awesome contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/1243921?v=4" width="100px;"/><br /><sub><b>Budi Irawan</b></sub>](http://budiirawan.com)<br />[💻](https://github.com/deerawan/vscode-dash/commits?author=deerawan "Code") [📖](https://github.com/deerawan/vscode-dash/commits?author=deerawan "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/250935?v=4" width="100px;"/><br /><sub><b>Dima Granetchi</b></sub>](https://github.com/profelis)<br />[💻](https://github.com/deerawan/vscode-dash/commits?author=profelis "Code") [📖](https://github.com/deerawan/vscode-dash/commits?author=profelis "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/6226408?v=4" width="100px;"/><br /><sub><b>Logan Saso</b></sub>](https://github.com/loganintech)<br />[💻](https://github.com/deerawan/vscode-dash/commits?author=loganintech "Code") [📖](https://github.com/deerawan/vscode-dash/commits?author=loganintech "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/8567599?v=4" width="100px;"/><br /><sub><b>Zhongren Shao</b></sub>](https://github.com/szhongren)<br />[💻](https://github.com/deerawan/vscode-dash/commits?author=szhongren "Code") [📖](https://github.com/deerawan/vscode-dash/commits?author=szhongren "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/5329046?v=4" width="100px;"/><br /><sub><b>dingweifeng</b></sub>](https://github.com/weifding)<br />[📖](https://github.com/deerawan/vscode-dash/commits?author=weifding "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/941359?v=4" width="100px;"/><br /><sub><b>Seth Bromberger</b></sub>](http://www.bromberger.com)<br />[💻](https://github.com/deerawan/vscode-dash/commits?author=sbromberger "Code") [📖](https://github.com/deerawan/vscode-dash/commits?author=sbromberger "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/1086461?v=4" width="100px;"/><br /><sub><b>br1anchen</b></sub>](https://github.com/br1anchen)<br />[💻](https://github.com/deerawan/vscode-dash/commits?author=br1anchen "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

MIT © [Budi Irawan](https://budiirawan.com)
