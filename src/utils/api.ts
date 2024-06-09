// /utils/api.ts
import axios from 'axios';

export const fetchPriceData = async (interval: string) => {
  const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
    params: { vs_currency: 'usd', days: interval === 'daily' ? 1 : interval === 'weekly' ? 7 : 30 },
  });
  return response.data.prices;
};
