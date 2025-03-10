---
sidebar_label: 'Creating a new lootbox'
id: evm-lootbox-sdk-create-new
custom_edit_url: null
---

# Creating a new lootbox

For creating a new Lootbox using ```@lyncworld/lootbox-evm-sdk```, you will need to create an instance of ```LyncLootboxManager``` class provided by the SDK. Here is an example of creating a new Lootbox using the SDK:

```typescript
import { LyncLootBoxCreator, ChainIdentifier } from "@lyncworld/lootbox-evm-sdk";
const lootboxCreator = new LyncLootBoxCreator();
await lootboxCreator.initialize(ChainIdentifier.BASE_SEPOLIA, provider);
```

After creating an instance of Lync Lootbox Creator class, you can utilize the ```createLootbox``` method provided by the ```LyncLootBoxCreator``` class. Here is the complete specification of the method and an example function for creating a new Lootbox:

## Method Overview:
The ```createLootbox``` function is an asynchronous method in the ```LyncLootBoxCreator``` class. This function is responsible for creating a new loot box with ```ERC20```, ```ERC721```, and ```ERC1155``` items.

### Syntax:

```typescript
async createLootbox(
    signer: Signer,
    erc20Items: ERC20Item[],
    erc721Items: ERC721Item[],
    erc1155Items: ERC1155Item[],
    whitelist: string[],
    trustedForwarder: string, // for meta transactions
    activateLootbox: boolean,
    maxOpensPerAddress: number,
    gasOverrides?: Overrides = {}

): Promise<TransactionResponse[]>
```

### Parameters:
* ```signer (Signer)*```: The signer who will be signing the transactions.
* ```erc20Items (ERC20Item[])*```: An array of ERC20 items to be included in the loot box.
* ```erc721Items (ERC721Item[])*```: An array of ERC721 items to be included in the loot box.
* ```erc1155Items (ERC1155Item[])*```: An array of ERC1155 items to be included in the loot box.
* ```whitelist (string[])*```: An array of addresses that are whitelisted. Keep empty for no whitelist.
* ```trustedForwarder (string)*```: The address of the trusted forwarder for meta transactions. Pass in zero address if you don’t want to enable meta txns.
* ```activateLootbox (boolean)*```: A boolean indicating whether to start the loot box.
* ```maxOpensPerAddress (number)*```: The maximum number of times each address can open the lootbox
* ```gasOverrides ```: Gas override parameters (such as gasLimit, gasPrice, and maxFeePerGas from ethers) that you may need to adjust if transactions are failing to go through.

> All the parameters marked with ```*``` in the above list are required parameters for creating a loot box.

### Return Value:
This function returns a Promise that resolves to an array of ```TransactionResponse``` objects. Each ```TransactionResponse``` object contains the transaction, the receipt of the transaction, and additional data related to the transaction.

### Errors:
This function throws a LootBoxError if:

* Approval fails for ```ERC20```, ```ERC721```, or ```ERC1155``` items.
* Lootbox creation fails.

## Important Notes:

* For an existing ERC20, ERC1155 or ERC721 item, name, symbol, and uriBase (in case of ERC1155 and ERC721 items) is not required. Therefore, you can pass empty strings as a value for these arguments:
    - Examples:
        ```typescript
        // For existing ERC20 item:
        const existingERC20Item = {
            contractAddress: "0x...", // contract address of existing ERC20 token
            name: "", // pass empty string for existing token
            symbol: "", // pass empty string for existing token
            ...
        }

        // For existing ERC1155 item:
        const existingERC1155Item = {
            contractAddress: "0x...", // contract address of existing ERC1155 collection
            name: "", // pass empty string for existing collection
            symbol: "", // pass empty string for existing collection
            uriBase: "", // pass empty string for existing collection
            ...
        }

        // For existing ERC721 item:
        const existingERC721Item = {
            contractAddress: "0x...", // contract address of existing ERC721 collection
            name: "", // pass empty string for existing collection
            symbol: "", // pass empty string for existing collection
            uriBase: "", // pass empty string for existing collection
            ...
        }

        ```

* For a new ```ERC20```, ```ERC1155``` or ```ERC721``` item, pass the zero address as a value of the contractAddress for ```ERC20Item```, ```ERC1155Item```, or ```ERC721Item```.
    - Examples:
        ```typescript
        import { ethers } from "ethers";

        // For existing ERC20 item:
        const existingERC20Item = {
            contractAddress: ethers.constants.AddressZero, // zero address for new ERC20 token
            ...
        }

        // For existing ERC1155 item:
        const existingERC1155Item = {
            contractAddress: ethers.constants.AddressZero, // zero address for new ERC1155 collection
            ...
        }

        // For existing ERC721 item:
        const existingERC721Item = {
            contractAddress: ethers.constants.AddressZero, // zero address for new ERC721 collection
            ...
        }
        ```

> REMARKS -
>
>This function is part of the ```LyncLootBoxCreator``` class and cannot be called independently. It must be called on an instance of the ```LyncLootBoxCreator``` class.