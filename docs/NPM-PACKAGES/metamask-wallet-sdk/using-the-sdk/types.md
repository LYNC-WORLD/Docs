---
sidebar_label: "Types and Enums provided by the SDK"
id: metamask-wallet-sdk-using-the-sdk-types
custom_edit_url: null
---

# Types and Enums provided by the SDK

## Enums

```typescript
enum SupportedChains {
  EthereumMainnet = "0x1",
  BaseMainnet = "0x2105",
  PolygonMainnet = "0x89",
  PolygonZkEvmMainnet = "0x44d",
  MetisAndromedaMainnet = "0x440",
  GoatAlphaMainnet = "0x929",
  BNBMainnet = "0x38",
  AvalancheMainnet = "0xa86a",
  ArbitrumOneMainnet = "0xa4b1",
  ArbitrumNovaMainnet = "0xa4ba",
  OptimismMainnet = "0xa",
  RoninMainnet = "0x7e4",
  SagaEvmMainnet = "0x1558",
  EthereumSepoliaTestnet = "0xaa36a7",
  BaseSepoliaTestnet = "0x14a34",
  PolygonAmoyTestnet = "0x13882",
  PolygonCardonaTestnet = "0x98a",
  MetisSepoliaTestnet = "0xe9fe",
  GoatTestnet3 = "0xbeb0",
  BNBTestnet = "0x61",
  AvalancheFujiTestnet = "0xa869",
  ArbitrumSepoliaTestnet = "0x66eee",
  OptimismSepoliaTestnet = "0xaa37dc",
  SaigonTestnet = "0x7e5",
}
```

## Types

```typescript
type ChainNativeCurrency = {
  name: string;
  symbol: string;
  decimals: number;
};

type MetamaskAddChainConfigurations = {
  chainId: `0x${string}`;
  chainName: string;
  blockExplorerUrls: Array<string>;
  rpcUrls: Array<string>;
  nativeCurrency: ChainNativeCurrency;
};

type EIP1193Provider = {
  isStatus?: boolean;
  host?: string;
  path?: string;
  sendAsync?: (
    request: { method: string; params?: Array<unknown> },
    callback: (error: Error | null, response: unknown) => void
  ) => void;
  send?: (
    request: { method: string; params?: Array<unknown> },
    callback: (error: Error | null, response: unknown) => void
  ) => void;
  request: (request: { method: string; params?: Array<unknown> }) => Promise<unknown>;
  on: (event: string, callback: (arg: unknown) => void) => void;
};
```
