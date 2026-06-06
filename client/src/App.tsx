import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import TomorrowPrediction from './components/TomorrowPrediction';
import Statistics from './components/Statistics';
import { getWeather } from './services/api';
import { CloudSun } from 'lucide-react';

function App() {
  const [location, setLocation] = useState({ lat: 51.5074, lon: -0.1278, name: 'London' });
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, [location]);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const data = await getWeather(location.lat, location.lon);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectLocation = (lat: number, lon: number, name: string) => {
    setLocation({ lat, lon, name });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <CloudSun size={32} color="#70a1ff" />
          <h1>WeatherWise</h1>
        </div>
        <SearchBar onSelectLocation={handleSelectLocation} />
      </header>

      <main className="app-main">
        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
            <p>Fetching local atmosphere...</p>
          </div>
        ) : (
          <>
            <section className="top-row">
              <CurrentWeather data={weatherData} locationName={location.name} />
              <TomorrowPrediction daily={weatherData?.daily} />
            </section>

            <section className="middle-row">
              <Forecast daily={weatherData?.daily} />
            </section>

            <section className="bottom-row glass-card">
              <div className="stats-header">
                <h2>Historical Statistics & Analysis</h2>
                <p>Discover long-term weather patterns for {location.name}</p>
              </div>
              <Statistics lat={location.lat} lon={location.lon} />
            </section>
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>
          Weather data provided by <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo</a>. 
          Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>.
        </p>
        <p className="footer-disclaimer">Not for professional use. All predictions are estimates.</p>
      </footer>
    </div>
  );
}

export default App;
