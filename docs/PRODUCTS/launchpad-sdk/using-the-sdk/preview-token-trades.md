---
sidebar_label: "Preview Token Trades"
id: launchpad-sdk-using-the-sdk-preview-token-trades
custom_edit_url: null
---

# Preview Functions

Preview functions allow you to simulate trades and see expected outcomes before executing transactions. This helps you make informed decisions and avoid unexpected results.

## Overview

All preview functions return:

```typescript
{
  amount: string;          // Expected amount (formatted)
  isExecutable: boolean;   // Whether trade can be executed
}
```

## Buy Previews

### Preview Buy with Exact Input

Preview how many tokens you'll receive for a specific ETH amount.

```typescript
const preview = await sdk.preview_buy_exact_input(
  tokenAddress,
  "0.01",              // ETH amount to spend
  provider
);

console.log(`You'll receive approximately ${preview.amount} tokens`);
console.log(`Trade executable: ${preview.isExecutable}`);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `tokenAddress` | string | Token contract address |
| `ethAmount` | string | ETH amount to spend |
| `provider` | ethers.providers.Provider | Blockchain provider |

#### Example

```typescript
const tokenAddress = "0x2a6c96a2Ddeef07f90d241147Da9E3b2CEfa2C91";
const ethAmount = "0.05";

const preview = await sdk.preview_buy_exact_input(
  tokenAddress,
  ethAmount,
  provider
);

if (preview.isExecutable) {
  console.log(`Spending ${ethAmount} ETH will get you ${preview.amount} tokens`);
  
  // Proceed with actual buy
  const result = await sdk.buy_exact_input(
    tokenAddress,
    ethAmount,
    wallet,
    0.5,
    0
  );
} else {
  console.log("Trade not executable - insufficient liquidity or amount too small");
}
```

### Preview Buy with Exact Output

Preview how much ETH you need to spend to receive a specific amount of tokens.

```typescript
const preview = await sdk.preview_buy_exact_output(
  tokenAddress,
  "1000",              // Number of tokens desired
  provider
);

console.log(`You'll need to spend approximately ${preview.amount} ETH`);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `tokenAddress` | string | Token contract address |
| `assetAmount` | string | Number of tokens desired |
| `provider` | ethers.providers.Provider | Blockchain provider |

#### Example

```typescript
const tokensWanted = "5000";

const preview = await sdk.preview_buy_exact_output(
  tokenAddress,
  tokensWanted,
  provider
);

if (preview.isExecutable) {
  console.log(`To get ${tokensWanted} tokens, you need ${preview.amount} ETH`);
  
  // Check if you have enough ETH
  const balance = await wallet.getBalance();
  const required = ethers.utils.parseEther(preview.amount);
  
  if (balance.gte(required)) {
    // Proceed with buy
    const result = await sdk.buy_exact_output(
      tokenAddress,
      parseFloat(tokensWanted),
      wallet,
      0
    );
  }
}
```

## Sell Previews

### Preview Sell with Exact Input

Preview how much ETH you'll receive for selling a specific amount of tokens.

```typescript
const preview = await sdk.preview_sell_exact_input(
  tokenAddress,
  "100",               // Number of tokens to sell
  provider
);

console.log(`You'll receive approximately ${preview.amount} ETH`);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `tokenAddress` | string | Token contract address |
| `assetAmount` | string | Number of tokens to sell |
| `provider` | ethers.providers.Provider | Blockchain provider |

#### Example

```typescript
// Get your token balance
const balance = await sdk.getTokenBalance(
  provider,
  tokenAddress,
  await wallet.getAddress(),
  true
);

// Preview selling 50% of balance
const sellAmount = (parseFloat(balance as string) * 0.5).toString();

const preview = await sdk.preview_sell_exact_input(
  tokenAddress,
  sellAmount,
  provider
);

console.log(`Selling ${sellAmount} tokens will get you ${preview.amount} ETH`);

if (preview.isExecutable && parseFloat(preview.amount) > 0.001) {
  // Profitable enough, execute sell
  const result = await sdk.sell_exact_input(
    tokenAddress,
    sellAmount,
    wallet,
    0.5,
    0
  );
}
```

### Preview Sell with Exact Output

Preview how many tokens you need to sell to receive a specific amount of ETH.

```typescript
const preview = await sdk.preview_sell_exact_output(
  tokenAddress,
  "0.01",              // ETH amount desired
  provider
);

console.log(`You need to sell ${preview.amount} tokens`);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `tokenAddress` | string | Token contract address |
| `ethAmount` | string | ETH amount desired |
| `provider` | ethers.providers.Provider | Blockchain provider |

#### Example

```typescript
const ethWanted = "0.05";

const preview = await sdk.preview_sell_exact_output(
  tokenAddress,
  ethWanted,
  provider
);

if (preview.isExecutable) {
  // Check if you have enough tokens
  const balance = await sdk.getTokenBalance(
    provider,
    tokenAddress,
    await wallet.getAddress(),
    true
  );
  
  if (parseFloat(balance as string) >= parseFloat(preview.amount)) {
    console.log(`Selling ${preview.amount} tokens will get you ${ethWanted} ETH`);
    
    // Execute sell
    const result = await sdk.sell_exact_output(
      tokenAddress,
      ethWanted,
      wallet,
      0
    );
  }
}
```

## Virtual Previews (New Tokens)

Virtual preview functions simulate trades for tokens that don't exist yet, useful for planning token creation with initial buys.

### Preview Buy Exact Input Virtual

Preview a buy for a new token by specifying ETH amount.

```typescript
const preview = await sdk.preview_buy_exact_input_virtual(
  0.1,                 // ETH amount
  provider
);

console.log(`Creating token with 0.1 ETH will give you ${preview.amount} tokens`);
```

#### Example

```typescript
const ethAmount = 0.05;

const preview = await sdk.preview_buy_exact_input_virtual(
  ethAmount,
  provider
);

console.log(`Preview for new token with ${ethAmount} ETH:`);
console.log(`- You'll receive: ${preview.amount} tokens`);
console.log(`- Executable: ${preview.isExecutable}`);

if (preview.isExecutable) {
  // Create token with this amount
  const result = await sdk.createTokenWithBuyInput(
    wallet,
    "My Token",
    "MTK",
    "https://example.com/image.png",
    ethAmount
  );
}
```

### Preview Buy Exact Output Virtual

Preview a buy for a new token by specifying token amount.

```typescript
const preview = await sdk.preview_buy_exact_output_virtual(
  1000,                // Number of tokens
  provider
);

console.log(`To get 1000 tokens on creation, you need ${preview.amount} ETH`);
```

#### Example

```typescript
const tokensWanted = 5000;

const preview = await sdk.preview_buy_exact_output_virtual(
  tokensWanted,
  provider
);

console.log(`Preview for creating token with ${tokensWanted} tokens:`);
console.log(`- ETH required: ${preview.amount}`);
console.log(`- Executable: ${preview.isExecutable}`);

if (preview.isExecutable) {
  const ethRequired = parseFloat(preview.amount);
  
  // Create token with exact output
  const result = await sdk.createTokenWithBuyOutput(
    wallet,
    "Fixed Token",
    "FTK",
    "https://example.com/image.png",
    tokensWanted
  );
}
```





