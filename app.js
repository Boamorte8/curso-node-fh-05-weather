const argv = require('./config/yargs').argv;
const { getPlaceData } = require('./place/place');
const { getWeatherData } = require('./weather/weather');

const getInfo = async(address) => {
    try {
        const coords = await getPlaceData(address);
        const temp = await getWeatherData(coords);
        return `The temp of ${coords.location} is ${temp}`;
    } catch (error) {
        return `Error get the weather of ${address}`;
    }
}

getInfo(argv.address).then(console.log)
    .catch(console.log);

// getPlaceData(argv.address).then((data) => {
//     getWeatherData(data).then((dataWeather) => {
//         console.log(`The temp of ${data.location} is ${dataWeather}`);
//     }).catch((err) => console.error(`Error get the weather of ${data.location}`, err));
// }).catch((err) => console.error(`Error get the place info`, err));


