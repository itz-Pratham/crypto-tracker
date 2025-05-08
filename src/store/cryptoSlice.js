import { createSlice } from '@reduxjs/toolkit';

// Initial state for our crypto data
const initialState = {
  assets: [
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
      circulatingSupply: 19.85,
      supplyUnit: 'M BTC',
      trend: 'up'
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
      circulatingSupply: 120.71,
      supplyUnit: 'M ETH',
      trend: 'up'
    },
    {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      price: 1.00,
      change1h: 0.00,
      change24h: 0.00,
      change7d: 0.04,
      marketCap: 145320022085,
      volume24h: 92288882007,
      circulatingSupply: 145.27,
      supplyUnit: 'B USDT',
      trend: 'stable'
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
      circulatingSupply: 58.39,
      supplyUnit: 'B XRP',
      trend: 'up'
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
      volume24h: 1874281784,
      circulatingSupply: 140.89,
      supplyUnit: 'M BNB',
      trend: 'volatile'
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
      circulatingSupply: 517.31,
      supplyUnit: 'M SOL',
      trend: 'up'
    }
  ]
};

// Helper function to generate random price changes
const getRandomChange = (baseValue, volatility = 0.005) => {
  const change = (Math.random() - 0.5) * volatility * baseValue;
  return change;
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map(asset => {
        // Generate random price changes with varying volatility based on asset
        const volatility = asset.symbol === 'USDT' ? 0.0001 : 0.01;
        const priceChange = getRandomChange(asset.price, volatility);
        const newPrice = asset.price + priceChange;
        
        // Calculate new percentage changes
        const new1hChange = asset.change1h + getRandomChange(1, 0.1);
        const new24hChange = asset.change24h + getRandomChange(1, 0.05);
        const new7dChange = asset.change7d + getRandomChange(1, 0.02);
        
        // Update volume with random fluctuations
        const volumeChange = getRandomChange(asset.volume24h, 0.02);
        const newVolume = Math.max(asset.volume24h + volumeChange, 0);

        return {
          ...asset,
          price: Math.max(newPrice, 0.01),
          change1h: new1hChange,
          change24h: new24hChange,
          change7d: new7dChange,
          volume24h: newVolume
        };
      });
    }
  }
});

export const { updatePrices } = cryptoSlice.actions;

// Selector to get all crypto assets
export const selectAllAssets = (state) => state.crypto.assets;

export default cryptoSlice.reducer;