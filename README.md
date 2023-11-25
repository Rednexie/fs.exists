```js

const fs = require("./fs.js")
fs.exists("./file", function(err, data){
  //if(err) console.error(err)
  if(data){
    console.log("The file exists")
    process.exit(0)
  }
  else{
    console.log("The file doesn't exist.")
    process.exit(1)
  }
})
```
