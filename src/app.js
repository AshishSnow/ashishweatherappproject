const express = require('express');
const path = require('path')
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 8000

//public static path

const static_path = path.join(__dirname, '../public')
const template_path=path.join(__dirname, '../templates/views')

const partials_path=path.join(__dirname, '../templates/partials')

app.use(express.static(static_path));

// views 

app.set('view engine', 'hbs');

app.set('views', template_path)

hbs.registerPartials(partials_path)

//routing
app.get('/', (req, res) => {

    // res.send('Welcome to Ashish Page')
    res.render('index')
})


app.get('/about', (req, res) => {
    // res.send('About Page')
    res.render('about')
})

app.get('/weather', (req, res) => {
    // res.send('Weather Page')
    res.render('weather')
})

app.get('*', (req, res) => {
    // res.send('404 page Oops')
    res.render('404error')
})

app.listen(port, () => {
    console.log(`Welcome ${port}`)
})