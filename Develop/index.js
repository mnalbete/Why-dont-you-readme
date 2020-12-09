const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {   
        type: "input",
        name: "title",
        message: "What is the title of the project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of the project?",
    },
    {
        type: "input",
        name: "install",
        message: "Installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this app?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license are you using?",
        choices: [
            "MIT License",
            "GVL GPL License",
            "Apache License",
            "UW student License",
            "No License",
        ]
    },
    {
        type: "input",
        name: "contribution",
        message: "Who contributed to this project",
    },
    { 
        type: "input",
        name: "question1",
        message: "Enter your email address?",
    },
    {
        type: "input",
        name: "question2",
        message: "What is your github ripository?",
    },
    {
        type: "input",
        name: "question3",
        message: "Why did you start to code?",
    },
    {
        type: "input",
        name: "question4",
        message: "Who is your insporation?",
    },
    {
        type: "input",
        name: "question5",
        message: "Do you find coding difficult?",
    },

];

console.clear();

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("ReadMe is generating");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {

        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);
    });

}

// function call to initialize program
init();
