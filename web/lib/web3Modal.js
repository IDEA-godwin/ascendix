import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Configure Web3Modal
export const getWeb3Modal = () => {
  return new Web3Modal({
    cacheProvider: false, // optional
    providerOptions: {
      // MetaMask
      injected: {
        display: {
          name: "MetaMask",
          description: "Connect with your browser wallet",
        },
        package: null,
      },
      // WalletConnect
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "YOUR_INFURA_PROJECT_ID", // Replace with your Infura project ID
        },
      },
    },
  });
};
