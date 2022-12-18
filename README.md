# uml-to-json

Uml-to-json is a Node.js NPM command-line tool that can parse PlantUML text diagrams and return the Abstract Syntax Tree (AST) in JSON format. 

It allows developers to easily convert UML diagrams into a structured and easily queriable format, making it simpler to integrate them into their software development workflow. 

By converting UML diagrams to JSON, uml-to-json allows developers to import and export them as JSON files, which can be easily read and interpreted by other programs and libraries. 

This tool is particularly useful for working with large and complex UML diagrams, as it helps to structure and organize the data in a way that is more manageable and easier to understand.
## Installation

To install uml-to-json, you will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine. Once you have these prerequisites installed, you can install uml-to-json by running the following command:

npm install -g eejai42/uml-to-json
This will install uml-to-json globally, allowing you to use it from any directory on your machine.

## Usage

The `uml-to-json` command-line tool has the following options:

- `-i, --input &lt;input>`: Specify the input UML file to be converted. This option is required.
- `-o, --output &lt;output>`: Specify the output JSON file name. The default value is `uml.json`.

## Examples

Here are some examples of using the `uml-to-json` tool. To convert a UML diagram to JSON format, you can use the following command:

```uml-to-json -i abc.uml -o abc.json```

```uml-to-json --input school.uml --output school.json```

```uml-to-json -i library.uml```

The first command will parse the UML diagram in the `abc.uml` file to JSON format, and save the resulting JSON file to `abc.json`. The second example converts the `school.uml` file to `school.json`. The third example converts the `library.uml` file to the default output file, `uml.json`.

## PlantUML

PlantUML is a popular open-source tool for creating UML diagrams. It allows users to define their diagrams using a simple, human-readable syntax, which is then rendered into various output formats, including PNG, SVG, and ASCII art. PlantUML also provides a wide range of features for customizing and styling your diagrams, such as colors, shapes, and font sizes.

Here is an example of a simple PlantUML diagram that models a class with two attributes and two methods:

`person.uml`
```
@startuml
class Person {

  name: string
  age: int
  getName(): string
  setName(name: string): void
}
@enduml
```

`person.json`
```[
  {
    "elements": [
      {
        "name": "Person",
        "title": "Person",
        "isAbstract": false,
        "members": [
          {
            "name": "name",
            "isStatic": false,
            "accessor": "+",
            "type": "string"
          },
          {
            "name": "age",
            "isStatic": false,
            "accessor": "+",
            "type": "int"
          },
          {
            "name": "getName",
            "isStatic": false,
            "accessor": "+",
            "returnType": "void",
            "_arguments": ""
          },
          {
            "name": "setName",
            "isStatic": false,
            "accessor": "+",
            "returnType": "void",
            "_arguments": "name: string"
          }
        ],
        "extends_": [],
        "implements_": [],
        "generics": [],
        "stereotypes": []
      }
    ]
  }
]
```

This PlantUML code defines a class called `Person` with two attributes, `name` and `age`, and two methods, `getName` and `setName`. When rendered, this diagram would show a box with the class name, and the attributes and methods listed inside the box.

PlantUML is widely used in software development and can be easily integrated into various tools and platforms, such as version control systems, issue trackers, and documentation generators.

## UML vs. PlantUML

UML (Unified Modeling Language) is a visual language for modeling software systems. It provides a standard notation for representing the structure and behavior of systems, including class diagrams, sequence diagrams, and state diagrams. UML allows developers to communicate their design decisions in a clear and concise way, and can be used throughout the software development lifecycle.

PlantUML is a tool for creating UML diagrams. It allows users to define their diagrams using a simple, human-readable syntax, and provides various features for customizing and styling their diagrams. PlantUML is not a replacement for UML, but rather a tool for creating and rendering UML diagrams.

## Testing Architecture

This project uses [Mocha](https://mochajs.org/) as the testing framework. Mocha is a flexible and feature-rich JavaScript testing library that allows you to write and run tests for your code.

To install Mocha, run the following command in the project's root directory:

```
npm install --save-dev mocha
```

Once Mocha is installed, you can configure it by creating a `test` script in the package.json file:

```
"scripts": {
  "test": "mocha test"
}
```

To run the tests, simply run the following command:

```
npm test
```

This will execute all of the tests in the `test` directory, and display the results in the console.

Note that you may need to adjust the test script depending on the structure of your project and the specific needs of your tests. For example, you may need to specify a different test directory or pass additional arguments to Mocha. For more information on configuring Mocha, see the [Mocha documentation](https://mochajs.org/).

## Dependencies

This project has the following dependencies:

- [Commander](https://www.npmjs.com/package/commander): A command line interface (CLI) library that makes it easy to create CLIs in Node.js.
- [Plantuml-parser](https://www.npmjs.com/package/plantuml-parser): A parser for PlantUML diagrams that converts the diagrams to a JSON representation.

These dependencies are specified in the package.json file and can be installed by running the following command in the project's root directory:

```
npm install
```

This will install all of the required dependencies and their dependencies, allowing you to use them in your project.

Note that you may need to update the dependencies if new versions are released or if you need to use a specific version of a dependency. To update the dependencies, run the following command:

```
npm update
```

This will update all of the dependencies to their latest versions, as specified in the package.json file.

## Installing and Configuring Node.js

This project requires [Node.js](https://nodejs.org/) to run. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to execute JavaScript code on the server side.

To install Node.js, follow these steps:

1. Go to the [Node.js download page](https://nodejs.org/en/download/).
2. Select the version of Node.js that you want to install.
3. Follow the instructions to download and install Node.js.

Once Node.js is installed, you can confirm that it is working by running the following command in a terminal or command prompt:

```
node -v
```

This will print the version of Node.js that you have installed.

To configure Node.js, you can set the following environment variables:

- `NODE_ENV`: Sets the environment for the application. This can be set to "development", "test", or "production".
- `NODE_PATH`: Sets the search path for Node.js modules. This can be used to specify a custom directory for your modules.

You can set these variables in the terminal or command prompt by running the following commands:

```
export NODE_ENV=development
export NODE_PATH=./lib
```

Alternatively, you can set these variables in the system or user environment variables, depending on your operating system.

For more information on installing and configuring Node.js, see the [Node.js documentation](https://nodejs.org/en/docs/).

## Credits
`uml-to-json` was created by [ssotme](https://github.com/ssotme). Special thanks to all the contributors who have helped to make this tool possible.

This tool is built on top of the [plantuml-parser](https://www.npmjs.com/package/plantuml-parser) library, which does most of the heavy lifting in parsing and converting PlantUML diagrams to JSON format. The plantuml-parser library is developed by [Gustavo Costa](https://github.com/gustavocosta) and is released under the MIT license. Thank you to Gustavo and all the contributors to the plantuml-parser library.
