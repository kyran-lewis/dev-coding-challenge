// import necessary modules
const express = require('express')
const cors = require('cors')
//const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Joke = require('./models/jokesModel')
const path = require('path')
let jokeType = 0

app.use(express.json())

app.use(express.static(path.join(__dirname, '../front-end-new')));
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');

app.use(cors());


app.get('/',  async(req, res) =>{
    const generalJokes = await Joke.find({ "type": "general"})
    let randomNum = Math.floor((Math.random() * generalJokes.length));
    res.render('index', {
        joke : generalJokes[randomNum]
    })
})

app.get("/general", async(req, res) => {
    generalJokes = await Joke.find({ "type": "general"})
    let randomNum = Math.floor((Math.random() * generalJokes.length));
    res.render('partials/joke-card', {
      joke: generalJokes[randomNum]
    });
  });
  
  app.get("/programming", async(req, res) => {
    const programmingJokes = await Joke.find({ "type": "programming"}),
    randomNum = Math.floor((Math.random() * programmingJokes.length));
    res.render('partials/joke-card', {
      joke: programmingJokes[randomNum]
    });
  });

  app.get("/knock-knock", async(req, res) => {
    const knockKnockJokes = await Joke.find({ "type": "knock-knock"}),
    randomNum = Math.floor((Math.random() * knockKnockJokes.length));
    res.render('partials/joke-card', {
      joke: knockKnockJokes[randomNum]
    });
  });

// connect to db
mongoose.set('strictQuery',false)
mongoose.
connect('mongodb+srv://admin:cKdqGMN5Bsx05KIX@devtaskapi.dttydao.mongodb.net/data?retryWrites=true&w=majority')
.then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on ${port}`)
      })
    console.log('connected to MongoDB')
}).catch((error) =>{
    console.log(error)
})