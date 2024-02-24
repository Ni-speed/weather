export const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8e62d9620f50f0f74fe8cc7736a5374&lang=ru&units=metric`)
        return await  response.json()

    } catch (error) {
console.error(error)
    }
}