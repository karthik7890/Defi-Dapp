import '../styles/globals.css'; // Import global styles
import type { AppProps } from 'next/app'; // Import AppProps type from next/app
import { Web3ReactProvider } from '@web3-react/core'; // Import Web3ReactProvider from @web3-react/core
import { Web3Provider } from '@ethersproject/providers'; // Import Web3Provider from @ethersproject/providers

// Define the getLibrary function
const getLibrary = (provider: any): Web3Provider => {
  return new Web3Provider(provider);
};

// Define the main App component
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
};

// Export the App component as the default export
export default MyApp;
