---
sidebar_label: "Using services provided by the SDK to list, buy, and manage tokens"
id: using-services-provided-by-the-sdk-to-list-buy-and-manage-tokens
custom_edit_url: null
---

# Using services provided by the SDK to list, buy, and manage tokens

The SDK provides a set of services that you can use to list and buy tokens or modify and cancel a listing. In the following section, we will look into the services provided by the SDK.

For performing list token, buy token, modify listing, or cancel listing services on the marketplace using the SDK, you will need to create an instance of `MarketplaceClient` class provided by the SDK. Here is an example of creating a new instance of `MarketplaceClient` class using the SDK::

```typescript
import { MarketplaceClient, Networks } from "@lyncworld/fuel-marketplace";

const marketplaceClient = new MarketplaceClient(
  Networks.Testnet,
  wallet // Wallet of the user who is performing the action
);
```

After creating an instance of `MarketplaceClient` class, you can utilize various services provided by the `MarketplaceClient` class. Here is the complete list of the services and an example function for performing listing a token, buying a token, modifying a listing, and canceling a listing:

## Listing a token on the marketplace

You can call the `useListTokenService` function provided by the `MarketplaceClient` class followed by the `setProperties` and `execute` methods to list a token on the marketplace. Here is an example call of how you can list a token on the marketplace:

```typescript
const response = await marketplaceClient
  .useListTokenService()
  .setProperties(
    "0x...", // asset id of the token to be listed
    "0x...", // contract address of the token to be listed
    "0x...", // token id (or sub id) of the token to be listed
    0.0002, // price per item of the token to be listed
    4, // quantity of the token to be listed (always 1 for NFT)
    "SEMI_FT" // token standard of the token to be listed (choose from NFT or SEMI_FT)
  )
  .execute();

if (response.success) {
  alert("Token listed successfully.");
  console.log("Transaction data: ", response.data);
} else {
  alert("Error listing token.");
  console.error("Error listing token: ", { error: response.error });
}
```

## Buying a listed token on the marketplace

You can call the `useBuyTokenService` function provided by the `MarketplaceClient` class followed by the `setProperties` and `execute` methods to buy a token on the marketplace. Here is an example call of how you can buy a token on the marketplace:

```typescript
const response = await marketplaceClient
  .useBuyTokenService()
  .setProperties(
    "0x...", // listing id of the token to be bought
    2, // quantity of the token to be bought (always 1 for NFT)
    0.0002 // price per item of the token to be bought
  )
  .execute();

if (response.success) {
  alert("Token bought successfully.");
  console.log("Transaction data: ", response.data);
} else {
  alert("Error buying token.");
  console.error("Error buying token: ", { error: response.error });
}
```

## Modify a listing on the marketplace

You can call the `useModifyListingService` function provided by the `MarketplaceClient` class followed by the `setProperties` and `execute` methods to modify an already listed token on the marketplace. Here is an example call of how you can modify a listing on the marketplace:

```typescript
const response = await marketplaceClient
  .useModifyListingService()
  .setProperties(
    '0x...', // listing id of the token to be modified
    0.0001 // new price per item of the listed token to be modified
    2, // number of tokens to be added or removed from the listing (always 0 for NFT)
    "0x..." // asset id of the token to be modified (only required for SFT - send undefined for NFT)
  )
  .execute();

if (response.success) {
  alert('Listing modified successfully.');
  console.log('Transaction data: ', response.data);
} else {
  alert('Error modifying listing.');
  console.error('Error modifying listing: ', { error: response.error });
}
```

## Cancel a listing on the marketplace

You can call the `useCancelListingService` function provided by the `MarketplaceClient` class followed by the `setProperties` and `execute` methods to cancel an already listed token on the marketplace. Here is an example call of how you can cancel a listing on the marketplace:

```typescript
const response = await marketplaceClient
  .useCancelListingService()
  .setProperties(
    "0x..." // listing id of the token to be canceled
  )
  .execute();

if (response.success) {
  alert("Listing cancelled successfully.");
  console.log("Transaction data: ", response.data);
} else {
  alert("Error canceling listing.");
  console.error("Error canceling listing: ", { error: response.error });
}
```
