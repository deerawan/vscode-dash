
import * as assert from 'assert';
import {Dash} from '../src/dash';
import {platform} from 'os';
import * as proxyquire from 'proxyquire';

var platforms = {
    'win32': 'cmd /c start ""',
    'linux': 'xdg-open',
    'freebsd': 'xdg-open',
    'sunos': 'xdg-open',
    'darwin': 'open -g',
    'unknown': 'open -g',
}

suite("Dash Tests", () => {

    test('Get command with keys', () => {
        let dash = new Dash();
        var uri = dash.getCommand('size', ['css', 'less']);
        var command = platforms[platform()] || 'open -g';

        assert.equal(uri, `${command} "dash-plugin://query=size&keys=css,less"`);
    });

    test('Get command with no keys', () => {
        let dash = new Dash();
        var uri = dash.getCommand('size');
        var command = platforms[platform()] || 'open -g';

        assert.equal(uri, `${command} "dash-plugin://query=size"`);
    });

    test('Get platform command line ', () => {

        let dash = new Dash();
        let command = dash.getPlatformCommand();

        let expectedCommand = platforms[platform()] || 'open -g';
        assert.equal(command, expectedCommand);
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