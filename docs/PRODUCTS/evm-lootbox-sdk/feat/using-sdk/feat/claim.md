---
sidebar_label: 'Claiming rewards'
id: evm-lootbox-sdk-claim
custom_edit_url: null
---

# Claiming rewards

After opening a lootbox using the above method, you can utilize the ```claimRewards``` method provided by the ```LyncLootBox``` class.


> NOTE -
>
> Since you can open the lootbox multiple time so you can also claim the rewards from multiple opens in a single transaction. Example: Lets say you open the lootbox 2 times and got 2 tokens for the first open and 1 for the second open. When you claim you can get all the 3 tokens(accumulated rewards) in a single claim transaction.

Here is the complete specification of the method and an example function for creating a new Lootbox:

## Method Overview:

The ```claimRewards``` function is an asynchronous function that is used to claim the rewards from a loot box. It performs several checks and operations before and after the rewards are claimed.

### Parameters:
The function takes one parameter:

* ```signer (Signer)```: The signer who will be signing the claim rewards transactions. It represents the entity (usually a user) that is initiating the transaction to claim the rewards.

### Return Value
The function returns a ```Promise``` that resolves to an object with two properties:

* ```txn```: This is the transaction object returned from the claimRewards function of the lootBoxInstance.
* ```receipt```: This is the receipt object returned from calling the wait function on the transaction object.

### Errors:
The function can throw several errors, all instances of the LootBoxError class:

* If there is nothing to claim a ```LootBoxError``` with the ```LOOTBOX_REWARDS_CLAIM_ERROR``` code.
* If the rewards claim fails for any other reason, it throws a ```LootBoxError``` with the ```LOOTBOX_REWARDS_CLAIM_ERROR``` code.

> NOTE -
>
> This function will trigger a transaction on the blockchain, which will require the user to pay gas fees. Make sure the user is aware of this before calling this function. The TransactionResponse object can be used to track the status of the transaction on the blockchain.