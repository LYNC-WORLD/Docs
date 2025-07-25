---
sidebar_label: "Whitelisting users using lootbox"
id: whitelisting-users-using-lootbox
custom_edit_url: null
---

# Whitelisting users using lootbox

Lync’s `lootbox-evm-sdk` allows developers to whitelist wallet addresses that can open a loot box created using the SDK. Developers can either whitelist the addresses at the time of creating a loot box or they can also update the whitelisted addresses for a specific loot box later after creating the loot box. However, if a loot box is already opened using a wallet address, then blacklisting that wallet address after opening the loot box will not affect the claiming of earned rewards using that wallet address.

Here is an example of how developers can whitelist addresses at the time of creating the loot box.

## Whitelisting addresses when creating a loot box:

```typescript
import { LyncLootBoxCreator, LootBoxError } from "@lyncworld/lootbox-evm-sdk";
import { ethers } from "ethers";

const creator = new LyncLootBoxCreator();
// ... initialize creator

const whitelistedAddresses = [
	"0x7dDa381c4B8fA68b35B3dA9436a584e20B6e45bF",
	"0x066947610A6a5F81C958E31501ED22BBEB5301Ec",
	...
	"0x6f77A19d1828CE87226e1595aBD0be867e6FF3c2"
]; // array of whitelisted addresses.

async function createNewLootbox() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const responseData = await creator.createLootbox(
      signer,
      ...  // Other arguments
      whitelistedAddresses,
      ...  // Other arguments
    );
    const lootboxData = responseData[0].data;

    if (!lootboxData) {
      console.error("Something went wrong while creating lootbox. Please try again later.");
      return;
    }

    return lootboxData;
  } catch (err: unknown) {
    console.error("Error creating lootbox: ", err);

    if (err instanceof LootBoxError || err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("Something went wrong while creating lootbox. Please try again later.");
    }
  }
}
```

The above example creates a loot box that can only be opened by the addresses included in `whitelistedAddresses` array. However, If you pass an empty array for whitelisted addresses, the above method will create a loot box that can be opened by anyone.

## Updating Whitelisted Addresses After Creating a Loot box

> NOTE -
>
> This is a admin function so only lootbox owner can do this

Developers can also update the whitelisted addresses after creating a loot box using the function `updateWhitelist` provided by `LootBoxManager` class. However, to update the whitelisted addresses, the developer has to pass an array of wallet addresses to be whitelisted.

Please note, that the `updateWhitelist` function replaces the old whitelisted array with the new whitelisted array provided in the argument. Therefore if the developer wants to add new whitelisted addresses while keeping the old ones as it is, they have to pass an array of whitelisted wallet addresses that contains all the old addresses in the same order and add the new addresses to be whitelisted to the whitelisted array.

Here is an example of how developers can update the whitelisted addresses later after the creation of the loot box.

```typescript
import { LyncLootBox, LootBoxError } from "@lyncworld/lootbox-evm-sdk";
import { ethers } from "ethers";

const lb = new LyncLootBox();
const lootboxId = "..."; // Id of the loot box for which the whitelisted addresses have to be updated

const updatedWhitelistedAddresses = [
  "0x7dDa381c4B8fA68b35B3dA9436a584e20B6e45bF", // Old address
  "0x066947610A6a5F81C958E31501ED22BBEB5301Ec", // Old address
  ..."0x6f77A19d1828CE87226e1595aBD0be867e6FF3c2", // Old address
  ..."0x031C9497D32543104011315d511A0c42e446b45C", // New address
  "0xc805A7762be267432a944A3266D3E9d3348d9172", // New address
]; // updated array of whitelisted addresses.

async function updateWhitelistedAddresses() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();
    await lb.initialize(
      ChainIdentifier.BASE_SEPOLIA, // your chain
      provider,
      lootboxId
    );

    const response = await lb.updateWhitelist(
      signer,
      updatedWhitelistedAddresses
    );
    console.log("Update Whitelist Response: ", response);
  } catch (error) {
    console.error("Error updating whitelist", error);

    if (error instanceof LootBoxError || error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An error occurred while updating whitelist.");
    }
  }
}
```

## Getting All Whitelisted Addresses for a Particular Loot Box:

The `LootBoxManager` class provides `showWhitelist` function, which can be used to fetch all the whitelisted addresses for a particular loot box.

Here is an example of how developers can fetch whitelisted addresses for a particular loot box.

```typescript
import { LyncLootBox, LootBoxError } from "@lyncworld/lootbox-evm-sdk";
import { ethers } from "ethers";

const lb = new LyncLootBox();
const lootboxId = "..."; // Id of the loot box for which the whitelisted addresses have to be fetched

async function fetchWhitelistedAddresses() {
  try {
    await lb.initialize(
      ChainIdentifier.BASE_SEPOLIA, // your chain
      provider, // provider
      lootboxId
    );
    const whitelistedAddresses = await lb.showWhitelist();
    console.log("Whitelisted addresses:", whitelistedAddresses);
  } catch (error) {
    console.error("Error fetching whitelisted addresses", error);
  }
}
```
