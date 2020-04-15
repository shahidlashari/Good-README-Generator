function generateMarkdown({title, name, email, avatar_url, html_url, description, tableOfContents, installation, usage, license, contributing, question1, question2}) 
{
  return `
# **${title}**

* ${description}

* ${tableOfContents}

* ${installation}

* ${usage}

* ${license}

* ${contributing}

* ${question1}

* ${question2}

## ${name}

 ${email}

 ![Profile Picture](${avatar_url})
 
 ${html_url}
`;
}

module.exports = generateMarkdown;
