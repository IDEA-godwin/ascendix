import { cookieStorage, createStorage, getAccount, http, readContracts, waitForTransactionReceipt, watchAccount, writeContract } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, type AppKitNetwork, defineChain } from '@reown/appkit/networks'
import { parseEther } from 'viem'
import { useGasPrice } from 'wagmi'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// const eduChain: any = defineChain({
//   blockExplorers: {
//     // default: ''
//   }
// })

export const networks = [mainnet, arbitrum] as [AppKitNetwork, ...AppKitNetwork[]]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  transports: {
    [mainnet.id]: http()
  },
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

useGasPrice

export const config = wagmiAdapter.wagmiConfig