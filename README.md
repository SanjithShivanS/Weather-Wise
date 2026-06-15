# 🌦️ Weather Wise

Weather Wise is a modern, full-stack weather forecasting application that provides users with real-time weather updates, detailed 7-day forecasts, and historical weather statistics. Built with a focus on clean UI and interactive data visualization, it helps users stay informed about weather conditions across the globe.

![Weather Wise Preview](client/src/assets/hero.png)

## 🚀 Features

- **Real-time Weather**: Get current temperature, humidity, wind speed, pressure, and more.
- **7-Day Forecast**: Plan your week with accurate daily weather predictions.
- **Interactive Charts**: Visualize temperature trends and precipitation probability using interactive Recharts.
- **Location Search**: Search for any city worldwide using the integrated geocoding API.
- **Historical Statistics**: Access historical weather data and trends for specific date ranges.
- **Responsive Design**: Optimized for a seamless experience across desktop, tablet, and mobile devices.
- **Dynamic Icons**: Weather-appropriate icons powered by Lucide-React.

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern UI development with hooks and functional components.
- **TypeScript**: Ensuring type safety and better developer experience.
- **Vite**: Ultra-fast build tool and development server.
- **Recharts**: For beautiful, responsive weather data visualizations.
- **Lucide-React**: Clean and consistent iconography.
- **Axios**: For handling API requests.

### Backend
- **Node.js & Express**: A robust proxy server to handle API requests and prevent CORS issues.
- **Open-Meteo API**: Leveraging free, high-quality meteorological data.

## 📂 Project Structure

```text
Weather Wise/
├── client/                # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components (CurrentWeather, Forecast, WeatherCharts, etc.)
│   │   ├── services/      # API service layers
│   │   └── assets/        # Images and icons
├── server/                # Node.js Express Backend
│   ├── index.ts           # Main server entry point and API routes
└── ...
```

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanjithShivanS/weather-wise.git
   cd weather-wise
   ```

2. **Setup the Server**
   ```bash
   cd server
   npm install
   ```

3. **Setup the Client**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

To run the application, you need to start both the backend server and the frontend client.

1. **Start the Backend**
   ```bash
   cd server
   npm run dev
   ```
   The server will start at `http://localhost:3001`.

2. **Start the Frontend**
   ```bash
   cd client
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📊 API Usage

This project uses the **Open-Meteo API**, which provides free weather data for non-commercial use without requiring an API key.

- **Geocoding**: `https://geocoding-api.open-meteo.com/`
- **Weather Forecast**: `https://api.open-meteo.com/`
- **Historical Data**: `https://archive-api.open-meteo.com/`

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features:

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---
Developed with ❤️ by [SanjithShivanS](https://github.com/SanjithShivanS)
