---
sidebar_label: "Setup SDK"
id: launchpad-sdk-using-the-sdk-setup-sdk
custom_edit_url: null
---

## SDK Initialization

### Step 1: Import Required Modules

```typescript
import { 
  SDK, 
  LYNC_ICM_SDK, 
  LYNC_API
} from "@lync/launchpad-sdk";
import { ethers } from "ethers";
```

### Step 2: Configure SDK

Before using any SDK features, you must initialize it with your configuration:

```typescript
SDK.init({
  ammContract: "your-ammContract-address-here",             // AMM contract address
  apiKey: "your-api-key-here",                              // Your API key
  launchpadId: "your-launchpad-id-here",                   // Your launchpad ID
});
```

#### Configuration Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `ammContract` | string | The AMM contract address on the blockchain |
| `apiKey` | string | Your LYNC Project API key for authentication |
| `launchpadId` | string | Your unique launchpad identifier |

### Step 3: Create SDK Instances

```typescript
// Create ICM SDK instance for token operations
const sdk = new LYNC_ICM_SDK();

// Create API SDK instance for API operations
const apiSdk = new LYNC_API();
```

### Step 4: Setup Blockchain Connection

```typescript
// Connect to Base Sepolia network
const RPC_URL = "https://base-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY";
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

// Create wallet instance
const PRIVATE_KEY = "your-private-key";
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
```

## Complete Setup Example

```typescript
import { SDK, LYNC_ICM_SDK, LYNC_API } from "@lync/launchpad-sdk";
import { ethers } from "ethers";

async function setupSDK() {
  // Initialize SDK
  SDK.init({
    ammContract: "0x1E1E7CcF1Cf59A9502322D78605e967a4E49EaD1",
    apiKey: "99e1e91e-bbac-4a4a-9f61-93e52902327f",
    launchpadId: "a0ea1819-603a-4a95-8594-6f7d72571563",
  });

  // Create instances
  const sdk = new LYNC_ICM_SDK();
  const apiSdk = new LYNC_API();

  // Setup provider
  const provider = new ethers.providers.JsonRpcProvider(
    "https://base-sepolia.g.alchemy.com/v2/YOUR_KEY"
  );

  // Setup wallet
  const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);

  // Verify connection
  const network = await provider.getNetwork();
  console.log(`Connected to ${network.name} (chainId: ${network.chainId})`);

  const balance = await wallet.getBalance();
  console.log(`Wallet balance: ${ethers.utils.formatEther(balance)} ETH`);

  return { sdk, apiSdk, provider, wallet };
}

// Use the setup
setupSDK().then(({ sdk, wallet, provider }) => {
  console.log("SDK ready to use!");
});
```




