const express = require('express')
const app = express()
const port = 4000

//allows users to access data
const cors = require('cors');
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors());
//allows us to access data
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//gets request for links
app.get('/', (req, res) => {
  res.send('Hello World!')
  //response ^^
})

//link to page datarep
app.get('/datarep', (req, res)=>{
    res.send("Welcome to data representation and querying")
})

//link to name but also adds any name you wish 
app.get('/hello/:name', (req, res)=>{
    res.send('Hello '+req.params.name);
})

app.post('/api/books', (req, res)=>{
    console.log(req.body);
    res.send('Data Recieved');
})

//wil return json data
app.get('/api/books', (req, res)=>{
  //json data below
  const books = [
    {
    "title": "Learn Git in a Month of Lunches",
    "isbn": "1617292419",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
    "status": "MEAP",
    "authors": ["Rick Umali"],
    "categories": []
    },
    {
    "title": "MongoDB in Action, Second Edition",
    "isbn": "1617291609",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
    "status": "MEAP",
    "authors": [
    "Kyle Banker",
    "Peter Bakkum",
    "Tim Hawkins",
    "Shaun Verch",
    "Douglas Garrett"
    ],
    "categories": []
    },
    {
      "title": "Getting MEAN with Mongo, Express, Angular, and Node",
      "isbn": "1617292036",
      "pageCount": 0,
      "thumbnailUrl":
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
      "status": "MEAP",
      "authors": ["Simon Holmes"],
      "categories": []
      }
      ]
      

  res.json({
      mybooks:books
  })
})


//linking to a sendfile response
app.get('/test', (req, res)=>{
  res.sendFile(__dirname+'/index.html')
})

// gets first name and second name 
app.get('/name', (req, res)=>{
  res.send('Hello '+req.query.Fname + ' '+ req.query.Sname);
})

//POST version of the above
app.post('/name', (req, res)=>{
  console.log(req.body)
  res.send('Hello POST'+ req.body.Fname + ' '+ req.body.Sname);
})


// get the server up and running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})