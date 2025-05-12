---
sidebar_label: "Manage networks"
id: metamask-wallet-sdk-using-the-sdk-manage-networks
custom_edit_url: null
---

# Manage networks

You can manage networks in your dapp with the hooks provided by the SDK. You can:

- Detect the current network and monitor network changes.
- Switch between networks programmatically.
- Add new networks to MetaMask.
- Handle common network-related errors.

The SDK provides intuitive hooks for several network-related operations. The following are examples of using these hooks.

Detect the current network:

```tsx
// chains.ts

import { SupportedChains } from "lync-wallet-sdk";

type MetaMaskChain = {
  id: string;
  label: string;
};

const Testnet_Chains = [
  { id: SupportedChains.EthereumSepoliaTestnet, label: "Sepolia Testnet" },
  { id: SupportedChains.BaseSepoliaTestnet, label: "Base Sepolia Testnet" },
  { id: SupportedChains.PolygonAmoyTestnet, label: "Polygon Amoy Testnet" },
  { id: SupportedChains.MetisSepoliaTestnet, label: "Metis Sepolia Testnet" },
  { id: SupportedChains.BNBTestnet, label: "BNB Smart Chain Testnet" },
] as const satisfies Array<MetaMaskChain>;

const Mainnet_Chains = [
  { id: SupportedChains.EthereumMainnet, label: "Ethereum Mainnet" },
  { id: SupportedChains.BaseMainnet, label: "Base Mainnet" },
  { id: SupportedChains.PolygonMainnet, label: "Polygon Mainnet" },
  { id: SupportedChains.MetisAndromedaMainnet, label: "Metis Andromeda Mainnet" },
  { id: SupportedChains.BNBMainnet, label: "BNB Smart Chain Mainnet" },
] as const satisfies Array<MetaMaskChain>;
```

```tsx
import React, { useMemo } from "react";
import { useAccount, useNetwork } from "lync-wallet-sdk";
import { Mainnet_Chains, Testnet_Chains } from "./chains";

const ConnectedNetwork: React.FC = () => {
  const { account } = useAccount();
  const { chainId } = useNetwork();

  const connectedChain = useMemo(
    () => [...Testnet_Chains, ...Mainnet_Chains].find((chain) => chain.id === chainId),
    [chainId]
  );

  if (!account) return null;

  return (
    <div>
      <p>Connected Network: {connectedChain?.label ?? "Unsupported Network"}</p>
    </div>
  );
};
```

Switch networks:

```tsx
import React, { useMemo } from "react";
import { SupportedChains, useAccount, useNetwork } from "lync-wallet-sdk";
import { Mainnet_Chains, Testnet_Chains } from "./chains";

const NetworkSwitcher: React.FC = () => {
  const { account } = useAccount();
  const { chainId, isSwitchingNetwork, switchNetwork } = useNetwork();

  const connectedChain = useMemo(
    () => [...Testnet_Chains, ...Mainnet_Chains].find((chain) => chain.id === chainId),
    [chainId]
  );

  const switchMetaMaskNetwork = async (chainIdToConnect: SupportedChains) => {
    const response = await switchNetwork(chainIdToConnect);
    if (!response.success) {
      console.error(response.errorData.message);
    }
  };

  if (!account) return null;

  return (
    <div>
      <p>Connected Network: {connectedChain?.label ?? "Unsupported Network"}</p>
      {Mainnet_Chains.map((chain) => (
        <button key={chain.id} disabled={isSwitchingNetwork} onClick={() => switchMetaMaskNetwork(chain.id)}>
          {chain.label}
        </button>
      ))}
      {Testnet_Chains.map((chain) => (
        <button key={chain.id} disabled={isSwitchingNetwork} onClick={() => switchMetaMaskNetwork(chain.id)}>
          {chain.label}
        </button>
      ))}
    </div>
  );
};
```

Apart from chains supported by `lync-wallet-sdk`, user can also switch and connect to any ethereum chains. User can provide valid chain configuration according to metamask documentation ([see valid configuration type here](./types.md)) as second parameter of function `switchNetwork`, in order to add and switch to the other chain. For example:

```tsx
import React, { useMemo } from "react";
import { useAccount, useNetwork } from "lync-wallet-sdk";
import type { MetamaskAddChainConfigurations } from "lync-wallet-sdk";
import { Mainnet_Chains, Testnet_Chains } from "./chains";

const avalancheFujiTestnetConfig = {
  chainId: "0xa869",
  chainName: "Avalanche Fuji Testnet",
  blockExplorerUrls: ["https://testnet.snowscan.xyz"],
  rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
  nativeCurrency: {
    name: "AVAX",
    symbol: "AVAX",
    decimals: 18,
  },
} as const satisfies MetamaskAddChainConfigurations;

const NetworkSwitcher: React.FC = () => {
  const { account } = useAccount();
  const { chainId, isSwitchingNetwork, switchNetwork } = useNetwork();

  const connectedChain = useMemo(
    () => [...Testnet_Chains, ...Mainnet_Chains].find((chain) => chain.id === chainId),
    [chainId]
  );

  const switchToAvalancheFuji = async () => {
    const response = await switchNetwork(avalancheFujiTestnetConfig.chainId, avalancheFujiTestnetConfig);
    if (!response.success) {
      console.error(response.errorData.message);
    }
  };

  if (!account) return null;

  return (
    <div>
      <p>
        Connected Network:
        {chainId !== "0xa869" && (connectedChain?.label ?? "Unsupported Network")}
        {chainId === "0xa869" && "Avalanche Fuji Testnet"}
      </p>
      <button disabled={isSwitchingNetwork} onClick={switchToAvalancheFuji}>
        Avalanche Fuji Testnet
      </button>
    </div>
  );
};
```

Handle network changes:

```tsx
import React, { useEffect } from "react";
import { useNetwork } from "lync-wallet-sdk";

const NetworkWatcher: React.FC = () => {
  const { chainId } = useNetwork();

  useEffect(() => {
    console.info("Chain Id changed: ", chainId);
  }, [chainId]);

  return null;
};
```
