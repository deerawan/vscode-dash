import * as assert from 'assert';
import { Dash } from '../src/dash';

suite('Dash Tests', () => {
  test('Get command with keys for macOS', () => {
    const dash = new Dash('darwin');
    const uri = dash.getCommand('size', ['css', 'less']);

    assert.equal(uri, 'open -g "dash-plugin://query=size&keys=exact:css,exact:less"');
  });

  test('Get command with no keys for macOS', () => {
    const dash = new Dash('darwin');
    const uri = dash.getCommand('size');

    assert.equal(uri, 'open -g "dash-plugin://query=size"');
  });

  test('Get command with keys for Windows', () => {
    const dash = new Dash('win32');
    const uri = dash.getCommand('size', ['css', 'less']);

    assert.equal(
      uri,
      'start dash-plugin:// && start dash-plugin://query=size^&keys=exact:css,exact:less'
    );
  });

  test('Get command with no keys for Windows', () => {
    const dash = new Dash('win32');
    const uri = dash.getCommand('size');

    assert.equal(uri, 'start dash-plugin:// && start dash-plugin://query=size');
  });

  test('Get command with keys for Linux', () => {
    const dash = new Dash('linux');
    const uri = dash.getCommand('size', ['css', 'less']);

    assert.equal(uri, 'zeal "dash-plugin://query=size&keys=exact:css,exact:less"');
  });

  test('Get command with no keys for Linux', () => {
    const dash = new Dash('linux');
    const uri = dash.getCommand('size');

    assert.equal(uri, 'zeal "dash-plugin://query=size"');
  });

  test('Get keys with exist docset', () => {
    const dash = new Dash('darwin');
    const keys = dash.getKeys(['css', 'less']);

    assert.equal(keys, 'exact:css,exact:less');
  });

  test('Get keys with empty docset', () => {
    const dash = new Dash('darwin');
    const keys = dash.getKeys([]);

    assert.equal(keys, '');
  });
});
