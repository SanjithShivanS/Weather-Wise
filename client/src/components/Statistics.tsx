import React, { useState, useEffect } from 'react';
import { getStats } from '../services/api';
import WeatherCharts from './WeatherCharts';
import { subDays, subMonths, subYears, format, startOfMonth, endOfMonth, startOfYear, endOfYear, startOfWeek, endOfWeek } from 'date-fns';

interface StatisticsProps {
  lat: number;
  lon: number;
}

const Statistics: React.FC<StatisticsProps> = ({ lat, lon }) => {
  const [range, setRange] = useState<'weekly' | 'monthly' | 'yearly'>('weekly');
  const [selectedDate, setSelectedDate] = useState(format(subDays(new Date(), 5), 'yyyy-MM-dd'));
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStats();
  }, [lat, lon, range, selectedDate]);

  const fetchStats = async () => {
    setLoading(true);
    const date = new Date(selectedDate);
    let startDate: Date;
    let endDate: Date;

    switch (range) {
      case 'weekly':
        startDate = startOfWeek(date);
        endDate = endOfWeek(date);
        break;
      case 'monthly':
        startDate = startOfMonth(date);
        endDate = endOfMonth(date);
        break;
      case 'yearly':
        startDate = startOfYear(date);
        endDate = endOfYear(date);
        break;
      default:
        startDate = startOfWeek(date);
        endDate = endOfWeek(date);
    }

    try {
      const response = await getStats(lat, lon, format(startDate, 'yyyy-MM-dd'), format(endDate, 'yyyy-MM-dd'));
      
      const daily = response.daily;
      const formattedData = daily.time.map((time: string, i: number) => ({
        date: format(new Date(time), 'MMM dd'),
        temp_max: daily.temperature_2m_max[i],
        temp_min: daily.temperature_2m_min[i],
        temp_mean: daily.temperature_2m_mean[i],
        precipitation: daily.precipitation_sum[i],
        wind_speed: daily.wind_speed_10m_max[i],
      }));

      setData(formattedData);
    } catch (error) {
      console.error('Stats fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="statistics-section">
      <div className="stats-header-controls">
        <div className="stats-controls">
          <button className={range === 'weekly' ? 'active' : ''} onClick={() => setRange('weekly')}>Weekly</button>
          <button className={range === 'monthly' ? 'active' : ''} onClick={() => setRange('monthly')}>Monthly</button>
          <button className={range === 'yearly' ? 'active' : ''} onClick={() => setRange('yearly')}>Yearly</button>
        </div>
        
        <div className="date-picker-container">
          <label>Select Reference Date: </label>
          <input 
            type="date" 
            value={selectedDate} 
            max={format(subDays(new Date(), 5), 'yyyy-MM-dd')}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="stats-date-input"
          />
          <p className="date-hint">Analysis will be based on the {range} containing this date.</p>
        </div>
      </div>

      {loading ? (
        <div className="loading">Analyzing historical patterns...</div>
      ) : (
        <WeatherCharts data={data} title={`${range.charAt(0).toUpperCase() + range.slice(1)} Summary`} />
      )}
    </div>
  );
};

export default Statistics;
