export default function SearchCity({ city, setCity, onSearch, unit, toggleUnit }) {
    return (
      <div id="searchbar">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={onSearch}>Get Weather</button>
        <button onClick={toggleUnit}>
          {unit === 'metric' ? 'Switch to °F' : 'Switch to °C'}
        </button>
      </div>
    );
  }
  
  