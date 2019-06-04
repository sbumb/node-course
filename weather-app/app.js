const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, text }) => {
        if (error) {
            return console.log('ERROR: ', error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log('ERROR: ', error)
            }

            console.log(text)
            console.log(forecastData)
        })
    })
}




