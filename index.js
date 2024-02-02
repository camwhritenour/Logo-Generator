const inquirer = require('inquirer');
const fs = require('fs');


//Function to promt user for logo information

async function prompt() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter 3 characters for the logo.'
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'Name a color you would like the text to be.'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape.',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'Name a color you would like the shape to be.'
        }
    ]);

    return answers;
}

// Function to save generated SVG to a file
function saveLogoToFile(logo, filename) {
    fs.writeFileSync(filename, logo, 'utf-8');
    console.log(`Logo saved to ${filename}.svg`)
}

// Main function
async function main() {
    console.log('Welcome to the Logo Generator');

    // Prompt user for logo details
    const logoDetails = await promptUser();

    // Call function to generate the logo SVG
    const generatedLogo = createLogo = createLogo(logoDetails);

    // Prompt user for file name
    const {filename} = await inquirer.prompt([
        {
            type: 'input',
            name: 'fileName',
            message: 'Enter the filename:'
        }
    ]);

    // Save the logo to a file
    saveLogoToFile(generatedLogo, filename);

}

// Run main function
main()