import { ethers } from 'ethers'

export const decimals: any = {
  '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea': 18,
  '0xc778417e063141139fce010982780140aa0cd5ab': 18,
}

export async function getProvider(key: string) {
  const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${key}`)
  await provider.getNetwork()
  return provider
}