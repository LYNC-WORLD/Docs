---
sidebar_label: "Update Fee Details"
id: launchpad-sdk-update-fee-details
custom_edit_url: null
---

# Update Fee Details

The `updateFeeDetails` method allows you to configure the fee structure for your launchpad, including the fee percentage and the address that receives the fees.

## Method Signature

```typescript
async updateFeeDetails(
  feeBips: string, 
  feeReceiver: string
): Promise<{ success: boolean; data: any }>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| feeBips | string | Fee amount in basis points (1 bip = 0.01%). For example, "100" = 1% |
| feeReceiver | string | Ethereum address that will receive the collected fees |

## Return Value

Returns a Promise that resolves to:

```typescript
{
  success: boolean;  // Indicates if the operation was successful
  data: any;        // Response data from the API
}
```

## Example Usage

```typescript
import { SDK, LYNC_API } from "@lync/launchpad-sdk";

async function updateFees() {
  // Initialize SDK
  SDK.init({
    ammContract: "0x1E1E7CcF1Cf59A9502322D78605e967a4E49EaD1",
    apiKey: "your-api-key",
    launchpadId: "your-launchpad-id",
  });

  // Create API instance
  const apiSdk = new LYNC_API();

  try {
    // Update fee to 2.5% (250 basis points)
    const result = await apiSdk.updateFeeDetails(
      "250",                                          // 2.5% fee
      "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb" // Fee receiver address
    );

    if (result.success) {
      console.log("Fee details updated successfully!");
      console.log("Response:", result.data);
    }
  } catch (error) {
    console.error("Failed to update fee details:", error.message);
  }
}

updateFees();
```

## Understanding Basis Points

Basis points (bips) are a common way to express percentages:

- 1 basis point = 0.01%
- 100 basis points = 1%
- 250 basis points = 2.5%
- 1000 basis points = 10%
