const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const app = express()

const port = process.env.PORT || 3000;

// Mongoose Database
mongoose.connect('mongodb://127.0.0.1:27017/contactDance');

// Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    Phone: String,
    email: String,
    Address: String,
    Message: String,
});

// Model mongoose
const Contact = mongoose.model('Contact', contactSchema);


app.use('/static', express.static('static'));
// app.use(express.urlencoded());


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// Endpoints
app.get('/', (req, res) => {
    res.status(200).render('home.pug');
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
});


app.post('/', (req, res) => {


    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send('<h1>Your Data has been submitted successfully</h1>');
        // res.status(200).render('index.pug');
    }).catch(() => {
        res.status(400).send('Error cannot load a data.');
    });

});

app.post('/contact', (req, res) => {


    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send('<h1>Your Data has been submitted successfully</h1>');
        // res.status(200).render('index.pug');
    }).catch(() => {
        res.status(400).send('Error cannot load a data.');
    });

});

app.listen(port, () => {
    console.log(`listening on port : ${port} `);
});