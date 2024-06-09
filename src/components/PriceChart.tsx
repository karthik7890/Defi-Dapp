// /components/PriceChart.tsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const PriceChart: React.FC = () => {
  const [priceData, setPriceData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [interval, setInterval] = useState<string>('daily');

  useEffect(() => {
    const fetchPriceData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
        params: { vs_currency: 'usd', days: interval === 'daily' ? 1 : interval === 'weekly' ? 7 : 30 },
      });
      const data = response.data.prices;
      setPriceData(data.map((item: [number, number]) => item[1]));
      setLabels(data.map((item: [number, number]) => new Date(item[0]).toLocaleString()));
    };

    fetchPriceData();
  }, [interval]);

  return (
    <div>
      <select onChange={(e) => setInterval(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: 'BTC Price',
              data: priceData,
              fill: false,
              backgroundColor: 'blue',
              borderColor: 'blue',
            },
          ],
        }}
      />
    </div>
  );
};

export default PriceChart;
