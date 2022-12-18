# uml-to-json

UML (Unified Modeling Language) is a visual language used to model software systems. It allows developers to describe the structure and behavior of their systems in a clear and concise way. However, working with UML diagrams can be challenging, especially when it comes to integration with other tools and systems.

This is where uml-to-json comes in. uml-to-json is a command-line tool that converts UML diagrams to JSON format, making it easier to parse and query the diagram data. With uml-to-json, you can import your UML diagrams and export them as JSON files, which can be easily read and interpreted by other programs and libraries.

Before using uml-to-json, your UML diagram may be in an unparsed, unstructured format. However, after running uml-to-json, your diagram will be parsed and structured in a way that is easily queriable. This makes it much easier to integrate your UML diagrams into your software development workflow, whether you are working on a small project or a large-scale enterprise application.

## Installation

To install uml-to-json, you will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine. Once you have these prerequisites installed, you can install uml-to-json by running the following command:

npm install -g ssotme/uml-to-json
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
]```

This PlantUML code defines a class called `Person` with two attributes, `name` and `age`, and two methods, `getName` and `setName`. When rendered, this diagram would show a box with the class name, and the attributes and methods listed inside the box.

PlantUML is widely used in software development and can be easily integrated into various tools and platforms, such as version control systems, issue trackers, and documentation generators.

## UML vs. PlantUML

UML (Unified Modeling Language) is a visual language for modeling software systems. It provides a standard notation for representing the structure and behavior of systems, including class diagrams, sequence diagrams, and state diagrams. UML allows developers to communicate their design decisions in a clear and concise way, and can be used throughout the software development lifecycle.

PlantUML is a tool for creating UML diagrams. It allows users to define their diagrams using a simple, human-readable syntax, and provides various features for customizing and styling their diagrams. PlantUML is not a replacement for UML, but rather a tool for creating and rendering UML diagrams.

## Credits
`uml-to-json` was created by [ssotme](https://github.com/ssotme). Special thanks to all the contributors who have helped to make this tool possible.

This tool is built on top of the [plantuml-parser](https://www.npmjs.com/package/plantuml-parser) library, which does most of the heavy lifting in parsing and converting PlantUML diagrams to JSON format. The plantuml-parser library is developed by [Gustavo Costa](https://github.com/gustavocosta) and is released under the MIT license. Thank you to Gustavo and all the contributors to the plantuml-parser library.
