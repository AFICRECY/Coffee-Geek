const express = require("express");
const path = require("path");
const fs= require("fs");
const util = require("util");
const {appendFile} = require('./utils');
// const public = require("public");

const app = express();
const PORT = process.env.PORT || 8080;

// Establishes middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('Develop/public'));

// Displays homepage
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});


// Displays pathway to notes file 
app.get("/notes", (req, res) => {
res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
});


// Displays the raw json file
app.get('/api/notes', (req, res) => {
  const readFromFile = util.promisify(fs.readFile);
  readFromFile('./Develop/db/db.json')
  .then((data)=>{
    try{
      const ans = JSON.parse(data);
      res.json(ans);
    }
    catch{
      return res.json([])
    }

  })


res.sendFile(path.join(__dirname, "Develop/db/db.json"));
// If this an option?
  // for (let i = 0; i < notes.length; i++) {
//   if (saved === notes[i].routeName) {
//     return res.json(saved[i]);
  })



// Creates new notes an add to the list of notes
app.post('/api/notes', (req, res) => {
  const {title,text} = req.body;
  if(title && text){
    const newNote={
      title,
      text
    }
    appendFile(newNote,'Develop/db/db.json')
    res.json('data saved successfully')
  }
// taking info sent in post, read database as it currently exists, 
// insert note into database, and then write back to the database

});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);




// To Do:
// 1. Create get requests for the index.html homepage
// 2. Create get requests for the notes.html secondary page
// 3. Create get request for the json of the notes the saved?
// 4.Create a app.listen for the port you listed
// 5. Create a middleware folder ???
// 6.