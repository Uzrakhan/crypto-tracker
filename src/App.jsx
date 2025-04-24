import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {startWebSocketSimulation , stopWebSocketSimulation} from './ws';
import { store } from './store/store';
import './App.css'
import { selectAllCryptos } from './store/cryptoSlice';
import CryptoTable from './components/CryptoTable';

function App() {
  const cryptos = useSelector(selectAllCryptos);

  useEffect(() => {
    startWebSocketSimulation(store);
    return () => stopWebSocketSimulation();
  }, []);


  return (
   <div className='flex items-center justify-center flex-col p-4'>
      <h1 className='font-bold'>Live Crypto Tracker</h1>
      <CryptoTable data={cryptos}/>
   </div>
  )
}

export default App
