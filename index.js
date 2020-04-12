// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();



// const fs = require ("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const _ = require("underscore");

inquirer
    .prompt({
        message: "Enter you Github username",
        name: "username"
    })
    .then(function ({ username }) {
       const ApiKey= "feb4d2c3125b8f03313b5cc532324f642f90e524"
        const queryUrl= `https://api.github.com/users/${username}?client_ID=${ApiKey}`;
        axios.get(queryUrl)
            .then(({ data }) => {
                console.log(data);
                // const repoNames= _.pluck(data , 'name');

                //     fs.writeFile(`repos.txt`, repoNames.join(`\n`), err =>{

                //         if (err) throw err;
                //         console.log ("filr successfully written");
                //     });
                // });

            });
        });

        // https://api.github.com/user/emails?access_token=feb4d2c3125b8f03313b5cc532324f642f90e524

        // avatar_url
        // html_url



// const fs = require("fs");
// const axios = require("axios");
// const inquirer = require("inquirer");
// const _ = require('underscore');
// inquirer
//   .prompt({
//     message: "Enter your GitHub username",
//     name: "username"
//   })
//   .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
//     axios.get(queryUrl)
//       .then(( { data }) => {
//         const repoNames = _.pluck(data, 'name');
//         // const repoNames = [];
//         // data.forEach(info => {
//         //   repoNames.push(info.name);
//         // })
//         // console.log(repoNames)
//         fs.writeFile('repos.txt', repoNames.join('\n'), err => {
//           if(err) throw err;
//           console.log("File successfully created");
//         });
//       });
//   });





//   // const whatScottWantsToDo = async function() {
//   //   try {
//   //     const response = await inquirer.prompt({
//   //       type: "input",
//   //       message: "What's username",
//   //       name: "name"
//   //     });
//   //     const response = await axios.get(`someUrl/${response.username}`);
//   //   } catch(e) {
//   //   }
//   // }
