---
sidebar_label: "Useful information functions from LyncLootBox class"
id: useful-information-functions-from-lynclootbox-class
custom_edit_url: null
---

# Useful information functions from LyncLootBox class

> NOTE -
>
> These are information functions and do not require a signer. Just the provider will work!

Initialize the class before calling any of these functions.

```typescript
import { LyncLootBox, LootBoxError } from "@lyncworld/lootbox-evm-sdk";
import { ethers } from "ethers";

const lb = new LyncLootBox();
await lb.initialize(
  ChainIdentifier.BASE_SEPOLIA, // your chain
  provider, // provider
  lootboxId // your lootbox id / address
);
```

## 1. isEmpty

Checks if the lootbox is empty or not.

```typescript
const empty = await lb.isEmpty();
console.log(empty); // true or false
```

## 2. itemAddresses

Lists the item addresses that are present in the lootbox.

```typescript
const itemAddresses = await lb.itemAddresses();
console.log(itemAddresses); // Array of addresses
```

> NOTE -
>
> It has an optional parameter useSubgraph which takes a boolean. If set to true, it will utilize the subgraph instead of directly querying the blockchain.

## 3. owner

Returns the owner of the lootbox.

```typescript
const owner = await lb.owner();
console.log(owner); // Owner address
```

## 4. active

Returns the status of the lootbox.

```typescript
const isActive = await lb.active();
console.log(isActive); // true or false
```

## 5. permanentlyStopped

Returns whether the lootbox is permanently stopped or not.

```typescript
const killed = await lb.permanentlyStopped();
console.log(killed); // true or false
```

## 6. chainId

Returns the chainId.

```typescript
const chainId = await lb.chainId();
console.log(chainId); // chain id
```

## 7. creator

Returns the address of the lootbox creator.

```typescript
const creator = await lb.creator();
console.log(creator); // Address of lootbox creator
```

## 8. merkleRoot

Returns the merkle root since we use the merkle tree method of whitelisting large number addresses.

```typescript
const merkleRoot = await lb.merkleRoot();
console.log(merkleRoot); // merkleRoot Hex
```

## 9. remainingOpens

Returns the number of time a wallet can still open the lootbox.

```typescript
const walletAddress = "0x...";
const opens = await lb.remainingOpens(walletAddress);
console.log(opens); // number of opens for the walletAddress
```

## 10. hasPendingClaims

Returns whether a wallet has some pending claims or not.

```typescript
const walletAddress = "0x...";
const canClaim = await lb.hasPendingClaims(walletAddress);
console.log(canClaim); // true of false
```

## 11. lootboxContents

Returns the current state of the lootbox. Details like which item is present in the lootbox, quantity and tokenIds.

> NOTE -
>
> This function utilizes the subgraph, which may result in a slight delay in retrieving the data.

```typescript
const contents = await lb.lootboxContents();
console.log(contents);
```

Example output:

```typescript
{
  erc20Items: [
    {
      itemAddress: '0x...', // addres of the erc20 token
      tokenAmount: '85517387241022654383'
    },
    ... more items
  ],
  erc721Items: [
	  {
		  itemAddress: '0x...', // addres of the erc721 token
			tokenIds: []
    },
    ... more items
  ],
  erc1155Items: [
    {
      itemAddress: '0x...', // addres of the erc1155 token
      tokenIds: ['1', '2', '3', ...], // remaining token Ids
	    tokenAmounts: ['5', '8', '1', ...] // remaining token amounts
    },
    ... more items
  ]
}
```

# 12. trustedForwarder

Get the current trusted forwarder address.

```typescript
const trustedForwarder = await lb.trustedForwarder();
console.log(trustedForwarder); // address of trustedForwarder
```

# 13. getRewardsForAddress

Get the rewards for the address which has opened the lootbox. It returns all the accumulated rewards.

```typescript
const walletAddress = "0x...";
const rewards = await lb.getRewardsForAddress(walletAddress);
console.log(rewards); // array of rewards
```

Example output:

```typescript
[
  {
    itemAddress: "0x8869d99c72aF9d4A00090e298Af990303216f0D0",
    tokenId: "",
    tokenAmount: "12933075821210463238",
    uri: "",
    type: "ERC20",
  },
  {
    itemAddress: "0xd34EFc9525bb841D707ae99bfd4fD77f92775980",
    tokenId: "35",
    tokenAmount: "1",
    uri: "<https://example.com/35.json>",
    type: "ERC721",
  },
  {
    itemAddress: "0xd34EFc9525bb841D707ae99bfd4fD77f92775980",
    tokenId: "73",
    tokenAmount: "1",
    uri: "<https://example.com/73.json>",
    type: "ERC721",
  },
  {
    itemAddress: "0xd34EFc9525bb841D707ae99bfd4fD77f92775980",
    tokenId: "14",
    tokenAmount: "1",
    uri: "<https://example.com/14.json>",
    type: "ERC721",
  },
  {
    itemAddress: "0x815b49F19e0ea4e4cdc87a65B96D6A8222e0AF21",
    tokenId: "29",
    tokenAmount: "1",
    uri: "<https://example.com/29.json>",
    type: "ERC721",
  },
  {
    itemAddress: "0x408410fe1d572E5560d3f73F330EC4F298D20B4f",
    tokenId: "4",
    tokenAmount: "1",
    uri: "<https://example.com/4.json>",
    type: "ERC1155",
  },
  {
    itemAddress: "0x408410fe1d572E5560d3f73F330EC4F298D20B4f",
    tokenId: "7",
    tokenAmount: "1",
    uri: "<https://example.com/7.json>",
    type: "ERC1155",
  },
  {
    itemAddress: "0x2B4B00f625E595C4B5e7381968ff32fB565985D4",
    tokenId: "2",
    tokenAmount: "3",
    uri: "<https://example.com/2.json>",
    type: "ERC1155",
  },
];
```

# 14. getAllRewardsForAddress

Returns all the rewards a wallet has gotten till now. Uses subgraph

```typescript
const walletAddress = "0x...";
const rewardsAll = await lb.getAllRewardsForAddress(walletAddress);
console.log(rewardsAll); // array
```

Example output:

```typescript
{
  erc20Items: [
    {
      itemAddress: '0x...', // addres of the erc20 token
      tokenAmount: '85517387241022654383' // total token amount for this wallet
    },
    ... more items
  ],
  erc721Items: [
	  {
		  itemAddress: '0x...', // addres of the erc721 token
			tokenIds: ['2', '3', ...] // all the token ids for this wallet
    },
    ... more items
  ],
  erc1155Items: [
    {
      itemAddress: '0x...', // addres of the erc1155 token
      tokenIds: ['1', '2', '3', ...], // all the token ids for this wallet
	    tokenAmounts: ['5', '8', '1', ...] // respective token amounts
    },
    ... more items
  ]
}
```
