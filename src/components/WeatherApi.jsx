import React, { useEffect, useState } from 'react'

const WeatherApi = () => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude
                const lon = position.coords.longitude
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=028e5eee0a4f38e1dfcb528d7eacf43e`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setWeather(data)
                    })
                    .catch(error => console.log(error))
            })
        }
    }, [])

    return (
        <div>
            {
                weather ? (
                    <div>
                        <h1>{weather.name}</h1>
                        <p>Temperature: {weather.main}</p>
                        <p>Description: {weather.weather[0].description}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    )
}

export default WeatherApi