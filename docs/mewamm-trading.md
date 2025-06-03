---
sidebar_label: "MewAMM Trading"
id: mewamm-trading
custom_edit_url: null
---

# MewAMM Trading Documentation

Welcome to the mew.gg trading documentation for AI agents and trading bots on **mew.gg**. This guide provides everything you need to build automated trading systems on the SagaEVM network.

## Fee charged:

1. On every trade [mew.gg](http://mew.gg) charges 1% fee
2. 2500 Saga is charged when token is bonded and moves the liquidity to DEX
3. 30% of this revenue goes to community

## Contract Information

- **Network:** SagaEVM
- **Contract Name:** MewAMM
- **Contract Address:** `0x84b9ec7429a4BD17324210fdd2728F18362D5C2B`

## Trading Methods

The MewAMM contract provides four main trading methods for buying and selling tokens:

### Buying Tokens

### Method 1: buyExactInput

Buy tokens by specifying the exact bonding token amount to spend.

buyExactInput is used when user wants to buy token for definite amount of saga and we give user an estimate how much token user will get for the given saga.

**Function Signature:**

```solidity
function buyExactInput(
    address tokenAddress,
    uint256 minTokenAmount,
    uint256 bondingTokenAmount,
    uint256 deadline
) external
```

**Parameters:**

- `tokenAddress` (address): The address of the token you want to buy
- `minTokenAmount` (uint256): Minimum amount of tokens you expect to receive (slippage protection)
- `bondingTokenAmount` (uint256): Exact amount of bonding tokens to spend
- `deadline` (uint256): Unix timestamp after which the transaction will revert

**Example Transaction:**

```jsx
// Web3.js example
import { ethers } from "ethers";

// Create provider and signer
const provider = new ethers.JsonRpcProvider("SAGA_EVM_RPC");
const signer = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);

// Create contract instance
const contract = new ethers.Contract(CONTRACT_ADDRESS, MewAMM_ABI, signer);

try {
  const tx = await contract.buyExactInput(
    "0x1234...abcd",
    "1000000000000000000",
    "5000000000000000000",
    Math.floor(Date.now() / 1000) + 600,
    {
      gasLimit: 200000,
      gasPrice: 0,
    }
  );

  console.log("Transaction hash:", tx.hash);
  const receipt = await tx.wait();
  console.log("Transaction confirmed in block:", receipt.blockNumber);
} catch (error) {
  console.error("Transaction failed:", error);
}
```

### Method 2: buyExactOutput

Buy an exact amount of tokens.

buyExactOutput is used when user wants to buy definite amount of tokens and we estimate how much saga it will cost for the given token amount

**Function Signature:**

```solidity
function buyExactOutput(
    address tokenAddress,
    uint256 tokenAmount,
    uint256 deadline
) external
```

**Parameters:**

- `tokenAddress` (address): The address of the token you want to buy
- `tokenAmount` (uint256): Exact amount of tokens you want to receive
- `deadline` (uint256): Unix timestamp after which the transaction will revert

**Example Transaction:**

```jsx
try {
  const tx = await contract.buyExactOutput(
    "0x1234...abcd", // tokenAddress
    "2000000000000000000", // tokenAmount (2 tokens with 18 decimals)
    Math.floor(Date.now() / 1000) + 600, // deadline
    {
      gasLimit: 200000,
      gasPrice: 0,
    }
  );

  console.log("Transaction hash:", tx.hash);
  const receipt = await tx.wait();
  console.log("Transaction confirmed in block:", receipt.blockNumber);
} catch (error) {
  console.error("Transaction failed:", error);
}
```

### Selling Tokens

### Method 1: sellExactInput

Sell an exact amount of tokens.

**Function Signature:**

```solidity
function sellExactInput(
    address tokenAddress,
    uint256 tokenAmount,
    uint256 minBondingTokenAmount,
    uint256 deadline
) external
```

**Parameters:**

- `tokenAddress` (address): The address of the token you want to sell
- `tokenAmount` (uint256): Exact amount of tokens to sell
- `minBondingTokenAmount` (uint256): Minimum bonding tokens you expect to receive
- `deadline` (uint256): Unix timestamp after which the transaction will revert

**Example Transaction:**

```jsx
try {
  const tx = await contract.sellExactInput(
    "0x1234...abcd", // tokenAddress
    "1500000000000000000", // tokenAmount (1.5 tokens)
    "3000000000000000000", // minBondingTokenAmount (3 bonding tokens minimum)
    Math.floor(Date.now() / 1000) + 600, // deadline
    {
      gasLimit: 200000,
      gasPrice: 0,
    }
  );

  console.log("Transaction hash:", tx.hash);
  const receipt = await tx.wait();
  console.log("Transaction confirmed in block:", receipt.blockNumber);
} catch (error) {
  console.error("Transaction failed:", error);
}
```

### Method 2: sellExactOutput

Sell tokens to receive an exact amount of bonding tokens.

**Function Signature:**

```solidity
function sellExactOutput(
    address tokenAddress,
    uint256 bondingTokenAmount,
    uint256 deadline
) external
```

**Parameters:**

- `tokenAddress` (address): The address of the token you want to sell
- `bondingTokenAmount` (uint256): Exact amount of bonding tokens you want to receive
- `deadline` (uint256): Unix timestamp after which the transaction will revert

**Example Transaction:**

```jsx
try {
  const tx = await contract.sellExactOutput(
    "0x1234...abcd", // tokenAddress
    "4000000000000000000", // bondingTokenAmount (4 bonding tokens)
    Math.floor(Date.now() / 1000) + 600, // deadline
    {
      gasLimit: 200000,
      gasPrice: 0,
    }
  );

  console.log("Transaction hash:", tx.hash);
  const receipt = await tx.wait();
  console.log("Transaction confirmed in block:", receipt.blockNumber);
} catch (error) {
  console.error("Transaction failed:", error);
}
```
