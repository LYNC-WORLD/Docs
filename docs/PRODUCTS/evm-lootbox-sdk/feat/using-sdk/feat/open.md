---
sidebar_label: 'Opening a lootbox'
id: evm-lootbox-sdk-open
custom_edit_url: null
---

# Opening a lootbox

For opening a Lootbox using ```@lyncworld/lootbox-evm-sdk```, you will need to create an instance of ```LyncLootbox``` class provided by the SDK and initialize the lootbox instance with a valid lootbox address. Here is an example of creating and initializing a lootbox using the SDK:

```typescript
import { ChainIdentifier, LyncLootBox } from "@lyncworld/lootbox-evm-sdk";

const lootbox = new LyncLootBox();
const provider = new ethers.providers.Web3Provider(window.ethereum);

const lootboxId = "0x..." // a valid lootbox id created using `createLootBox` method

lootbox
	.initialize(ChainIdentifier.BASE_SEPOLIA, provider, lootboxId)
	.then((response) => console.log(response))
	.catch((err) => console.error("Error in initializing lootbox: ", err));
```

After creating an instance of ```LyncLootbox``` class and intializing, you can utilize the ```openLootBox``` method provided by the ```LyncLootBox``` class. Here is the complete specification of the method and an example function for creating a new Lootbox:

## Method Overview:
The ```openLootBox``` function is an asynchronous function that is used to open a loot box. It performs several checks and operations before and after the loot box is opened.

### Parameters:
The function takes one parameter:

* ```signer (Signer)```: The signer who will be signing the open loot box transactions. It represents the entity (usually a user) that is initiating the transaction to open the loot box.
* ```gasOverrides?```: (optional) Gas override parameters (such as gasLimit, gasPrice, and maxFeePerGas from ethers) that you may need to adjust if transactions are failing to go through.

### Return Value
The function returns a Promise that resolves to an object with two properties:

* ```txn```: This is the transaction object returned from the openLootBox function of the lootBoxInstance.
* ```receipt```: This is the receipt object returned from calling the wait function on the transaction object.

### Errors:
The function can throw several errors, all instances of the ```LootBoxError``` class:

* If the Merkle proof validation fails, it throws a ```LootBoxError``` with the ```VALIDATION_ERROR``` code.
* If the wallet has no more remaining opens, it throws a ```LootBoxError``` with the ```LOOTBOX_OPENED_ERROR``` code.
* If there are too many pending requests, it throws a ```LootBoxError``` with the ```TOO_MANY_REQUESTS_ERROR``` code.
* If the loot box opening fails for any other reason, it throws a ```LootBoxError``` with the ```LOOTBOX_OPENED_ERROR``` code.

> NOTE -
>
> This function will trigger a transaction on the blockchain, which will require the user to pay gas fees. Make sure the user is aware of this before calling this function. The ```TransactionResponse``` object can be used to track the status of the transaction on the blockchain.