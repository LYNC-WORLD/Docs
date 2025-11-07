---
sidebar_label: "Create New Tokens"
id: launchpad-sdk-using-the-sdk-create-new-token
custom_edit_url: null
---

# Token Creation Guide

The LYNC SDK provides three methods for creating tokens, each suited for different use cases.

## Token Creation Methods

### 1. Create Token (Empty Pool)

Create a token without any initial liquidity. This is useful when you want to set up the token first and add liquidity later.

```typescript
const result = await sdk.createToken(
  wallet,
  "My Token",           // Token name
  "MTK",                // Token symbol
  "https://example.com/metadata.json"  // Metadata URL
);

console.log("Token Address:", result.asset_id);
console.log("Transaction Hash:", result.transaction_id);
```

#### Response

```typescript
{
  asset_id: string;          // Token contract address
  transaction_id: string;    // Transaction hash
}
```

### 2. Create Token with Buy Input

Create a token and immediately buy tokens by specifying how much ETH you want to spend.

```typescript
const result = await sdk.createTokenWithBuyInput(
  wallet,
  "My Token",           // Token name
  "MTK",                // Token symbol
  "https://example.com/metadata.json",  // Metadata URL
  0.1                   // ETH amount to spend
);

console.log("Token Address:", result.asset_id);
console.log("Tokens Bought:", result.bought);
console.log("ETH Spent:", result.sold);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `wallet` | ethers.Wallet | Wallet to create token with |
| `name` | string | Token name |
| `symbol` | string | Token symbol (ticker) |
| `MetadataUrl` | string | URL to token metadata |
| `ethAmount` | number | ETH amount to spend (minimum: 0.00001) |

#### Response

```typescript
{
  transaction_id: string | null;   // Transaction hash
  asset_id: string | null;         // Token contract address
  bought: string | null;           // Amount of tokens bought (in wei)
  sold: string | null;             // Amount of ETH spent (in wei)
  error?: string;                  // Error message if failed
}
```

#### Example

```typescript
const result = await sdk.createTokenWithBuyInput(
  wallet,
  "Awesome Token",
  "AWTK",
  "https://mycdn.com/awesome-token.metadat.json",
  0.05
);

if (result.error) {
  console.error("Error:", result.error);
} else {
  console.log("Success! Token created at:", result.asset_id);
  
  // Get token balance
  const balance = await sdk.getTokenBalance(
    provider,
    result.asset_id!,
    await wallet.getAddress(),
    true
  );
  console.log("Your balance:", balance);
}
```

### 3. Create Token with Buy Output

Create a token and immediately buy tokens by specifying exactly how many tokens you want to receive.

```typescript
const result = await sdk.createTokenWithBuyOutput(
  wallet,
  "My Token",           // Token name
  "MTK",                // Token symbol
  "https://example.com/metadata.json",  // Metadata URL
  1000                  // Number of tokens to receive
);

console.log("Token Address:", result.asset_id);
console.log("Tokens Received:", result.bought);
console.log("ETH Spent:", result.sold);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `wallet` | ethers.Wallet | Wallet to create token with |
| `name` | string | Token name |
| `symbol` | string | Token symbol (ticker) |
| `MetadataUrl` | string | URL to token metadata |
| `assetAmount` | number | Number of tokens to receive |

#### Example

```typescript
const result = await sdk.createTokenWithBuyOutput(
  wallet,
  "Fixed Amount Token",
  "FAT",
  "https://mycdn.com/metadata.json",
  5000  // Want exactly 5000 tokens
);

if (result.error) {
  console.error("Error:", result.error);
} else {
  const tokensReceived = ethers.utils.formatUnits(
    result.bought!,
    ASSET_DECIMALS
  );
  console.log(`Received ${tokensReceived} tokens`);
}
```

### Token Name and Symbol

- **Name**: Can be any string, typically descriptive
- **Symbol**: Usually 3-5 uppercase letters (e.g., "BTC", "ETH", "USDC")

### Metadata

Token metadata should include:
- Token image (PNG, JPG, or SVG)
- Description
- Social links (optional)
- Additional properties (optional)


