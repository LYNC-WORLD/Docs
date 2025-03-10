---
sidebar_label: 'Lootbox admin functions'
id: evm-lootbox-sdk-admin
custom_edit_url: null
---

# Lootbox admin functions

These are function that only the lootbox owner can call. One of the function (update whitelist) is already described above.

Initialize the class before calling any of these functions

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

> NOTE -
>
> These functions if called with a signer that is not the owner of the lootbox will throw ```LBErrorCodes.VALIDATION_ERROR``` with the message ```"Signer is not the lootbox owner."```

## 1. ```activate```

This function activates a lootbox which might be deactivated by the owner earlier or might be deactivated while creating the lootbox using the [```activateLootbox```](https://www.notion.so/Lootbox-SDK-Documentation-23d1806bbe17495b852fa271514ababc?pvs=21) option.

```typescript
const signer = ... // transaction signer - should be the lootbox owner
const txn = await lb.activate(signer);
console.log(txn);
```

## 2. deactivate
This function deactivates the lootbox which stops any new users from opening the lootbox. This will temporarily stop the lootbox and will not remove any items from the lootbox.

NOTE: Users with any pending claims can still claim their rewards.

```typescript
const signer = ... // transaction signer - should be the lootbox owner
const txn = await lb.deactivate(signer);
console.log(txn);
```

## 3. removeItem
This will remove one item from the lootbox. It will withdraw the item if it is present in the lootbox and send it to the owner of the lootbox.
```typescript
const signer = ... // transaction signer - should be the lootbox owner
const itemAddress = ... // item address - should be present in lootbox
const txn = await lb.removeItem(signer, itemAddress);
console.log(txn);
```

## 4. permanentlyStop
This will permanently disable the lootbox and withdraw all the items from the lootbox and send it to lootbox owner. This action will permanently disable all functions of the lootbox except for the claimRewards function. Users who have pending rewards from previous openings will still be able to claim them. This will also stop the lootbox from receiving any new RNGs from supra.

```typescript
const signer = ... // transaction signer - should be the lootbox owner
const txn = await lb.permanentlyStop(signer);
console.log(txn);
```

## 5. updateRemainingOpensForAddresses
Since, there could be multiple opens per wallet. This function can be used to set the number of opens for some addresses other then the default passed during creation.

```typescript
const signer = ... // transaction signer - should be the lootbox owner
const addresses = [
	"0x...",
	... more addresses
];
const remainingOpens = [
	2,
	... new remainingOpens for other addresses
]
const txn = await lb.updateRemainingOpensForAddresses(
	signer, 
	addresses, 
	remainingOpens
);
console.log(txn);
```

## 6. changeTrustedForwarder
Change the trusted forwarder for meta transactions. Can be useful when you switch meta transaction providers.

```typescript
const signer = ... // transaction signer - should be the lootbox owner
const newForwarder = "0x..." // new forwarder address
const txn = await lb.changeTrustedForwarder(signer, newForwarder);
console.log(txn);
```

### 7. transferOwnership
Change the lootbox owner.

>NOTE -
>
>If you change the ownership of the lootbox and then withdraw any item or permanently stop the lootbox all the contents of the lootbox will be sent to the new owner. 

```typescript
const signer = ... // transaction signer - should be the lootbox owner
const newOwner = "0x..." // new lootbox owner
const txn = await lb.transferOwnership(signer, newOwner);
console.log(txn);
```
