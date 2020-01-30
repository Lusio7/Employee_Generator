const fs = require("fs");
const path = require("path");
const util = require("util");


const Manager = require("./constructors/Manager");
const Engineer = require("./constructors/Engineer");
const Intern = require("./constructors/Intern");

const templatesDir = path.resolve(__dirname, "../templates");

const buildDir = path.resolve(__dirname, "../build/");


const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);



async function render(employees) {
  const html = [];

  