import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 93759.48,
        change1h: 0.43,
        change24h: 0.93,
        change7d: 11.11,
        marketCap: 1861618902186,
        volume24h: 43874950947,
        circulatingSupply: '19.85 M BTC',
        formattedVolume24h: '467.81K BTC',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png'
    },
    {
        id: 2,
        name: 'Ethereum',
        symbol: 'ETH',
        price: 1802.46,
        change1h: 0.60,
        change24h: 3.21,
        change7d: 13.68,
        marketCap: 217581279327,
        volume24h: 23547469307,
        circulatingSupply: '120.71 M ETH',
        formattedVolume24h: '13.05 M ETH',
        logo: 'https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png'
    },
    {
        id: 3,
        name: 'Tether',
        symbol: 'USDT',
        price: 1.00,
        change1h: -0.00,
        change24h: -0.00,
        change7d: 0.04,
        marketCap: 145320022085,
        volume24h: 92288882007,
        circulatingSupply: '145.27 B USDT',
        formattedVolume24h: '92.25 B USDT',
        logo: 'https://cdn.worldvectorlogo.com/logos/tether-1.svg'
    },
    {
        id: 4,
        name: 'XRP',
        symbol: 'XRP',
        price: 2.22,
        change1h: 0.46,
        change24h: 0.54,
        change7d: 6.18,
        marketCap: 130073814966,
        volume24h: 5131481491,
        circulatingSupply: '58.39 B XRP',
        formattedVolume24h: '2.30 B XRP',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprv8mFkdSS3n8MfBE8HGGwJd_r9UbmECu2A&s'
    },
    {
        id: 5,
        name: 'BNB',
        symbol: 'BNB',
        price: 606.65,
        change1h: 0.09,
        change24h: -1.20,
        change7d: 3.73,
        marketCap: 85471956947,
        volume24h: 1874281184,
        circulatingSupply: '140.89 M BNB',
        formattedVolume24h: '3.08 M BNB',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9cUvoCvmCXO4pNHvnREHBCKW30U-BVxKfg&s'
    },
    {
        id: 6,
        name: 'Solana',
        symbol: 'SOL',
        price: 151.51,
        change1h: 0.53,
        change24h: 1.26,
        change7d: 14.74,
        marketCap: 78381958631,
        volume24h: 4881674486,
        circulatingSupply: '517.31 M SOL',
        formattedVolume24h: '32.25 M SOL',
        logo: 'https://images.seeklogo.com/logo-png/42/2/solana-sol-logo-png_seeklogo-423095.png'
    }
];

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        updatePrices: (state) => {
            state.forEach(coin => {
                const randomChange = Math.random() * 0.02 - 0.01;
                coin.price = coin.price * (1 + randomChange);
                coin.change1h = coin.change1h * (Math.random() * 0.4 - 0.2);
                coin.change24h = coin.change24h * (1 + (Math.random() * 0.1 - 0.05));
            })
        }
    }
});

export const { updatePrices } = cryptoSlice.actions;

export const selectAllCryptos = (state) => state.crypto;

export const selectCryptoById = createSelector(
    [selectAllCryptos, (_,id) => id],
    (cryptos,id) => cryptos.find(c => c.id === id)
);

export default cryptoSlice.reducer;