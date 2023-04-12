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
    // we create an initialization of /98 to get the req.params started on the path. the rest of the req.params keep going from the code below 
  });

  app.get('/:numberOfBottles', (req, res) => {
    const numOfBottles = parseInt(req.params.numberOfBottles);
    if (numOfBottles === 0) {
      res.send(`<h1>0 bottles of beer on the wall</h1>
                <a href="/">Start Over</a>`);
    } else if (numOfBottles > 0){
      const link = `<a href="/${numOfBottles - 1}">take one down, pass it around</a>`;
      res.send(`<h1>${numOfBottles} Bottles of beer on the wall</h1>
                ${link}`);
    } else {
      res.send("<h1>so you dont like beer?</h1>")
    }
  });

app.listen(3000, ()=> {
    console.log("Server is listening on port 3000");
})