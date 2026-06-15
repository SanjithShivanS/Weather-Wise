# 🌦️ Weather Wise

Weather Wise is a modern, full-stack weather forecasting application that provides users with real-time weather updates, detailed 7-day forecasts, and historical weather statistics. Built with a focus on clean UI and interactive data visualization, it helps users stay informed about weather conditions across the globe.

🔗 **Live Link**: [https://weather-wise-scta.onrender.com](https://weather-wise-scta.onrender.com)

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

## ⚙️ How It Works (Architecture)

Weather Wise is designed with a **decoupled monorepo architecture** that compiles into a single, unified port deployment for production:

1. **Express Server API Proxy**:
   - The Node.js Express backend (`server/index.ts`) acts as a proxy for the third-party **Open-Meteo APIs**.
   - The backend exposes local endpoints under `/api` (`/api/geocoding`, `/api/weather`, and `/api/stats`) and forwards requests to the target APIs. This avoids CORS issues on the client side.

2. **Unified Single-Port Hosting**:
   - In production, instead of running separate servers for frontend and backend, the Express server serves the compiled React client static assets from the `client/dist` directory using `express.static()`.
   - Any non-API route request falling on the server is caught by a wildcard route (`app.get('*any')`) and falls back to `index.html` (supporting Single Page Application (SPA) routing).

3. **Dynamic Environment API Endpoints**:
   - The frontend API service (`client/src/services/api.ts`) automatically switches its base URL using Vite's `import.meta.env.DEV` environment check:
     - **Development**: Calls `http://localhost:3001/api` (allowing hot-reloading frontend on port `5173`).
     - **Production**: Calls relative `/api` endpoints directly on the same domain and port hosting the app.

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

2. **Install all dependencies**
   Install all dependencies for both client and server with a single command from the root folder:
   ```bash
   npm run install-all
   ```

### Running the Application

#### Production Mode (Unified Single-Port Deployment)
To run the production build where the Express server serves both the API and the React frontend on a single port (3001):
1. **Build both projects**:
   ```bash
   npm run build-all
   ```
2. **Start the unified server**:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3001`.

#### Development Mode (Concurrent Multi-Port)
To run in development with hot-reloading:
1. **Start the backend server** (in one terminal tab):
   ```bash
   cd server
   npm run dev
   ```
   The server will start at `http://localhost:3001`.

2. **Start the frontend client** (in another terminal tab):
   ```bash
   cd client
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

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
