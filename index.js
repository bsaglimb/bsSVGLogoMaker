// Inquirer (node package manager) import
const inquirer = require("inquirer");

// File system module import
const fs = require("fs");

// Importing classes from ./lib/shapes.js directory
const { Triangle, Square, Circle } = require("./lib/shapes.js");

    // Function writes the SVG file using user answers from inquirer prompts
    async function writeToFile(fileName, answers) {
      // File starts as an empty string
      let svgString = "";
      svgString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
      // <g> tag wraps <text> tag so that user font input layers on top of the shape and not behind it
      svgString += "<g>";
      // Takes user input for shape choice and inserts it into the SVG file
      svgString += `${answers.shape}`;

      // Conditional check that takes users input from the choices array and then adds the shape properties and shape color to SVG string
      let shapeChoice;
      if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
      } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
      } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
      }

      // <text> tag creates a text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
      svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
      // Closing </g> tag
      svgString += "</g>";
      // Closing </svg> tag
      svgString += "</svg>";

      // Generates svg file, takes in file name given in the promptUser function, the svg string, and a ternary operator which handles logging any errors, or generates a "Generated logo.svg" message to the console  
      fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
      })
    }

    // Function that prompts the user to answer questions
    function promptUser() {
      inquirer
        .prompt([
          // Text prompt
          {
            type: "input",
            message:
              "What text would you like your logo to display? (Enter up to three characters)",
            name: "text",
          },
          // Text color prompt
          {
            type: "input",
            message:
              "Choose text color (Enter color keyword OR a hexadecimal number)",
            name: "textColor",
          },
          // Shape choice prompt
          {
            type: "list",
            message: "What shape would you like the logo to render?",
            choices: ["Triangle", "Square", "Circle"],
            name: "shape",
          },
          // Shape color prompt
          {
            type: "input",
            message:
              "Choose shapes color (Enter color keyword OR a hexadecimal number)",
            name: "shapeBackgroundColor",
          },
        ])
        .then(async (answers) => {
          // Error handling for text prompt (user must enter 3 characters or fewer for the logo to generate)
          if (answers.text.length > 3) {
            console.log("Must enter a value of no more than 3 characters");
            promptUser();
          } else {
            // Calls write file function to generate SVG file
            await writeToFile("logo.svg", answers);
          }
        });
    }
// Calls promptUser function so inquirer prompts start when application is ran
promptUser();