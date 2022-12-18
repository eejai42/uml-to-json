const assert = require('assert');
const fs = require('fs');

describe('uml-to-json', () => {
  it('should convert a UML file to a JSON object', () => {
    const inputName = 'tests/person.uml';
    const outputName = 'tests/person.json';
    const expectedJsonName = 'tests/person.uml.json';
    process.argv = ['node', 'app.js', "-i", inputName, "-o", outputName];

    const runApp = require('../app');

    const json = fs.readFileSync(outputName, 'utf-8');
    const expectedJson = fs.readFileSync(expectedJsonName, 'utf-8');
    assert.deepEqual(json, expectedJson); // insert expected output here
  });
});