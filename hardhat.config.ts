
import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+ '/.env' });

const private_key = process.env.PRIVATE_KEY as string;
const etherscan_api_key = process.env.ETHERSCAN_API_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  paths: {
    artifacts: "./src",
  },
  networks: {
    opencampus: {
      url: `https://rpc.opencampus.gelato.digital`,
      accounts: [private_key],
    },
  },
  etherscan: {
    apiKey: {
      opencampus: "your-etherscan-api-key",
    },
    customChains: [
      {
        network: "opencampus",
        chainId: 656476,
        urls: {
          apiURL: "https://opencampus.gelatoscout.com/api",
          browserURL: "https://opencampus.gelatoscout.com",
        },
      },
    ],
  },
};


export default config;
