// Render license badge if user choose license option

function badge(license) {
    if (license !== "None") {
      return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
    }
    return ``;
  }

// Render license table of content if user choose license option

  function link(license) {
    if (license !== "None") {
      return `- [License](#license-📝)`
    }
    return ``;
  }

// Render license section if user choose license option

  function section(license) {
    if (license !== "None") {
      return `## License 📝
      This application is covered by the ${license} license.`
    }
    return ``;
  
  }

// Function generating data to README file based on user's input

function generateMarkdown(data) {
return `
# ${data.title}

${badge(data.license)}

${data.name}

## Description 🔎
${data.description}

## Table of Contents 📖
- [Installation](#installation-⚙️)
- [Usage](#usage-🎮)
${link(data.license)}
- [Test](#tests-🧪)
- [Credits](#credits-🧑‍🤝‍🧑)
- [Questions](#questions-🙋)
- [Deployed Application](#deployed-application-🚀)

## Installation ⚙️
${data.install}

## Usage 🎮
${data.usage}

${section(data.license)}

## Tests 🧪
${data.test}

## Credits 🧑‍🤝‍🧑
${data.credits}

## Questions 🙋
If there are any questions, feel free to contact my email at: ${data.email}

You can also find me on GitHub at: [${data.github}](https://www.github.com/${data.github})

## Deployed Application 🚀
This application was deplopyed at [${data.deploy}](${data.deploy})
`
}

module.exports = generateMarkdown

