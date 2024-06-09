// /components/TokenSwap.tsx
import React, { useState } from 'react';
import { ethers } from 'ethers';
import { ZeroEx } from '0x.js';

import { Web3Provider } from '@ethersproject/providers';

const TokenSwap: React.FC = () => {
  const [fromToken, setFromToken] = useState<string>('');
  const [toToken, setToToken] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const handleSwap = async () => {
    const provider = new Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const zeroEx = new ZeroEx(provider, { networkId: 1 });

    // should fetch the token pair data and execute swap
  };

  return (
    <div>
      <input type="text" placeholder="From Token" onChange={(e) => setFromToken(e.target.value)} />
      <input type="text" placeholder="To Token" onChange={(e) => setToToken(e.target.value)} />
      <input type="number" placeholder="Amount" onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
};

export default TokenSwap;
