const { JSDOM } = require('jsdom');

describe('Test Hola Mundo', () => {
  test('should pass', () => {
    const dom = new JSDOM('<!DOCTYPE html><html lang="es"><body><h1>Hola Mundo</h1></body></html>');
    global.document = dom.window.document;

    expect(document.body.textContent).toContain('Hola Mundo');
  });
});
