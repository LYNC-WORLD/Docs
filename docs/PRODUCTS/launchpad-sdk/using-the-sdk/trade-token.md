---
sidebar_label: "Trade Tokens"
id: launchpad-sdk-using-the-sdk-trade-token
custom_edit_url: null
---

# Trading Functions

Trade functions allow you to trade tokens with support for both buy and sell operations, each with exact input and exact output modes.


## Buy Operations

### Buy with Exact Input

Specify how much ETH you want to spend, and the SDK calculates how many tokens you'll receive.

```typescript
const result = await sdk.buy_exact_input(
  tokenAddress,          // Token contract address
  "0.01",               // ETH amount to spend (as string)
  wallet,               // Your wallet
  0.5,                  // Slippage tolerance (0.5%)
  0                     // Priority fee (gwei)
);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `tokenAddress` | string | Token contract address |
| `ethAmount` | string | ETH amount to spend |
| `wallet` | ethers.Wallet | Wallet to execute trade |
| `slippage` | number | Slippage tolerance (percentage) |
| `priorityFee` | number | Gas priority fee (gwei) |

#### Response

```typescript
{
  transaction_id: string | null;   // Transaction hash
  bought: string | null;           // Tokens received (wei)
  sold: string | null;             // ETH spent (wei)
  error?: string;                  // Error message if failed
}
```

#### Example

```typescript
const tokenAddress = "0x2a6c96a2Ddeef07f90d241147Da9E3b2CEfa2C91";
const ethAmount = "0.05";
const slippage = 1; // 1% slippage tolerance

const result = await sdk.buy_exact_input(
  tokenAddress,
  ethAmount,
  wallet,
  slippage,
  0
);

if (result.error) {
  console.error("Buy failed:", result.error);
} else {
  const tokensReceived = ethers.utils.formatUnits(
    result.bought!,
    ASSET_DECIMALS
  );
  console.log(`Bought ${tokensReceived} tokens`);
  console.log("Transaction:", result.transaction_id);
}
```

### Buy with Exact Output

Specify how many tokens you want to receive, and the SDK calculates how much ETH you need to spend.

```typescript
const result = await sdk.buy_exact_output(
  tokenAddress,          // Token contract address
  1000,                 // Number of tokens to receive
  wallet,               // Your wallet
  0                     // Priority fee (gwei)
);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `tokenAddress` | string | Token contract address |
| `assetAmount` | number | Number of tokens to receive |
| `wallet` | ethers.Wallet | Wallet to execute trade |
| `priorityFee` | number | Gas priority fee (gwei) |

#### Example

```typescript
const tokenAddress = "0x2a6c96a2Ddeef07f90d241147Da9E3b2CEfa2C91";
const tokensWanted = 5000;

const result = await sdk.buy_exact_output(
  tokenAddress,
  tokensWanted,
  wallet,
  0
);

if (result.error) {
  console.error("Buy failed:", result.error);
} else {
  const ethSpent = ethers.utils.formatEther(result.sold!);
  console.log(`Spent ${ethSpent} ETH for ${tokensWanted} tokens`);
}
```

## Sell Operations

### Sell with Exact Input

Specify how many tokens you want to sell, and the SDK calculates how much ETH you'll receive.

```typescript
const result = await sdk.sell_exact_input(
  tokenAddress,          // Token contract address
  "100",                // Number of tokens to sell (as string)
  wallet,               // Your wallet
  0.5,                  // Slippage tolerance (0.5%)
  0                     // Priority fee (gwei)
);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `tokenAddress` | string | Token contract address |
| `assetAmount` | string | Number of tokens to sell |
| `wallet` | ethers.Wallet | Wallet to execute trade |
| `slippage` | number | Slippage tolerance (percentage) |
| `priorityFee` | number | Gas priority fee (gwei) |

#### Example

```typescript
// Get current token balance
const balance = await sdk.getTokenBalance(
  provider,
  tokenAddress,
  await wallet.getAddress(),
  true
);

// Sell 10% of balance
const sellAmount = (parseFloat(balance as string) * 0.1).toString();

const result = await sdk.sell_exact_input(
  tokenAddress,
  sellAmount,
  wallet,
  0.5,  // 0.5% slippage
  0
);

if (result.error) {
  console.error("Sell failed:", result.error);
} else {
  const ethReceived = ethers.utils.formatEther(result.bought!);
  console.log(`Sold ${sellAmount} tokens for ${ethReceived} ETH`);
}
```

### Sell with Exact Output

Specify how much ETH you want to receive, and the SDK calculates how many tokens you need to sell.

```typescript
const result = await sdk.sell_exact_output(
  tokenAddress,          // Token contract address
  "0.01",               // ETH amount to receive (as string)
  wallet,               // Your wallet
  0                     // Priority fee (gwei)
);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `tokenAddress` | string | Token contract address |
| `ethAmount` | string | ETH amount to receive |
| `wallet` | ethers.Wallet | Wallet to execute trade |
| `priorityFee` | number | Gas priority fee (gwei) |

#### Example

```typescript
const tokenAddress = "0x2a6c96a2Ddeef07f90d241147Da9E3b2CEfa2C91";
const ethWanted = "0.05";

const result = await sdk.sell_exact_output(
  tokenAddress,
  ethWanted,
  wallet,
  0
);

if (result.error) {
  console.error("Sell failed:", result.error);
} else {
  const tokensSold = ethers.utils.formatUnits(
    result.sold!,
    ASSET_DECIMALS
  );
  console.log(`Sold ${tokensSold} tokens for ${ethWanted} ETH`);
}
```

## Token Approval

The SDK automatically handles token approvals for sell operations. The first time you sell a token, the SDK will:

1. Check if approval is needed
2. Submit approval transaction if required
3. Wait for approval confirmation
4. Execute the sell transaction

```typescript
// First sell of a new token - automatically handles approval
const result = await sdk.sell_exact_input(
  newTokenAddress,
  "10",
  wallet,
  0.5,
  0
);

// Subsequent sells don't need approval
```

## Slippage Protection

Slippage protects against price movements during transaction execution. It's specified as a percentage.

```typescript
// Low slippage - stricter price protection
const lowSlippage = 0.1;  // 0.1%

// Medium slippage - balanced
const mediumSlippage = 0.5;  // 0.5%

// High slippage - more flexible
const highSlippage = 5;  // 5%

const result = await sdk.buy_exact_input(
  tokenAddress,
  "0.1",
  wallet,
  mediumSlippage,
  0
);
```

### When to Use Different Slippage Values

- **Low (0.1-0.5%)**: Stable, liquid tokens
- **Medium (0.5-2%)**: Most trading situations
- **High (2-10%)**: Volatile tokens or low liquidity

## Priority Fees

Priority fees help your transaction get processed faster by validators.

```typescript
// No priority fee - normal speed
const normalFee = 0;

// Medium priority
const mediumFee = 2;  // 2 gwei

// High priority
const highFee = 5;  // 5 gwei

const result = await sdk.buy_exact_input(
  tokenAddress,
  "0.1",
  wallet,
  0.5,
  highFee  // High priority
);
```