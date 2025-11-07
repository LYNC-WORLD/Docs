---
sidebar_label: "Get Sorted Launchpad Tokens"
id: launchpad-sdk-get-sorted-tokens
custom_edit_url: null
---

# Get Sorted Launchpad Tokens

The `getAllLaunchpadSortedToken` method retrieves a paginated list of launchpad tokens sorted by specific criteria, with ETH price consideration for market calculations.

## Method Signature

```typescript
async getAllLaunchpadSortedToken(
  sortCriteria: string,
  page: number,
  limit: number,
  ethPrice: number
): Promise<{ success: boolean; data: any }>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| sortCriteria | string | Field to sort by (e.g., "MARKET_CAP_ASC", "MARKET_CAP_DESC", "CREATION_TIME_ASC") |
| page | number | Page number for pagination (starts from 1) |
| limit | number | Number of tokens to return per page |
| ethPrice | number | Current ETH price in USD for market calculations |

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
        "transactionHash": "0x09441efe147352434f6025d1bdfdf5fa29a4d49a5ed6443e5873802297f0e64e",
        "marketCap": 1.0001980098
      }
    ],  // Array of token objects with their details
    totalLaunchpadAssets: number // Total number of tokens present in the launchpad
  }        
}
```

## Example Usage

### Sort by Market Cap

```typescript
import { SDK, LYNC_API } from "@lync/launchpad-sdk";

async function getTopTokensByMarketCap() {
  // Initialize SDK
  SDK.init({
    ammContract: "0x1E1E7CcF1Cf59A9502322D78605e967a4E49EaD1",
    apiKey: "your-api-key",
    launchpadId: "your-launchpad-id",
  });

  const apiSdk = new LYNC_API();
  const currentEthPrice = 2500; // Current ETH price in USD

  try {
    const result = await apiSdk.getAllLaunchpadSortedToken(
      "MARKET_CAP_ASC",     // Sort by market cap
      1,               // First page
      10,              // Top 10 tokens
      currentEthPrice
    );

    if (result.success) {
      console.log("Top tokens by market cap:");
      result.data.forEach((token, index) => {
        console.log(`${index + 1}. ${token.name} - $${token.marketCap}`);
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getTopTokensByMarketCap();
```


## Common Sort Criteria

| Sort Criteria | Description |
|--------------|-------------|
| MARKET_CAP_ASC | Sort by total market capitalization ascending|
| MARKET_CAP_DESC | Sort by total market capitalization descending|
| CREATION_TIME_ASC | Sort by creation timestamp ascending (oldest first) |
| CREATION_TIME_DESC | Sort by creation timestamp descending (newest first) |

## Fetching ETH Price

To get the current ETH price, you can use various price feed APIs:

```typescript
// Example using CoinGecko API
async function getEthPrice(): Promise<number> {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
    );
    const data = await response.json();
    return data.ethereum.usd;
  } catch (error) {
    console.error("Error fetching ETH price:", error);
    return 2500; // Fallback price
  }
}

// Use with sorted tokens
const ethPrice = await getEthPrice();
const result = await apiSdk.getAllLaunchpadSortedToken(
  "marketCap",
  1,
  10,
  ethPrice
);
```
