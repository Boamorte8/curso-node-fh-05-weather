const axios = require('axios');

/**
 * Function to get the data of a place
 *
 * @param {*} address
 * @returns
 */
const getPlaceData = async(address) => {
    const encodedUrl = encodeURI(address);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'f759a5f01cmshff1394b45b97584p1a5601jsn032940d5433b',
        }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ address }`);
    }

    const data = resp.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        location,
        lat,
        lng,
    }
}

module.exports = {
    getPlaceData
}
