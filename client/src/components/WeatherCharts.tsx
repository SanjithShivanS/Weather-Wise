import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { StatData } from '../types';

interface WeatherChartsProps {
  data: StatData[];
  title: string;
}

const WeatherCharts: React.FC<WeatherChartsProps> = ({ data, title }) => {
  if (!data || data.length === 0) return <div>No data available for charts.</div>;

  return (
    <div className="charts-wrapper">
      <h3>{title} - Temperature Trends</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" />
            <YAxis unit="°C" stroke="var(--text-muted)" />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(20, 30, 48, 0.9)', border: '1px solid var(--card-border)', borderRadius: '12px', color: '#fff' }} />
            <Legend />
            <Line type="monotone" dataKey="temp_max" stroke="#ff4757" strokeWidth={3} name="Max Temp" />
            <Line type="monotone" dataKey="temp_min" stroke="#70a1ff" strokeWidth={3} name="Min Temp" />
            <Line type="monotone" dataKey="temp_mean" stroke="#ffa502" strokeWidth={2} name="Avg Temp" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <h3>Precipitation & Wind</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" />
            <YAxis stroke="var(--text-muted)" />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(20, 30, 48, 0.9)', border: '1px solid var(--card-border)', borderRadius: '12px', color: '#fff' }} />
            <Legend />
            <Bar dataKey="precipitation" fill="#4facfe" name="Precipitation (mm)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="wind_speed" fill="#2ed573" name="Max Wind (km/h)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherCharts;
