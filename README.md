# SVG Logo Maker

## Description

The following is a node.js command-line application, which prompts the user to to select a color and shape, provide up to 3 letters of text for a logo, and then, it will dynamically generate an SVG (Scalable Vector Graphic). This application employs the use of Jest, to run tests on the code, as well as Inquirer, to collect and use input via the command-line. In order to take advatange of the functionality, a user need only run 'npm install --save-dev jest', and 'npm install inquirer@8.2.4', to download the dependencies. Then, the user can run 'npm test' to invoke jest, or 'node index.js' to invoke inquirer, and simply follow the steps until a new logo.svg file has been generated. The following is an image of what one may see after running 'node index.js' in the console.
![Screenshot 2024-05-09 143453](https://github.com/Rinovi/SVG-Logo-Maker/assets/160938078/f6bbe978-1cb2-40e9-9d27-5881269a9ce9)


## Usage

In order to test the project. The user can start by running 'npm install --save-dev jest' to get the dependencies for Jest. Then, after running npm test, the user will be able to see tests being run on the code. In order to generate an SVG, the user should start by running 'npm install inquirer@8.2.4' to get the correct version of Inquirer dependencies. Then, after running 'node index.js' the user will be greeted with a short list of prompts. Simply follow the prompts by entering in up to 3 letters of text, preferred text color, shape, and preferred shape color. Upon completion, the user will see the message, "Generated logo.svg in the examples folder", and need only navigate to the folder and open their folder in the browser to see the finished result. The following is a showcase video which demonstrates the complete functionality of the application.
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/hXr0DuDZcsU/0.jpg)](https://www.youtube.com/watch?v=hXr0DuDZcsU)

## Credits

* Credits to Jest, and a link to their documentation: https://jestjs.io/docs/getting-started
* Also, credits to the wonderful command line interface for Node.JS, Inquirer: https://www.npmjs.com/package/inquirer
