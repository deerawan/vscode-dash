# Visual Studio Code Dash

[Dash](https://kapeli.com/dash) documentation integration for [Visual Studio Code](https://code.visualstudio.com/)

> Dash is an API Documentation Browser and Code Snippet Manager for MacOS

[![Build Status](https://travis-ci.org/deerawan/vscode-dash.svg?branch=master)](https://travis-ci.org/deerawan/vscode-dash) [![Coverage Status](https://coveralls.io/repos/deerawan/vscode-dash/badge.svg?branch=master&service=github)](https://coveralls.io/github/deerawan/vscode-dash?branch=master)

![vscode dash](https://raw.githubusercontent.com/deerawan/vscode-dash/master/images/vscode-dash.gif)

## Installation
Type `cmd + shift + p` to launch command palette and choose `Extensions: Install Extension`. Search this package and install.

## Usage
Get the text under your cursor or selected first.

- Pressing `ctrl + h`. It will search for current specific documentation depends on language.
- Pressing `ctrl + alt + h`. It will search for all documentation.

## Supported Docsets
This plugin supports almost all docset configuration based on [https://kapeli.com/dash_plugins](Dash Mapping)

For other languages that are not supported by default by VS Code, you probably need to install [https://marketplace.visualstudio.com/search?target=VSCode&category=Languages&sortBy=Downloads](language plugins).

Language | Dash Docset Keys | Docset Setting | VS Code Plugin |
------------ | ------------- | ------------- | ------------- |
C++ | cpp,net,boost,qt,cvcpp,cocos2dx,c,manpages | dash.docset.cpp | [link](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
C# | net,mono,unity3d | dash.docset.csharp
Clojure | clojure | dash.docset.clojure
CoffeeScript | coffee | dash.docset.coffee
CSS | css,bootstrap,foundation,less,awesome,cordova,phonegap | dash.docset.css
Dart | dartlang,polymerdart,angulardart | dash.docset.dart | [link](https://marketplace.visualstudio.com/items?itemName=DanTup.dart-code)
Elixir | elixir | dash.docset.elixir | [link](https://marketplace.visualstudio.com/items?itemName=mjmcloug.vscode-elixir)
Erlang | erlang | dash.docset.erlang
Go | go,godoc | dash.docset.go | [link](https://marketplace.visualstudio.com/items?itemName=lukehoban.Go)
Haskell | haskell | dash.docset.haskell
HTML | html,svg,css,bootstrap,foundation,awesome,statamic,<br>javascript,jquery,jqueryui,jquerym,angularjs,backbone,<br>marionette,meteor,moo,prototype,ember,lodash,underscore,<br>sencha,extjs,knockout,zepto,cordova,phonegap,yui | dash.docset.html
Jade | jade | dash.docset.jade
Java | java,javafx,grails,groovy,playjava,spring,cvj,processing | dash.docset.java | [link](https://marketplace.visualstudio.com/items?itemName=redhat.java)
JavaScript | javascript,jquery,jqueryui,jquerym,react,angularjs,<br>backbone,marionette,meteor,sproutcore,moo,<br>prototype,bootstrap,foundation,lodash,underscore,<br>ember,sencha,extjs,titanium,knockout,zepto,yui,d3,<br>svg,dojo,coffee,nodejs,express,grunt,mongoose,<br>moment,require,awsjs,jasmine,sails,sinon,chai,<br>html,css,cordova,phonegap,unity3d | dash.docset.javascript
Less | less | dash.docset.less
Lua | lua,corona | dash.docset.lua | [link](https://marketplace.visualstudio.com/items?itemName=gccfeli.vscode-lua)
Markdown | markdown | dash.docset.markdown
Objective-C | iphoneos,macosx,watchos,tvos,appledoc,cocos2d,<br>cocos3d,kobold2d,sparrow,c,manpages | dash.docset.objective-c
Perl | perl,manpages | dash.docset.perl
PHP | php,wordpress,drupal,zend,laravel,yii,joomla,ee,<br>codeigniter,cakephp,phpunit,symfony,typo3,<br>twig,smarty,craft,phpp,html,statamic,mysql,<br>sqlite,mongodb,psql,redis | dash.docset.php
Processing | processing | dash.docset.pde | [link](https://marketplace.visualstudio.com/items?itemName=Tobiah.language-pde)
Puppet | puppet | dash.docset.puppet | [link](https://marketplace.visualstudio.com/items?itemName=Borke.Puppet)
Python | python,django,twisted,sphinx,flask,tornado,<br>sqlalchemy,numpy,scipy,salt,pandas,matplotlib,cvp | dash.docset.python | [link](https://marketplace.visualstudio.com/items?itemName=tht13.python)
R | r | dash.docset.r
Ruby | ruby,rubygems,rails | dash.docset.ruby | [link](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby)
Rust | rust | dash.docset.rust | [link](https://marketplace.visualstudio.com/items?itemName=saviorisdead.RustyCode)
Sass | sass,compass,bourbon,neat,susy,css | dash.docset.sass
Scala | scala,akka,playscala | dash.docset.scala
Shell Scripts | bash,manpages | dash.docset.shellscript
SQL | mysql,sqlite,psql | dash.docset.sql
Stylus | stylus | dash.docset.stylus | [link](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)
Swift | swift,iphoneos,macosx,watchos,tvos,appledoc | dash.docset.swift | [link](https://marketplace.visualstudio.com/items?itemName=rlovelett.vscode-swift-language)
Tcl | tcl | dash.docset.tcl | [link](https://marketplace.visualstudio.com/items?itemName=rashwell.tcl)
TypeScript | typescript | dash.docset.typescript
YAML | chef,ansible | dash.docset.yaml

### Added docset in this plugin
Language | Dash Docset Keys | Docset Setting | VS Code Plugin
------------ | ------------- | ------------- | -------------
Elm | elm | dash.docset.elm | [link](https://marketplace.visualstudio.com/items?itemName=sbrink.elm)
React | react | dash.docset.javascriptreact | [link](https://marketplace.visualstudio.com/items?itemName=TwentyChung.jsx)

### What is `Dash Docset Keys`?
You can find dash docset key in Dash application.

![dash docset key](https://raw.githubusercontent.com/deerawan/vscode-dash/master/images/dash-docset-key.jpg)

## Change Docset Configuration
You can change docset in `settings.json` or pressing `cmd + ,`.
Every configuration start with `dash.docset`. See `Docset Setting` in Supported Docset table above.

### Example Case:
Based on default docset configuration, if we search in typescript files (.ts), it will search in typescript docset.
But now we want to make it to search in javascript docset too.

Type `cmd + ,` then we change typescript docset by adding new dash docset key "javascript". So, whenever we search from typescript files, it will search in typescript and javascript docset.

The result will look like below:

```
// settings.json, add lines below
"dash.docset.typescript": [
    "typescript",
    "javascript", // we add new dash docset key here
]
```

## License
MIT
