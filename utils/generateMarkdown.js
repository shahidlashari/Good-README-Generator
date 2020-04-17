function generateMarkdown({ title, name, email, avatar_url, html_url, description, tableOfContents, installation, usage, license, contributing, question1, question2 }) {
  return `
# **${title}**

### Description

* ${description}

### Table of Contents

* ${tableOfContents}

### Installation

* ${installation}

### Usage

* ${usage}

### License

* ${license}

### Contributing

* ${contributing}

### Question-1

* ${question1}

### Question-2

* ${question2}

### Name

*${name}*

* Email

*${email}*

*Profile Picture

![Profile Picture](${avatar_url})
 
*GitHub URL

*${html_url}*
`;
}

module.exports = generateMarkdown;
