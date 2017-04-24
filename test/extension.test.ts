
import * as assert from 'assert';
import {Dash} from '../src/dash';

suite("Dash Tests", () => {

    test('Get command with keys for macOS', () => {
        let dash = new Dash();
        var uri = dash.getCommand('size', 'darwin', ['css','less']);

        assert.equal(uri, 'open -g "dash-plugin://query=size&keys=css,less"');
    });

    test('Get command with no keys for macOS', () => {
        let dash = new Dash();
        var uri = dash.getCommand('size', 'darwin');

        assert.equal(uri, 'open -g "dash-plugin://query=size"');
    });

    test('Get command with keys for Windows', () => {
        let dash = new Dash();
        var uri = dash.getCommand('size', 'win32', ['css','less']);

        assert.equal(uri, 'start dash-plugin:// && start dash-plugin://query=size^&keys=css,less');
    });

    test('Get command with no keys for Windows', () => {
        let dash = new Dash();
        var uri = dash.getCommand('size', 'win32');

        assert.equal(uri, 'start dash-plugin:// && start dash-plugin://query=size');
    });

    test('Get command with keys for Linux', () => {
        let dash = new Dash();
        var uri = dash.getCommand('size', 'linux', ['css','less']);

        assert.equal(uri, 'zeal "dash-plugin://query=size&keys=css,less"');
    });

    test('Get command with no keys for Linux', () => {
        let dash = new Dash();
        var uri = dash.getCommand('size', 'linux');

        assert.equal(uri, 'zeal "dash-plugin://query=size"');
    });

    test('Get keys with exist docset', () => {
        let dash = new Dash();
        var keys = dash.getKeys(['css', 'less']);

        assert.equal(keys, 'css,less');
    });

    test('Get keys with empty docset', () => {
        let dash = new Dash();
        var keys = dash.getKeys([]);

        assert.equal(keys, '');
    });
});
