# 🚀 Crypto Tracker - React & Redux toolkit

[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-1.9-purple)](https://redux-toolkit.js.org/)
![License](https://img.shields.io/badge/License-MIT-green)

A  cryptocurrency price tracking dashboard with real-time updates via Websocket simulation. Built for React internship assessment.

![Demo GIF](./demo.gif) *Replace with actual demo link*

## ✨ Features
- **Real-time price updates** (1-2 second refresh)
- **Multi-view display** (Desktop table + Mobile cards)
- **Live market metrics**:
  - Price, 1h/24h/7d percentage changes
  - Market cap & 24h volume
  - Circulating supply
- **Interactive sparkline charts**
- **Smart color-coding** (Green/red for gains/losses)
- **WebSocket fallback** (Simulated updates when offline)

## 🛠 Tech Stack
| Category       | Technologies                          |
|----------------|---------------------------------------|
| Core           | React 18, Redux Toolkit               |
| Styling        | Tailwind CSS, Headless UI             |
| Visualization  | react-sparklines                      |
| Utilities      | WebSocket API, numeral.js             |

## 📁 Project Structure
```bash
src/
├── store/               # State management
│   ├── cryptoSlice.ts   # Redux logic
│   └── store.ts         # Redux store
├── services/            # Data services
│   └── binanceWS.ts     # WebSocket handler
├── components/          # UI components
│   └── CryptoTable.tsx  # Main display
├── hooks/               # Custom hooks
├── types/               # TypeScript types
├── App.tsx              # Root component
└── index.tsx            # Entry point
