const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./libs/shapes.js'); // import from shapes.js


//function for prompts.
function main() {
  inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):',
      },
    ]);
  
    .then((answers) => { 
      generateSVG(answers);//if no error it will call this function and start passing through the ansers
    })
    .catch((err) => {
      console.error(err); // else it will throw an error.
    });
}
// caling prompt
main();
