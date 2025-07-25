---
sidebar_label: "Some useful functions provided by the SDK"
id: some-useful-functions-provided-by-the-sdk
custom_edit_url: null
---

# Some useful functions provided by the SDK

The SDK also provides some useful functions that you can use to implement search functionality and check if a token is owned by a given wallet address or not. Here is the complete list of the functions:

## searchMarketplace

This function allows you to search for a token on the marketplace by providing a search query. Here is an example call of how you can search for a token on the marketplace:

```typescript
import { Networks, searchMarketplace } from "@lyncworld/fuel-marketplace";

const response = searchMarketplace(
  Networks.Testnet,
  "0x..." // contract address, token id, asset id, or seller address to search
);
```

- Returns -

```typescript
{
  success: boolean;
  data: MarketplaceListings[];
  error: unknown
}
```

- Types -

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
```

## checkNftOwnership

This function allows you to check if a token is owned by a given wallet address or not. Here is an example call of how you can check if a token is owned by a given wallet address:

```typescript
import { checkNftOwnership, Networks } from '@lyncworld/fuel-marketplace';

const response = checkNftOwnership(
  wallet, // wallet of the user to check the ownership
  '0x...' // contract address of the token to check the ownership
  "0x..." // token id (or sub id) of the token to check the ownership
  "SEMI_FT" // token standard of the token to check the ownership (choose from NFT or SEMI_FT)
);
```

- Returns -

```typescript
{
  success: true;
  data: {
    contractAddress: `0x${string}`;
    subId: `0x${string}`;
    nftStandard: "NFT" | "SEMI_FT";
  }
}
```

Or

```typescript
{
  success: false;
  error: string[];
}
```
