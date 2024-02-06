const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const shapes = require('./lib/shapes.js')


// Main function

async function main() {
  console.log('Welcome to the Logo Generator');

  // Prompts User for Logo Information.

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter 3 characters for the logo.',
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color you would like the text to be.'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color you would like the shape to be.'
    }
  ]);

  const shape = new shapes[answers.shape](answers.shapeColor);

  const logo = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>
    `;
  // Function to save generated SVG to a file
  await writeFile("./examples/logo.svg", logo)
  console.log("New logo has been successfully created at Logo-Generator/examples/logo.svg")
};

// Run main function
main()