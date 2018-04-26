const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Welcome to the terrific ${chalk.red('generator-ascetic-modules')} generator!`))

    const prompts = [
      {
        type: 'input',
        name: 'module',
        message: 'Enter module name:',
        default: 'another-module-bootsrap'
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
    })
  }

  writing() {
    const { module } = this.props

    this.fs.copy(this.templatePath('bootstrap'), this.destinationPath(`${module}`), {
      module: module
    })
  }

  install() {
    this.installDependencies()
  }
}
