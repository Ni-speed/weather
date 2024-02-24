import {getWeatherData} from '../js/api.js';
import {resetWeatherContent} from '../js/helper.js';

export const handleWeatherByGeoLocation = () => {
    const options = {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}

    const success = async (pos) => {
        const crd = pos.coords

        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&lang=ru&apiKey=67242f62527b413390715b2b8fcd3ac4
`)
        const result = await  response.json()

        const weather = await getWeatherData(result.features[0].properties.city)
        resetWeatherContent(result.features[0].properties.city, weather)
    }

    const error = (error) => {
        console.log(error.code + ' ' + error.message)
    }
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    )

}