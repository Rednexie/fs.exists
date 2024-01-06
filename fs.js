const fs = require("fs");

fs.exists, fs.exists_, fs._exists = (path, callback) => {
    fs.access(path, fs.constants.F_OK, err => {
        !err || typeof(err) == "undefined" || err == null ? callback(err, true) : callback(err, false)
    })
}
fs.promises.exists_, fs.promises._exists = async (path) => {
    try{
        await fs.promises.access(path, fs.constants.F_OK);
        return true
    }
    catch(err){
        return false
    }
}

module.exports = fs
