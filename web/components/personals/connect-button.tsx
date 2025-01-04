'use client'

import { useAppKitAccount } from '@reown/appkit/react'
import { reconnect, watchAccount } from '@wagmi/core'
import { useAccount } from 'wagmi'

const compactHash = (hash: string) => {
  return hash.slice(0, 7) + '...' + hash.slice(-5)


}

export const ConnectButton = () => {
  const wagmiAccount = useAccount()
  const account = useAppKitAccount()

 

  return (
    <appkit-button />
  )
}