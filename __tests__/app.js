const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-ascetic-modules:app', () => {
  beforeAll(() =>
    helpers.run(path.join(__dirname, '../generators/app')).withPrompts({ module: 'hello-world' }))

  it('creates files', () => {
    assert.file([
      'hello-world',
      'hello-world/.babelrc',
      'hello-world/.eslintrc',
      'hello-world/.gitignore',
      'hello-world/.prettierrc',
      'hello-world/.prettierignore',
      'hello-world/package.json',
      'hello-world/wallaby.json',
      'hello-world/src/index.js',
      'hello-world/src/__test__/base.spec.js'
    ])
  })
})
