---
sidebar_label: "Get Token Trades"
id: launchpad-sdk-get-token-trades
custom_edit_url: null
---

# Get Token Trades

The `getTokenTrades` method retrieves the trading history for a specific token, including buy and sell transactions with pagination support.

## Method Signature

```typescript
async getTokenTrades(
  assetId: string,
  page: number,
  limit: number
): Promise<{ success: boolean; data: any }>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| assetId | string | Unique identifier of the token/asset |
| page | number | Page number for pagination (starts from 1) |
| limit | number | Number of trades to return per page |

## Return Value

Returns a Promise that resolves to:

```typescript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "tradeData": [
            {
                "id": "1762253458_76",
                "tokenAddress": "0x1381959dc68ec6ce792bf1a9db78b20c082cfe07",
                "isBuy": true,
                "tokenName": "Launchpad Demo",
                "tokenSymbol": "LD",
                "tokenURI": "https://dashboard.lync.world/logo.svg",
                "walletAddress": "0x7eb53157e284ba3a6a055117f726ed59a29a0536",
                "ethAmount": "100000000000000",
                "tokenAmount": "98990199970202949907959",
                "blockTimestamp": "1762253458",
                "transactionHash": "0x09441efe147352434f6025d1bdfdf5fa29a4d49a5ed6443e5873802297f0e64e"
            }
        ],
        "totalTradeNumber": 1
    }
}
```

## Example Usage

### Basic Usage

```typescript
import { SDK, LYNC_API } from "@lync/launchpad-sdk";

async function fetchTokenTrades(assetId: string) {
  // Initialize SDK
  SDK.init({
    ammContract: "0x1E1E7CcF1Cf59A9502322D78605e967a4E49EaD1",
    apiKey: "your-api-key",
    launchpadId: "your-launchpad-id",
  });

  const apiSdk = new LYNC_API();

  try {
    // Get first 20 trades
    const result = await apiSdk.getTokenTrades(assetId, 1, 20);

    if (result.success) {
      console.log(`Trade History for ${assetId}:`);
      console.log(`Total trades fetched: ${result.data.length}`);
    }
  } catch (error) {
    console.error("Failed to fetch trades:", error.message);
  }
}

// Usage
fetchTokenTrades("your-asset-id-here");
```
