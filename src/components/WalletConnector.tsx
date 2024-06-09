// /components/WalletConnector.tsx
import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers'; // Update import statement
import WalletConnectProvider from '@walletconnect/web3-provider';

const WalletConnector: React.FC = () => {
  const [provider, setProvider] = useState<Web3Provider | null>(null); // Update state type
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const initWeb3Modal = async () => {
      const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: "INFURA_ID", // replace with your Infura ID
            },
          },
        },
      });

      if (web3Modal.cachedProvider) {
        connectWallet(web3Modal);
      }
    };

    initWeb3Modal();
  }, []);

  const connectWallet = async (web3Modal: Web3Modal) => {
    const instance = await web3Modal.connect();
    const web3Provider = new Web3Provider(instance); // Use Web3Provider from ethers project
    setProvider(web3Provider);
  
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    setAddress(address);
  };

  return (
    <div>
      {address ? (
        <div>Connected: {address}</div>
      ) : (
        <button onClick={() => connectWallet(new Web3Modal())}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnector;
