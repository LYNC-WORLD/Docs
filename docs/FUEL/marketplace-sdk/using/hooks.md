---
sidebar_label: 'Using hooks to get the marketplace data'
id: fuel-marketplace-sdk-using-hooks
custom_edit_url: null
---

# Using hooks to get the marketplace data

The SDK provides a set of hooks that you can use to get the marketplace data. Here is the list of hooks provided by the SDK:

## useAllNftsInCollection

This hook returns all the NFTs in a collection. You can use this hook to get all the NFTs in a collection.

```typescript
import { Networks, useAllNftsInCollection } from '@lyncworld/fuel-marketplace';

const { fetching, data, error } = useAllNftsInCollection({
  network: Networks.Testnet,
  // Select from "NFT" or "SEMI_FT" according to actual token standard
  nftStandard: 'SEMI_FT',
  // Replace this demo contract address with actual contract address
  contractAddress: '0x...',
});
```

* Returns -
```typescript
{
  fetching: boolean;
  data: TokensInCollection[];
  error: unknown
}
```

* Types -
```typescript
interface TokensInCollection {
  tokenName: string;
  tokenImage: string;
  tokenAssetMedia: string;
  description: string;
  contractAddress: `0x${string}`;
  tokenId: `0x${string}`;
  assetId: `0x${string}`;
  tokenStandard: 'NFT' | 'SEMI_FT';
  contractName: string;
  contractSymbol: string;
}
```


## useCollections

This hook returns all the collections whose at least one token is listed on the marketplace.

```typescript
import { Networks, useCollections } from '@lyncworld/fuel-marketplace';

const { fetching, data, error } = useCollections({
  network: Networks.Testnet,
  // You can pass the limit to get the top N collections or remove it to get all collections
  limit: 10,
});
```

* Returns -
```typescript
{
  fetching: boolean;
  data: MarketplaceCollections[];
  error: unknown
}
```

* Types -
```typescript
interface MarketplaceCollections {
  contractAddress: `0x${string}`;
  tokenStandard: 'NFT' | 'SEMI_FT';
  collectionName: string;
  collectionSymbol: string;
  floorPrice: string;
  totalItemsListed: number;
  bannerImage: string;
}
```


## useListings

This hook returns all the tokens listed on the marketplace for buying.

```typescript
import { Networks, useListings } from '@lyncworld/fuel-marketplace';

const { fetching, data, error } = useListings({
  network: Networks.Testnet,
  // You can pass the limit to get the top N listings or remove it to get all listings
  limit: 10,
});
```

* Returns -
```typescript
{
  fetching: boolean;
  data: MarketplaceListings[];
  error: unknown
}
```

* Types -
```typescript
interface MarketplaceListings {
  listingId: number;
  isActive: boolean;
  nftAddress: `0x${string}`;
  tokenStandard: 'NFT' | 'SEMI_FT';
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


## useNft

This hook return all the listing details of a specific token by its contract address, token standard, and token ID.

```typescript
import { Networks, useNft } from '@lyncworld/fuel-marketplace';

const { fetching, data, error } = useNft({
  network: Networks.Testnet,
  // Select from "NFT" or "SEMI_FT" according to actual token standard
  nftStandard: 'SEMI_FT',
  // Replace this demo contract address with actual contract address of the token
  contractAddress: '0x...',
  // Replace this demo token id with actual token id (or sub id) of the token
  tokenId: '0x...',
  // You can pass the limit to get the top N listing or remove it to get all the listing of the token
  limit: 10,
});
```

* Returns -
```typescript
{
  fetching: boolean;
  data: NftDetails;
  error: unknown
}
```

* Types -
```typescript
interface NftDetails {
  listingData: OmittedMarketplaceListings[];
  nftMetadata: NftMetadata;
}

interface OmittedMarketplaceListings
  extends Omit<MarketplaceListings, 'tokenName' | 'tokenImage' | 'tokenAssetMedia'> {}

interface MarketplaceListings {
  listingId: number;
  isActive: boolean;
  nftAddress: `0x${string}`;
  tokenStandard: 'NFT' | 'SEMI_FT';
  tokenId: `0x${string}`;
  assetId: `0x${string}`;
  tokenQuantity: number;
  pricePerItem: string;
  sellerAddress: `0x${string}`;
  tokenName: string;
  tokenImage: string;
  tokenAssetMedia: string;
}

interface NftMetadata {
  tokenName: string;
  tokenImage: string;
  tokenAssetMedia: string;
  description: string;
}
```