const fs = require('fs');

const inquirer = require('inquirer');

//importing generateMArkdown javascript file 
const { generateSVG } = require('./utils/generateSVG.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your SVG image text (no more than 3 characters):',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter your desired text color (use color keyword or hexadecimal number):',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'Please select a shape for the image:',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'Please enter your desired shape color (use color keyword or hexadecimal number):',
        name: 'color',
    },
];

// TODO: Create a function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);

            const fileName = './examples/logo.svg';

            writeToFile(fileName, generateSVG(data));

        });
}

// Function call to initialize app
init();