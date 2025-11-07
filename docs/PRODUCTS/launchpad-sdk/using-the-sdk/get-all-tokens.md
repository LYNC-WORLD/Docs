---
sidebar_label: "Get All Launchpad Tokens"
id: launchpad-sdk-get-all-tokens
custom_edit_url: null
---

# Get All Launchpad Tokens

The `getAllLaunchpadToken` method retrieves a paginated list of all tokens available on your launchpad.

## Method Signature

```typescript
async getAllLaunchpadToken(
  page: number, 
  limit: number
): Promise<{ success: boolean; data: any }>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| page | number | Page number for pagination (starts from 1) |
| limit | number | Number of tokens to return per page |

## Return Value

Returns a Promise that resolves to:

```typescript
{
  success: boolean;  // Indicates if the operation was successful
  data: {
    assets: [ 
      {
        "id": "0x1381959dc68ec6ce792bf1a9db78b20c082cfe07",
        "tokenCreator": "0x7eb53157e284ba3a6a055117f726ed59a29a0536",
        "tokenName": "Launchpad Demo",
        "tokenSymbol": "LD",
        "tokenURI": "https://dashboard.lync.world/logo.svg",
        "blockTimestamp": "1762253458",
        "transactionHash": "0x09441efe147352434f6025d1bdfdf5fa29a4d49a5ed6443e5873802297f0e64e"
      }
    ],  // Array of token objects with their details
    totalLaunchpadAssets: number // Total number of tokens present in the launchpad
  }        
}
```

## Example Usage

### Basic Usage

```typescript
import { SDK, LYNC_API } from "@lync/launchpad-sdk";

async function fetchAllTokens() {
  // Initialize SDK
  SDK.init({
    ammContract: "0x1E1E7CcF1Cf59A9502322D78605e967a4E49EaD1",
    apiKey: "your-api-key",
    launchpadId: "your-launchpad-id",
  });

  // Create API instance
  const apiSdk = new LYNC_API();

  try {
    // Get first page with 10 tokens
    const result = await apiSdk.getAllLaunchpadToken(1, 10);

    if (result.success) {
      console.log("Tokens fetched successfully!");
      console.log("Total tokens:", result.data.length);
      
      result.data.forEach((token, index) => {
        console.log(`${index + 1}. ${token.name} (${token.symbol})`);
      });
    }
  } catch (error) {
    console.error("Failed to fetch tokens:", error.message);
  }
}

fetchAllTokens();
```


