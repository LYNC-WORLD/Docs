---
sidebar_label: "Interfaces and Enums provided by the SDK"
id: interfaces-and-enums-provided-by-the-sdk
custom_edit_url: null
---

# Interfaces and Enums provided by the SDK

# Enums

```typescript
enum AllowedProviders {
  FuelProvider = "FuelProvider",
  WalletProvider = "WalletProvider",
}

enum Networks {
  Testnet = "testnet",
}

enum MarketplaceErrorCodes {
  InsufficientBalance = "InsufficientBalance",
  InvalidArgumentsError = "InvalidArgumentsError",
  InvalidNetworkArgument = "InvalidNetworkArgument",
  NetworkRequestError = "NetworkRequestError",
  PropertyUndefinedError = "PropertyUndefinedError",
  ServerError = "ServerError",
}
```

# Interfaces

```typescript
interface MarketplaceListings {
  listingId: number;
  isActive: boolean;
  nftAddress: `0x${string}`;
  tokenStandard: "NFT" | "SEMI_FT";
  tokenId: `0x${string}`;
  assetId: `0x${string}`;
  tokenQuantity: number;
  pricePerItem: string;
  sellerAddress: `0x${string}`;
  tokenName: string;
  tokenImage: string;
  tokenAssetMedia: string;
}

interface MarketplaceCollections {
  contractAddress: `0x${string}`;
  tokenStandard: "NFT" | "SEMI_FT";
  collectionName: string;
  collectionSymbol: string;
  floorPrice: string;
  totalItemsListed: number;
  bannerImage: string;
}

interface NftDetails {
  listingData: OmittedMarketplaceListings[];
  nftMetadata: NftMetadata;
}

interface OmittedMarketplaceListings
  extends Omit<
    MarketplaceListings,
    "tokenName" | "tokenImage" | "tokenAssetMedia"
  > {}

interface NftMetadata {
  tokenName: string;
  tokenImage: string;
  tokenAssetMedia: string;
  description: string;
}

interface TokensInCollection {
  tokenName: string;
  tokenImage: string;
  tokenAssetMedia: string;
  description: string;
  contractAddress: `0x${string}`;
  tokenId: `0x${string}`;
  assetId: `0x${string}`;
  tokenStandard: "NFT" | "SEMI_FT";
  contractName: string;
  contractSymbol: string;
}

class MarketplaceError<TErrorData = unknown> extends Error {
  constructor(
    message: string,
    public code: MarketplaceErrorCodes,
    public errorData?: TErrorData
  ) {
    super(message);
    this.name = "MarketplaceError";
  }
}
```
