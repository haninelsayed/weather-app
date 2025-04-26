import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import SearchCity from './components/SearchCity.jsx';
import WeatherCard from './components/WeatherCard.jsx';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = '37e3741af481cccbb49100ac6b22f0b9'; // OpenWeatherAPI key

  async function fetchWeather(selectedCity = city, selectedUnit = unit) {
    if (!selectedCity) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=${selectedUnit}`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
        setError('');
      } else {
        setWeather(null);
        setError('City not found. Please enter a valid city name.');
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
      setError('Failed to fetch weather.');
    } finally {
      setLoading(false);
    }
  }

  function toggleUnit() {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  }

  useEffect(() => {
    if (city) {
      fetchWeather(city, unit);
    }
  }, [unit]);

  return (
    <>
      <Header />
      <SearchCity city={city} setCity={setCity} onSearch={() => fetchWeather(city, unit)} unit={unit} toggleUnit={toggleUnit}/>
      
      {error && <p className="error-message">{error}</p>}
      {loading && <div className='loading-spinner'></div>}
      {!loading && weather && <WeatherCard weather={weather} unit={unit} />}
    </>
  );
}




export default App
