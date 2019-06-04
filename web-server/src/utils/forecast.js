const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/27f9d1cd445153dbdda495f357096601/' + lat + ', ' + long + ''

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Cannot connect to service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, {
                //alert: body.alerts[0].title,
                summary: body.daily.data[0].summary,
                currTemp: body.currently.temperature,
                chanceRain: body.daily.data[0].precipProbability * 100,

            })
            // const summary = body.daily.data[0].summary
            // const currTemp = body.currently.temperature
            // const chanceRain = body.daily.data[0].precipProbability * 100
            // const alert = body.alerts[0].title

            // callback(undefined, alert + '. ' + summary + ' It is currently ' + currTemp + ' degrees out. There is a ' + chanceRain + '% chance of rain.')

        }
    })
}

module.exports = forecast