import React from 'react';
import { Thermometer, Wind, Droplets, Cloud, Sunrise, Sunset, Sun } from 'lucide-react';
import type { WeatherData } from '../types';

interface CurrentWeatherProps {
  data: WeatherData | null;
  locationName: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, locationName }) => {
  if (!data || !data.current || !data.daily) return null;

  const { current } = data;
  const todayDaily = data.daily;

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="current-weather-card glass-card">
      <div className="card-top">
        <div className="location-header">
          <h2>{locationName}</h2>
          <p className="current-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="weather-badge">Live Update</div>
      </div>

      <div className="main-info">
        <div className="temp-display">
          <span className="temperature">{Math.round(current.temperature_2m)}°</span>
          <div className="current-condition">
            <Cloud size={24} color="var(--primary)" />
            <span>RealFeel® {Math.round(current.apparent_temperature)}°</span>
          </div>
        </div>
        <div className="weather-icon-large">
          <Cloud size={120} color="var(--primary)" strokeWidth={1.5} />
        </div>
      </div>

      <div className="details-grid-container">
        <div className="stats-grid">
          <div className="stat-item-pro">
            <Wind size={18} className="stat-icon" />
            <div className="stat-content">
              <label>Wind Speed</label>
              <span>{current.wind_speed_10m} km/h</span>
            </div>
          </div>
          <div className="stat-item-pro">
            <Droplets size={18} className="stat-icon" />
            <div className="stat-content">
              <label>Humidity</label>
              <span>{current.relative_humidity_2m}%</span>
            </div>
          </div>
          <div className="stat-item-pro">
            <Thermometer size={18} className="stat-icon" />
            <div className="stat-content">
              <label>Pressure</label>
              <span>{current.surface_pressure} hPa</span>
            </div>
          </div>
          <div className="stat-item-pro">
            <Sun size={18} className="stat-icon" />
            <div className="stat-content">
              <label>UV Index</label>
              <span>{todayDaily.uv_index_max[0]}</span>
            </div>
          </div>
        </div>

        <div className="sun-info-row">
          <div className="sun-stat">
            <Sunrise size={20} color="#ffa502" />
            <div className="sun-content">
              <label>Sunrise</label>
              <span>{formatTime(todayDaily.sunrise[0])}</span>
            </div>
          </div>
          <div className="sun-stat">
            <Sunset size={20} color="#ff7f50" />
            <div className="sun-content">
              <label>Sunset</label>
              <span>{formatTime(todayDaily.sunset[0])}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
