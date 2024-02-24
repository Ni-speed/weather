import {getWeatherData} from '../js/api.js';
import {createHeader} from '../js/appHeader.js';
import {createContent} from '../js/appContent.js';

const app = async () => {
    const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Москва')
    const header = createHeader(weather.name)
    const content = createContent(weather)
    document.body.append(header,content)
}

app()