const fs = require('fs');

const {listAllFiles, searchFile, createFile} = require('./googleHandler/googleHandler');

const fileSource = fs.createReadStream(`${__dirname}/files/img/Screenshot_2020-03-30_09-49-49.png`)

createFile(fileSource);
