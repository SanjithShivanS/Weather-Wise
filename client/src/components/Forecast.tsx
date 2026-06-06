import React from 'react';
import { CloudRain, Sun, Cloud, CloudLightning, CloudSnow } from 'lucide-react';

interface ForecastProps {
  daily: any;
}

const getWeatherIcon = (code: number) => {
  if (code === 0) return <Sun size={24} color="#fbc531" />;
  if (code <= 3) return <Cloud size={24} color="#dcdde1" />;
  if (code >= 51 && code <= 67) return <CloudRain size={24} color="#70a1ff" />;
  if (code >= 71 && code <= 77) return <CloudSnow size={24} color="#ffffff" />;
  if (code >= 95) return <CloudLightning size={24} color="#e1b12c" />;
  return <Cloud size={24} color="#70a1ff" />;
};

const Forecast: React.FC<ForecastProps> = ({ daily }) => {
  if (!daily) return null;

  return (
    <div className="forecast-container glass-card">
      <div className="forecast-header">
        <h3>7-Day Forecast</h3>
        <p className="forecast-subtitle">Next week's outlook</p>
      </div>
      <div className="forecast-grid">
        {daily.time.map((time: string, index: number) => (
          <div key={time} className="forecast-card-item">
            <span className="forecast-day-name">
              {new Date(time).toLocaleDateString('en-US', { weekday: 'short' })}
            </span>
            <div className="forecast-icon-box">
              {getWeatherIcon(daily.weather_code[index])}
            </div>
            <div className="forecast-temp-range">
              <span className="temp-max">{Math.round(daily.temperature_2m_max[index])}°</span>
              <span className="temp-min">{Math.round(daily.temperature_2m_min[index])}°</span>
            </div>
            <div className={`forecast-rain-prob ${daily.precipitation_probability_max[index] > 20 ? 'has-rain' : ''}`}>
              <CloudRain size={12} />
              <span>{daily.precipitation_probability_max[index]}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
