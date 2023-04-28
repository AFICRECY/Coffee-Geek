# Coffee-Geek (Digital Note Taker)


## Technology Used:
| Technology Used         | Resource URL           |
| ------------- |:-------------:|
| Git | [https://git-scm.com/](https://git-scm.com/)     |
| JavaScript  | [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |
| Node.js | [https://nodejs.org/en](https://nodejs.org/en)      |
| Express.js | [https://expressjs.com/](https://expressjs.com/)   |
|  Heroku  | [https://id.heroku.com/login](https://id.heroku.com/login)    |
| Font Awesome  |  [https://fontawesome.com/icons](https://fontawesome.com/icons)   |



## Description:

Watch Functionality Video:

Note Taking is an important practice and can serve as a valuable means of documenting crucial details. Writing notes can help anyone by reminding them of ideas, tasks, or assignments, and even new information that could have otherwise been forgotten. Not only does note-taking aid in retention of auditory information, it also facilitates active listening and enhances comprehension by prompting selection of noteworthy points. With a note-taking app, you can capture your ideas wherever you are, ensuring that you never forget them. Digital note-taking also enables you to read and edit your notes on the go, freeing you from the need to stay at your desk or computer all day.

This application brings together multiple different kinds of software to create a note taking application called Coffee Geek. Coffee Geek allows the user to enter a title as well as a note and save them to a list of tasks in a user friendly environment. All the user would have to do is enter our website, press the “Get Started” button and jot down anything they would like into the “Title” and “Text” section. Once they press the save icon at the top of the screen, they will be able to save their note which appears on the left side of their screen in a list. 



## Table of Contents:
* Installation (JavaScript, Node.js, NPM Packages, Template Literals, Arrow Functions, Objects, and Functions Heroku, Express.js)
* Usage
* Credits
* License



## Installation:

To install this project, a knowledge of JavaScript, Node.js, and Express.js  were required. I had to first install Node.js to my computer and then install the Express and NPM packages. The Express package allowed me to use the express framework in Node.js. It allowed me to create a website which functions as a digital note taker and saves user input as well as deletes it. In order to create this application, HTML, CSS, Client-side JavaScript as well as Server Side JavaScript all needed to be used in order to make the page interactive and give the functionality to save/delete user input values. Methods used ranged from, Template Literals, Arrow Functions, Objects, and Functions, Variables, If/Else Statements, and the server side JavaScript. The web application is intended for the user to be able to visit the deployed URL and have the ability to enter whatever Title and Text they would like. They would also have the ability to save their notes to the left column, where they can read them later, or delete them if they want. The code below makes this happen. 

### Establishing links and connections
```
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");


const { v4: uuidv4 } = require("uuid");


const app = express();
const PORT = process.env.PORT || 8080;


```
(Above: The code imports four modules: express, path, fs, and util. The code also imports the uuidv4 function from the uuid module. After importing required modules,an  instance of the Express application is created, which is then stored in the variable named app. In addition, the code sets the value of the PORT variable to the value of the environment variable PORT 8080.)


### Middleware
```
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));
```
(Above: The “app.use(express.urlencoded({ extended: true }))”, configures the application to recognize and parse incoming requests with URL-encoded payloads. The extended option allows for more complex data to be parsed.The “app.use(express.json())”, configures the application to recognize and parse incoming requests with JSON payloads. Finally, the “app.use(express.static("public"))”, serves static files such as images, CSS, and JavaScript files in the specified directory named "public".) 



### Get Request (directing the pathway)
```
app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, "./public/index.html"));
});


app.get("/notes", (req, res) => {
 res.sendFile(path.join(__dirname, "./public/notes.html"));
});


```
(Above: The code uses two different app.get() methods of the Express application to set up two routes for handling HTTP GET requests.The first method sets up a route for the root URL ("/"). When a client makes a GET request to the root URL. The second method sets up a route for the "/notes" URL. When a client makes a GET request to the "/notes" URL.)



### Post Request
```
app.post("/api/notes", (req, res) => {
 const { title, text } = req.body;
 if (title && text) {
   const newNote = {
     title,
     text,
     id: uuidv4(),
   };
   readFromFile("./db/db.json").then((data) => {
 
     const existingData = JSON.parse(data);
     existingData.push(newNote);
     fs.writeFileSync("./db/db.json", JSON.stringify(existingData));
     res.json("data saved successfully");
   });
 }
});
```
(Above: This code defines a POST route that allows the user to add new notes to the db.json file using the HTTP POST method. The Express application reads the title and text properties from the req.body object, which is expected to be in JSON format.The code expects the request body to contain a JSON object with title and text properties. The new note is given a unique identifier using the uuidv4() function, and the updated data is written back to the JSON file.)



### Delete Route
```
app.delete('/api/notes/:id', (req, res) => {
 const contentId = req.params.id
 console.log(contentId)
 readFromFile('./db/db.json')
 .then((data)=>JSON.parse(data))
 .then((response) => {
   const answer = response.filter((content)=>content.id!=contentId)
   fs.writeFileSync("./db/db.json", JSON.stringify(answer));
   res.json("data has been deleted");
 })
})
```
(Above: This code defines a DELETE route that allows clients to delete notes from the db.json file using the HTTP DELETE method. The code reads the existing notes data from a file located at "./db/db.json" using the readFromFile() function, removes the note object with the specified id from the data array using the filter() method, and writes the updated data back to the JSON file.)




### Usage: 

With the growing popularity of online learning programs and the integration of interactive teaching trends by educators, it's logical that students are increasingly relying on computers, digital devices, and apps to enhance their learning. Traditional methods of taking notes using paper and pencils are no longer the only option available to students. Thanks to educational technology (ie. Digital NoteTakers like Coffee-Geek), innovative note-taking strategies are being developed by educators to foster active learning. This web application is designed for students, employees, and any note taker alike who would like to utilize our easy to navigate and user friendly note taker application. All a user would need to do is visit our deployed website, enter a “Title” and a “Text” input, press the save button and then that's it! The user’s notes are saved onto the left hand column of the page. They also have the ability to delete a note entry that they no longer need there. 

Overall, this application streamlines the Note Taking process and can save the time of any one who would like to utilize a digital note taker.  



## Credits

* Express Installation: https://expressjs.com/en/starter/installing.html
* Static Files: https://expressjs.com/en/starter/static-files.html
* Express API: https://expressjs.com/en/api.html
* GET & POST Requests: https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests
* SendFile: https://www.geeksforgeeks.org/express-js-res-sendfile-function/
* Error Help: https://stackoverflow.com/questions/14949118/node-js-error-cannot-find-module-express
* Heroku: https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true#set-up 
* UUID Breakdown: https://www.npmjs.com/package/uuid 
* Save Icon: https://fontawesome.com/icons 
* Heroku Insta: https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli#connect-your-heroku-account-to-github 
* Insomnia: https://insomnia.rest/ 
* Express Routing Guide: https://expressjs.com/en/guide/routing.html





### License:
MIT License

Copyright (c) [2023] [Afi Nkhume-Crecy]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,





