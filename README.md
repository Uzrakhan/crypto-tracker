# 💹 Crypto Price Tracker 
Real-time cryptocurrency market dashboard built with React + Redux Toolkit.

![Demo Preview](./demo.gif) <!-- Replace with actual demo video/GIF -->

## 🌟 Features
- Real-time price updates via Binance WebSocket
- Responsive design (Desktop Table + Mobile Cards)
- Live market metrics:
  - Price & Percentage Changes (1h/24h/7d)
  - Market Cap & 24h Volume
  - Circulating Supply
- Interactive Sparkline Charts
- Mock Data Simulation Mode

## 🛠 Tech Stack
- **Frontend**: React 18 + Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Charts**: react-sparklines

## 📂 Project Structure
src/
├── store/
│ ├── cryptoSlice.js # Redux state logic
│ └── store.js # Redux store config
├── services/
│ └── binanceWS.js # WebSocket service
├── components/
│ └── CryptoTable.jsx # Main UI component
├── App.jsx
├── main.jsx


## 🚀 Installation

### Prerequisites
- Node.js ≥18.x
- npm ≥9.x

1. Clone Repository
git clone https://github.com/<your-username>/crypto-tracker.git
cd crypto-tracker
2. Install Dependencies
npm install
3. Start Development Server
npm run dev
4. Open in Browser
http://localhost:5173

📱 Responsive Design
Desktop View
Desktop Preview

Mobile View
Mobile Preview

