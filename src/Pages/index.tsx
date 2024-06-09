import WalletConnect from '../components/WalletConnector';
import PriceChart from '../components/PriceChart';
import TokenSwap from '../components/TokenSwap';

const Home: React.FC = () => {
  return (
    <div>
      <WalletConnect />
      <PriceChart />
      <TokenSwap />
    </div>
  );
};

export default Home;
