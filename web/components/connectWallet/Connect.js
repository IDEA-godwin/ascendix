"use client"
import { useState } from "react";
import { ethers } from "ethers";
import {getWeb3Modal} from '/lib/web3Modal';


export default function ConnectWallets() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    const web3Modal = getWeb3Modal();
    const providerInstance = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(providerInstance);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setWalletAddress(address);
  };

  return (
    <div className=''>
     
      {walletAddress ? (
        <div >
          <p>Connected Wallet:</p>
          <p>{walletAddress}</p>
        </div>
      ) : (


        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-[#5B2B99]  rounded-md text-white flex items-center gap-2 "
        >
          Other <span>Wallet</span> 
        </button>
      )}
    </div>
  );
}
