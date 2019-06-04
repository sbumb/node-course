const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/27f9d1cd445153dbdda495f357096601/' + lat + ', ' + long + ''

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Cannot connect to service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const currTemp = body.currently.temperature
            const chanceRain = body.currently.precipProbability
            const nextWeekTemp = body.daily.data[6].summary
            const niceDays = body.daily.data.find((day) => {
                day.contains('clear') || day.contains('sunny')
            })

            console.log(niceDays)
            // callback(undefined, body.daily.data[0].summary + ' It is currently ' + currTemp + ' degrees out. There is a ' + chanceRain + '% chance of rain.')
            // callback(undefined, 'Next week will be ' + nextWeekTemp)
        }
    })
}

module.exports = forecast