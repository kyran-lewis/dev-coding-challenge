// import necessary modules
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Joke = require('./models/jokesModel')
const path = require('path')

app.use(express.json())

app.use(express.static(path.join(__dirname, '../front-end-new')));


// allow access (cors)
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/',  (req, res) =>{
    res.sendFile(path.join(__dirname,'../front-end-new/index.html'))
})

// get a random joke from database 
app.get('/jokes', async(req, res) =>{
    try{
        // find jokes by type
        const generalJokes = await Joke.find({ "type": "general"})
        const programmingJokes = await Joke.find({ "type": "programming"})
        const knockKnockJokes = await Joke.find({ "type": "knock-knock"})
        // send jokes as an array where general are at position 0, programming jokes at position 1, knock knock jokes are at position 2
        res.status(200).json([generalJokes,programmingJokes,knockKnockJokes])
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

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