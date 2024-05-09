const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

inquirer.prompt([
    {
        type: 'input',
        name: 'userText',
        message: 'Enter the text:',
        validate: function(input) {
            // Check if the input text length is greater than 3 characters
            if (input.length > 3) {
                // If the input is longer than 3 characters, truncate it
                return input.slice(0, 3);
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'rectangle', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:',
    }
]).then((answers) => {
    const userText = answers.userText;
    const textColor = answers.textColor;
    const shape = answers.shape;
    const shapeColor = answers.shapeColor;

    // Initialize the SVG code variable
    let svgCode = "";

    // Determine the shape based on the user's choice
    if (shape === "circle") {
        // Create a circle
        svgCode = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">
            <circle cx="150" cy="100" r="90" fill="${shapeColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="60">${userText}</text>
        </svg>`;
    } else if (shape === "rectangle") {
        // Create a rectangle
        svgCode = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">
            <rect x="10" y="10" width="280" height="180" fill="${shapeColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="60">${userText}</text>
        </svg>`;
    } else if (shape === "triangle") {
        // Create a triangle
        svgCode = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">
            <polygon points="150,10 10,190 290,190" fill="${shapeColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="60">${userText}</text>
        </svg>`;
    }

    // Use the generated SVG code based on the user's shape choice
    console.log(svgCode);

    // Determine the path to the examples folder
    const examplesFolderPath = path.join(__dirname, 'examples', 'logo.svg');

    // Write the SVG content to a file named logo.svg in the examples folder
    fs.writeFileSync(examplesFolderPath, svgCode);
    console.log('Generated logo.svg in the examples folder');
});