import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, type AppKitNetwork } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
{/*export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}
*/}
{/*i add this i was receiving an error so i added this */}
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'development_id'

// Optional: Log a warning instead of throwing an error
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  console.warn('⚠️ Project ID is not defined. Using development fallback.')
}
export const networks = [mainnet, arbitrum] as [AppKitNetwork, ...AppKitNetwork[]]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig