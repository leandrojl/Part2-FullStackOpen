import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAllCountries = () =>{
    const request = axios.get(baseUrl)

    return request.then(response => response.data)
}

const fetchWeather = async(country)=>{
    if(country !== null){

        const request = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${country.capital[0]}&aqi=no`
      );

    return request.data 
    }
}

export default { getAllCountries, fetchWeather}