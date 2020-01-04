const axios = require('axios');

const API_KEY = '4b0c8611aa62583a27da23cb3acd704f';

/**
 * Function to get the data of weather of a place
 *
 * @param {*} coordinates
 * @returns
 */
const getWeatherData = async(dataPlace) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${dataPlace.lat}&lon=${dataPlace.lng}&appid=${API_KEY}&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getWeatherData
}