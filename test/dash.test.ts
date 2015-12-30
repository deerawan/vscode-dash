'use strict';

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import {Dash} from '../src/dash';

suite("Dash Tests", () => {

    test('Get command with keys', () => {
        let dash = new Dash();
        var uri = dash.getCommand('size', ['css','less']);

        assert.equal(uri, 'open -g "dash-plugin://query=size&keys=css,less"');
    });

    test('Get command with no keys', () => {
        let dash = new Dash();
        var uri = dash.getCommand('size');

        assert.equal(uri, 'open -g "dash-plugin://query=size"');
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