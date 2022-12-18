#!/usr/bin/env node
'use strict';

try {


    const fs = require('fs');
    const plantumlParser = require('plantuml-parser');
    const program = require('commander');

    program.on('option:input', (input) => {
        console.log(input);
    });

    program
        .option('-i, --input <input>', 'input PlantUML file')
        .option('-o, --output <output>', 'Output json file name.  Default value: uml.json')
        .option('-h, --help', 'Show the usage/help documentation.')
        .action(action => {
            program.input = action.input
            program.output = action.output || 'uml.json';
         })
        .parse(process.argv);

    if (!program.input) {
        console.error('Error: Required option -i, --input <input> not specified');
        console.error('');
        console.error('Usage: uml-to-json -i, --input <input> [options]');
        console.error('');
        console.error('');
        console.error('Options:');
        console.error('-i, --input <input>  Input PlantUML file');
        console.error('-o, --output <output>  Output json file name. Default value: uml.json');
        console.error('-h, --help     Output usage information');
        console.error('');
        
        process.exit(1);
    }

    // Read the input PlantUML file
    console.error(program.input)
    const input = fs.readFileSync(program.input, 'utf-8');

    // Parse the input and generate the AST
    const ast = plantumlParser.parse(input);

    // Convert the AST to JSON
    const json = JSON.stringify(ast, null, 2);

    // Write the JSON to the output file
    fs.writeFileSync(program.output, json);

} catch (err) {
    console.error(err);
}
