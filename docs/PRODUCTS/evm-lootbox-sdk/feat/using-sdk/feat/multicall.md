---
sidebar_label: 'Multicall : opening and claiming multiple lootboxes in a single transaction'
id: evm-lootbox-sdk-multicall
custom_edit_url: null
---

# Multicall : opening and claiming multiple lootboxes in a single transaction

Initialize the ```LyncLootBoxMulticall``` class
```typescript
import { LyncLootBoxMulticall, LootBoxError } from "@lyncworld/lootbox-evm-sdk";
import { ethers } from "ethers";

const multicall = new LyncLootBoxMulticall();
await multicall.initialize(
	ChainIdentifier.BASE_SEPOLIA, // your chain
	provider, // provider
);
```

# 1. openMulticall
Open multiple lootboxes in a single transaction:
```typescript
const signer = ... // transaction signer
const lootboxes = [
	'0x...',
	... more lootbox ids / addresses
];

const txn = await multicall.openMulticall(
	signer,
	lootboxes
);
console.log(txn);
```
>NOTE -
>
>This can be used to open single lootbox multiple times (if allowed), by passing in same address multiple times.

# 2. claimRewardsMulticall
Open multiple lootboxes in a single transaction:
```typescript
const signer = ... // transaction signer
const lootboxes = [
	'0x...',
	... more lootbox ids / addresses
];

const txn = await multicall.claimRewardsMulticall(
	signer,
	lootboxes
);
console.log(txn);
```

>NOTE -
>
>This cannot be used to claim single lootbox multiple times.