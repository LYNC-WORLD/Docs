---
sidebar_label: "Get Token Details"
id: launchpad-sdk-get-token-details
custom_edit_url: null
---

# Get Token Details

The `getTokenDetails` method retrieves comprehensive information about a specific token, including market data, contract details, and real-time metrics.

## Method Signature

```typescript
async getTokenDetails(
  assetId: string,
  ethPrice: number
): Promise<{ success: boolean; data: any }>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| assetId | string | Unique identifier of the token/asset |
| ethPrice | number | Current ETH price in USD for market calculations |

## Return Value

Returns a Promise that resolves to:

```typescript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "tokenMarketCap": 1.0001980098,
        "poolData": {
            "id": "0x1381959dc68ec6ce792bf1a9db78b20c082cfe07",
            "tokenCreator": "0x7eb53157e284ba3a6a055117f726ed59a29a0536",
            "tokenName": "Launchpad Demo",
            "tokenSymbol": "LD",
            "tokenURI": "nothing",
            "blockTimestamp": "1762253458",
            "transactionHash": "0x09441efe147352434f6025d1bdfdf5fa29a4d49a5ed6443e5873802297f0e64e",
            "holders": [
                {
                    "id": "0x1e1e7ccf1cf59a9502322d78605e967a4e49ead1-0x1381959dc68ec6ce792bf1a9db78b20c082cfe07",
                    "balance": "999901008800029797050092041",
                    "holderAddress": "0x1e1e7ccf1cf59a9502322d78605e967a4e49ead1"
                },
                {
                    "id": "0x7eb53157e284ba3a6a055117f726ed59a29a0536-0x1381959dc68ec6ce792bf1a9db78b20c082cfe07",
                    "balance": "98990199970202949907959",
                    "holderAddress": "0x7eb53157e284ba3a6a055117f726ed59a29a0536"
                },
                {
                    "id": "0xf74028a2e8c6d1f4a381ba9e98162c21b1552266-0x1381959dc68ec6ce792bf1a9db78b20c082cfe07",
                    "balance": "1000000000000000000",
                    "holderAddress": "0xf74028a2e8c6d1f4a381ba9e98162c21b1552266"
                }
            ]
        },
        "metadata": {
            "image":"https://dashboard.lync.world/logo.svg"
            "description":"This is a demo token"
        }
    }
}
```

## Example Usage

### Basic Usage

```typescript
import { SDK, LYNC_API } from "@lync/launchpad-sdk";

async function getTokenInfo(assetId: string) {
  // Initialize SDK
  SDK.init({
    ammContract: "0x1E1E7CcF1Cf59A9502322D78605e967a4E49EaD1",
    apiKey: "your-api-key",
    launchpadId: "your-launchpad-id",
  });

  const apiSdk = new LYNC_API();
  const currentEthPrice = 2500; // Current ETH price in USD

  try {
    const result = await apiSdk.getTokenDetails(assetId, currentEthPrice);

    if (result.success) {
      const token = result.data;
      console.log("Token Details: ", token);
    }
  } catch (error) {
    console.error("Failed to fetch token details:", error.message);
  }
}

// Usage
getTokenInfo("your-asset-id-here");
```