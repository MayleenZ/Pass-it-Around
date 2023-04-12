const express = require('express')
const app = express()

app.set("view engine", "jsx")
app.engine("jsx", require("jsx-view-engine").createEngine())

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`
      <h1>99 Bottles of beer on the wall</h1>
      <a href="/98">take one down, pass it around</a>
    `);
  });

app.get('/:number_of_bottles', (req, res) => {
    console.log(req.params);
    const numOfBottles = parseInt(req.params.number_of_bottles)
    let link = ''
    if (numOfBottles > 0){
        link = `Take one down, pass it around <a href="/${numOfBottles-1}">${numOfBottles-1} bottles of beer on the wall</a>`;
    } 
    res.send(`<h1>${numOfBottles} bottles of beer</h1> ${link} <a href = "/" start over`)
})

app.listen(4000, ()=> {
    console.log("Server is listening on port 4000");
})