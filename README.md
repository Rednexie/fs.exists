```js

const fs = require("./fs.js")
fs.exists("./file", function(err, data){
  //if(err) console.error(err)
  if(data){
    console.log("The file exists")
    process.exit(0)
  }
})
```
