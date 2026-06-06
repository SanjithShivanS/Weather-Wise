import React from 'react';
import { Calendar, Thermometer, Droplets, Wind, CloudRain } from 'lucide-react';

interface TomorrowPredictionProps {
  daily: any;
}

const TomorrowPrediction: React.FC<TomorrowPredictionProps> = ({ daily }) => {
  if (!daily || !daily.time || daily.time.length < 2) return null;

  // Index 1 is tomorrow in the forecast array
  const tomorrowIndex = 1;
  const date = new Date(daily.time[tomorrowIndex]);
  const tempMax = Math.round(daily.temperature_2m_max[tomorrowIndex]);
  const tempMin = Math.round(daily.temperature_2m_min[tomorrowIndex]);
  const precipProb = daily.precipitation_probability_max[tomorrowIndex];
  const windMax = daily.wind_speed_10m_max[tomorrowIndex];

  return (
    <div className="tomorrow-card glass-card">
      <div className="tomorrow-header">
        <div className="tomorrow-title">
          <Calendar size={24} color="#ff4757" />
          <h3>Tomorrow's Outlook</h3>
        </div>
        <p className="tomorrow-date">{date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
      </div>

      <div className="tomorrow-content">
        <div className="tomorrow-main">
          <span className="tomorrow-temp">{tempMax}°<small>/{tempMin}°</small></span>
          <div className="tomorrow-condition">
            <CloudRain size={32} color="#70a1ff" />
            <span>{precipProb > 30 ? 'Rainy' : 'Clear/Cloudy'}</span>
          </div>
        </div>

        <div className="tomorrow-details">
          <div className="detail-item">
            <Thermometer size={16} />
            <span>Range: {tempMin}° - {tempMax}°</span>
          </div>
          <div className="detail-item">
            <Droplets size={16} />
            <span>Precipitation: {precipProb}%</span>
          </div>
          <div className="detail-item">
            <Wind size={16} />
            <span>Max Wind: {windMax} km/h</span>
          </div>
        </div>
      </div>
      
      <div className="tomorrow-summary">
        <p>Expect {precipProb > 50 ? 'heavy showers' : precipProb > 20 ? 'light rain' : 'mostly dry conditions'} with temperatures peaking around {tempMax}°C.</p>
      </div>
    </div>
  );
};

export default TomorrowPrediction;
