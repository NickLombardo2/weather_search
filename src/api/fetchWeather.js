import axios from 'axios';

const URL ='https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '24a5143182bf8638ef4921f14ef3a781';

 export const fetchWeather = async(query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
         }
    });

    return data;
}
