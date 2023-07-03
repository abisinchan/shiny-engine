const inquirer = require('inquirer');
const fs = require('fs');
const Logo = require('./lib/shapes.js'); // import Logo class from shapes.js

// Function to write SVG file
function writeSVGFile(svgString, index = 1) {
  const fileName = `logo${index}.svg`;

  // Checks if the file already exists
  fs.access(fileName, fs.constants.F_OK, (err) => {
    if (err) {
      // if the file doesn't exist, write the new file
      fs.writeFile(fileName, svgString, (err) => {
        if (err) {
          console.error('Error writing SVG file:', err);
        } else {
          console.log(`Generated ${fileName}`);
        }
      });
    } else {
      // if the file already exists, increment the index and try again
      const newIndex = index + 1;
      writeSVGFile(svgString, newIndex);
    }
  });
}

// Function to generate SVG
function generateSVG(answers) {
  const { text, textColor, shape, shapeColorOption, shapeColor } = answers;

  // Determine the text color
  const parsedTextColor = /^#([0-9A-Fa-f]{3}){1,2}$/i.test(textColor)
    ? textColor
    : textColor.toLowerCase();

  // Determine the shape color
  const parsedShapeColor = /^#([0-9A-Fa-f]{3}){1,2}$/i.test(shapeColor)
    ? shapeColor
    : shapeColor.toLowerCase();

  // Create Logo instance
  const logo = new Logo(text, parsedTextColor, {
    type: shape,
    color: parsedShapeColor,
  });

  // Generate SVG
  const svgString = logo.generateLOGO();

  // Write SVG file
  writeSVGFile(svgString);
}

// Function for prompts
function main() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => {
          if (input.length > 3) {
            return 'Please enter up to three characters.';
          } else if (input.length < 3) {
            return 'Please enter at least three characters.';
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'textColorOption',
        message: 'Choose the text color type:',
        choices: ['Keyword', 'Hexadecimal'],
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:',
        when: (answers) => answers.textColorOption === 'Keyword',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (hexadecimal number):',
        validate: (input) => {
          if (/^#([0-9A-Fa-f]{3}){1,2}$/i.test(input)) {
            return true;
          }
          return 'Please enter a valid hexadecimal color value (e.g., #FF0000).';
        },
        when: (answers) => answers.textColorOption === 'Hexadecimal',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'list',
        name: 'shapeColorOption',
        message: 'Choose the shape color type:',
        choices: ['Keyword', 'Hexadecimal'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:',
        when: (answers) => answers.shapeColorOption === 'Keyword',
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (hexadecimal number):',
        validate: (input) => {
          if (/^#([0-9A-Fa-f]{3}){1,2}$/i.test(input)) {
            return true;
          }
          return 'Please enter a valid hexadecimal color value (e.g., #FF0000).';
        },
        when: (answers) => answers.shapeColorOption === 'Hexadecimal',
      },
    ])
    .then((answers) => {
      generateSVG(answers); // Call the generateSVG function with the answers
    })
    .catch((err) => {
      console.error(err);
    });
}

// Calling prompt
main();
