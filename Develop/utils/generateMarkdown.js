// function to generate markdown for README
function generateMarkdown(response) {
  return `
  
  # ${response.title}
  
  ## Table of contents
  * [Discription](#discription)
  * [Installation instructions](#instal)
  * [Usage](#usage)
  * [License](#license)
  * [Contibuters](#contribution)
  * [Tested](#test)
  * [Email](#question1)
  * [GitHub](#question2)
  * [Reason](#question3)
  * [Coding Difficulty](#question5)

  ## Disctiption
  ${response.description}

  ## Installation
  ${response.install}

  ## Usage
  ${response.usage}

  ## License
  ${response.license}

  ## Contributers
  ${response.contribution}

  ## Tested
  ${response.test}

  
  ## reason
  ${response.question3}
  
  ## Coding Difficutly
  ${response.question5}
  
  ## Questions
  If you want to contact me

  ## Email
  ${response.question1}
  
  ## Github
  ${response.question2}

`;}

module.exports = generateMarkdown;
