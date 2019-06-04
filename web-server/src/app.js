const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config 
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Steve Bumbera'
    })
})

app.get('/motd', (req, res) => {
    res.render('motd', {
        title: 'Message of the Day',
        name: 'Steve Bumbera'
    })
})

app.get('/easteregg', (req, res) => {
    res.render('easteregg')
})

app.get('/wotw', (req, res) => {
    res.render('wotw', {
        title: 'Word of the Week',
        name: 'Steve Bumbera',
        message: 'apposite - highly appropriate or, apt (haha)'
    })
})

app.get('/proxy-fix', (req, res) => {
    res.render('proxy-fix', {
        title: 'Proxy Fix',
        name: 'Steve Bumbera'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Address must be provided"
        })
    }
    const address = req.query.address

    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, { summary, currTemp, chanceRain } = {}) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                location,
                address,
                //ALERT: alert,
                forecast: summary + ' It is currently ' + currTemp + ' degrees out. There is a ' + chanceRain + '% chance of rain.'
                // forecast: forecastData,
                // location,
                // address
            })
        })
    })
})

// Help 404 Handler
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Help',
        message: "This help article does not exist",
        name: "Steve Bumbera"
    })
})

// 404 Handler
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        message: "That page isn't real, do you want me to make it?",
        name: "Steve Bumbera"
    })
})
app.listen(3000, () => {
    console.log('Server started on port 3000')
})