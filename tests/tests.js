const assert = require('assert');
const fs = require('fs');
const yargs = require('yargs');
const path = require('path');

describe('uml-to-json', () => {
  it('should convert a UML file to a JSON object', () => {
    const inputName = 'person.uml';
    const outputName = 'person.json';
    const expectedJsonName = 'person.uml.json';
    process.argv = ['node', 'app.js', "-i", inputName, "-o", outputName];

    const runApp = require('../app');

    const json = fs.readFileSync(outputName, 'utf-8');
    const expectedJson = fs.readFileSync(expectedJsonName, 'utf-8');
    assert.deepEqual(json, expectedJson); // insert expected output here
  });
});