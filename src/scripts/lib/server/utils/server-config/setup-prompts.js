const fs = require('fs')

module.exports = [{
  type: 'input',
  name: 'clientData',
  message: 'Client data directory',
  default: 'C:/Program Files (x86)/World of Warcraft/Data',
  validate: function(value) {
    let done = this.async()

    fs.lstat(value, function(err, stats) {
      if (err) {
        done('Invalid path')
      } else if (stats.isDirectory()) {
        done(true)
      } else {
        done('Please provide path to a directory')
      }
    });
  }
}, {
  type: 'input',
  name: 'serverPort',
  message: 'Server port',
  default: '3000'
}]
