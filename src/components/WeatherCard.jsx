import WEATHER_EMOJIS from "../data/weather-emojis.JS";

export default function WeatherCard({ weather, unit }) {
    function getWeatherEmoji(condition) {
      return WEATHER_EMOJIS[condition] || WEATHER_EMOJIS.Default;
    }
  
    const tempSymbol = unit === 'metric' ? '°C' : '°F';
  
    return (
      <div className="weather-card">
        <h2>{weather.name}</h2>
        <p>
          {weather.weather[0].main} {getWeatherEmoji(weather.weather[0].main)}
        </p>
        <p>{Math.round(weather.main.temp)}{tempSymbol}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </div>
    );
  }
  
  