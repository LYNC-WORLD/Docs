---
sidebar_label: "Get Token Graph Data"
id: launchpad-sdk-get-token-graph-data
custom_edit_url: null
---

# Get Token Graph Data

The `getGraphData` method retrieves historical price and volume data for a specific token, suitable for creating charts and visualizations.

## Method Signature

```typescript
async getGraphData(
  assetId: string
): Promise<{ success: boolean; data: any }>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| assetId | string | Unique identifier of the token/asset |

## Return Value

Returns a Promise that resolves to:

```typescript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": [
        {
            "open": "0.00000000100000000000",
            "high": "0.00000000100019800980",
            "low": "0.00000000100000000000",
            "close": "0.00000000100019800980",
            "time": 1762253400
        }
    ]
}
```

## Example Usage

### Basic Usage

```typescript
import { SDK, LYNC_API } from "@lync/launchpad-sdk";

async function fetchGraphData(assetId: string) {
  // Initialize SDK
  SDK.init({
    ammContract: "0x1E1E7CcF1Cf59A9502322D78605e967a4E49EaD1",
    apiKey: "your-api-key",
    launchpadId: "your-launchpad-id",
  });

  const apiSdk = new LYNC_API();

  try {
    const result = await apiSdk.getGraphData(assetId);

    if (result.success) {
      console.log(`Graph data points: ${result.data.length}`);
      
      result.data.forEach((point, index) => {
        console.log(`
Point ${index + 1}:
  Time: ${new Date(point.timestamp).toLocaleString()}
  Price: $${point.price}
  Volume: ${point.volume}
        `);
      });
    }
  } catch (error) {
    console.error("Failed to fetch graph data:", error.message);
  }
}

// Usage
fetchGraphData("your-asset-id-here");
```
