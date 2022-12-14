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
      return `- [License](#license-๐)`
    }
    return ``;
  }

// Render license section if user choose license option

  function section(license) {
    if (license !== "None") {
      return `## License ๐
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

## Description ๐
${data.description}

## Table of Contents ๐
- [Installation](#installation-โ๏ธ)
- [Usage](#usage-๐ฎ)
${link(data.license)}
- [Test](#tests-๐งช)
- [Credits](#credits-๐งโ๐คโ๐ง)
- [Questions](#questions-๐)
- [Deployed Application](#deployed-application-๐)

## Installation โ๏ธ
${data.install}

## Usage ๐ฎ
${data.usage}

${section(data.license)}

## Tests ๐งช
${data.test}

## Credits ๐งโ๐คโ๐ง
${data.credits}

## Questions ๐
If there are any questions, feel free to contact my email at: ${data.email}

You can also find me on GitHub at: [${data.github}](https://www.github.com/${data.github})

## Deployed Application ๐
This application was deplopyed at [${data.deploy}](${data.deploy})
`
}

module.exports = generateMarkdown

