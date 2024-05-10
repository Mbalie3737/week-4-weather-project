
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
  <header className="App-header">
        <form>
          <input type="search" />
          <input type="submit" value="Search" />
        </form>
      <ul>
        <li>Temperature: 18°C</li>
        <li>Description: Partly cloudy</li>
        <li>Humidity: 20</li>
        <li>Wind: 18k/h</li>
      </ul>
      <div className="Temp-details">
      <div className="Icon">🌧️ </div>
      <div className="Temp">18°C</div>
      </div>
      </header>
      <p>This project was published on <a href="https://github.com/Mbalie3737/week-4-weather-project">Github</a></p>
    </div>
  );
}

export default App;
