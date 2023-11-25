const fs = require("fs");

fs.exists, fs.exists_, fs._exists = (path, callback) => {
    fs.access(path, fs.constants.F_OK, err => {
        !err || typeof(err) == "undefined" || err == null ? callback(err, true) : callback(err, false)
    })
}

module.exports = fs
