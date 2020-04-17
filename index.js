const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter you Github username",
      name: "username"
    },
    {
      type: "input",
      message: "Enter your email",
      name: "email"
    },

    {
      type: "input",
      message: "what is title of your project",
      name: "title"
    },
    {
      type: "input",
      message: "what is description of your project",
      name: "description"
    },
    {
      type: "input",
      message: "write down table of contents of your project",
      name: "tableOfContents"
    },
    {
      type: "input",
      message: "write down installation process",
      name: "installation"
    },
    {
      type: "input",
      message: "write down usage of the application",
      name: "usage"
    },
    {
      type: "input",
      message: "write down license version",
      name: "license"
    },
    {
      type: "input",
      message: "write down your contributions",
      name: "contributing"
    },
    {
      type: "input",
      message: "what are your future development plans?",
      name: "question1"
    },
    {
      type: "input",
      message: "are you adding any new features into it?",
      name: "question2"
    }
  ])
  .then(async function ({ username, email, title, description, tableOfContents, installation, usage, license, contributing, question1, question2 }) {

    let { name, avatar_url, html_url } = await api.getUser(username);

    const responseData = {
      name,
      email,
      avatar_url,
      html_url,
      title,
      description,
      tableOfContents,
      installation,
      usage,
      license,
      contributing,
      question1,
      question2
    }
    const readme = generateMarkdown(responseData);

    fs.writeFile(`README.md`, readme, err => {

      if (err) throw err;
      console.log("file successfully written");
    });
  });