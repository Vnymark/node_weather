const request = require('request');

var getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/f957389ee38d04a85c80e7be8fedb89d/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: ((body.currently.temperature-32)*5/9).toFixed(2),
                apparentTemperature: ((body.currently.apparentTemperature-32)*5/9).toFixed(2)
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;