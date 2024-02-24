import {createHeader} from '../js/appHeader.js';
import {createContent} from '../js/appContent.js';

export const directionOfwWind = (degree) => {
    if (degree>337.5) { return 'Северный' };
    if (degree>292.5) { return 'Северо-западный' };
    if (degree>247.5) { return 'Западный' };
    if (degree>202.5) { return 'Юго-западный' };
    if (degree>157.5) { return 'Южный' };
    if (degree>122.5) { return 'Юго-восточный' };
    if (degree>67.5) { return 'Восточный' };
    if (degree>22.5) { return 'Северо-восточный' }
    return 'Северный';
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const cToF = (celsius) => {
    return celsius * 9 / 5 + 32;
}

export const fToC = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

export const resetWeatherContent = (city, weather) => {
    localStorage.setItem('city', JSON.stringify(city))
    document.body.innerHTML = ''
    const header = createHeader(city)
    const content = createContent(weather)
    document.body.append(header, content)
}