// import necessary modules
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Joke = require('./models/jokesModel')

app.use(express.json())

// allow access (cors)
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// get a random joke from database 
app.get('/jokes', async(req, res) =>{
    try{
        const randomJoke = await Joke.aggregate([{ $sample: { size: 1 } }]) // Adapted from https://stackoverflow.com/questions/2824157/how-can-i-get-a-random-record-from-mongodb
        res.status(200).json(randomJoke)
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