---
sidebar_label: 'Creating a Lootbox'
id: aptos-lootbox-create
custom_edit_url: null
---

# Creating a Lootbox

Creating a lootbox on Aptos Lootbox involves depositing assets (NFTs and APT Tokens) and setting parameters that will control how rewards are distributed when someone opens the lootbox.

Before creating a lootbox, the user needs to connect to the Aptos Lootbox web application using their [Petra Wallet](https://petra.app/). Once connected, the user can navigate to the section where they can create a new lootbox.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/APTOS/lootbox/create/create.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">LYNC Aptos Lootbox Homepage</span>
</div>
<br/>

## Choose Assets to Include in the Lootbox

### DAs (Digital Assets):
The Digital Asset (DA) standard is a modern Non-Fungible Token (NFT) standard for Aptos. NFTs represent unique assets on-chain, and are stored in collections. These NFTs can be customized to later be transferred, soulbound, burned, mutated, or customized via your smart contracts. You can refer to the [Aptos documentation](https://aptos.dev/en/build/smart-contracts/digital-asset) to know more about **Fungible Assets** and how to create one.

Users can deposit DAs in the form of NFTs in the lootbox. To deposit NFTs in the lootbox, the user needs to provide the details of the collection they want to include in the lootbox along with the details of NFTs in the collection. The user will also need to specify the other important details like token URI, maximum supply, and pick range (the maximum and minimum number of NFT tokens from each collection) of NFTs to be given to a user after opening a lootbox.

* **Add Collection Details:** For each collection, the user will need to provide details like collection name, token name, token URI base, and maximum supply of tokens for that particular collection.

>A collection of tokens on the Aptos blockchain can contain zero, one, or many distinct fungible or non-fungible assets within it. The collection is simply a container, intended only to group assets for a creator.
>
>Each token included in the lootbox must be associated with a collection, and that collection must have remaining tokens that can be minted.


* **Specify Range:** After adding the NFTs, the user specifies the range of how many NFTs can be given out when the lootbox is opened. For instance, if the user added a collection that has a maximum supply of 100 tokens, then the user may specify that the lootbox should give out between 1 and 3 tokens whenever a user opens the lootbox. This range defines how many NFTs the system will randomly select when the lootbox is opened.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/APTOS/lootbox/create/create-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Form to Add NFTs to the Lootbox</span>
</div>
<br/>

### FAs (Fungible Assets):
The Aptos Fungible Asset Standard (also known as “Fungible Asset” or “FA”) provides a standard, type-safe way to define fungible assets in the Move ecosystem. It is a modern replacement for the coin module that allows for seamless minting, transfer, and customization of fungible assets for any use case. You can refer to the [Aptos documentation](https://aptos.dev/en/build/smart-contracts/fungible-asset) to know more about **Fungible Assets** and how to create one.

Users can deposit FAs in the form of APTs in the lootbox. To include FAs in the lootbox, the user needs to provide the maximum amount of APTs they want to include in the lootbox, and a pick range to select APTs within the specified range whenever a user opens the lootbox.


* **Specify maximum amount**: The user needs to specify the total amount of APTs they want to deposit to the lootbox. This deposit APT amount will be available to the users who open the lootbox and will be distributed to them within the specified range until all the APTs are distributed to the users.

* **Specify Range**: Similar to NFTs, the user defines the range for how many APTs will be given when the lootbox is opened.  For instance, if the user added a maximum of 100 APTs, then the user may specify that the lootbox should give out between 0.1 and 0.25 APTs whenever a user opens the lootbox. This range defines how many APTs the system will randomly select when the lootbox is opened.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/APTOS/lootbox/create/create-2.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Form to Add APTs to the Lootbox</span>
</div>
<br/>

## Review and Confirm Deployment
Before finalizing the lootbox, the user can review all the details of included NFTs and APTs. Once everything is reviewed, the user can find the "Next" button and click the button to confirm the creation of the lootbox.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/APTOS/lootbox/create/create-3.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Users can Review All the Assets Deposited to the Lootbox</span>
</div>
<br/>

Once the lootbox is created, it becomes available for opening. At this point, the lootbox is visible in the user interface, and ready for opening. If desired, the user can share the lootbox with others, or they may choose to open it themselves.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/APTOS/lootbox/create/create-4.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Users can Review All the Assets Deposited to the Lootbox</span>
</div>
<br/>

Each lootbox created using the Aptos lootbox web application has a unique lootbox ID, which is used to identify the lootboxes and items in them uniquely. Users can share their created lootboxes with other users as well for opening the lootboxes and claiming rewards.

Each lootbox created by the user is available on the "Your Lootboxes" page. User can view their created lootboxes on this page and they can also see the status of their created lootboxes - whether they are still "active" or "empty".

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/APTOS/lootbox/create/create-5.png"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]">Users can Review All the Assets Deposited to the Lootbox</span> -->
</div>
<br/>

A lootbox remains active "active" untill all the rewards inside the lootboxes are distributed. After all the rewards are distributed, lootbox becomes empty and will no longer be available for opening to other users.

> **IMPORTANT NOTES -**
>
>* Users can only a maximum amount of APTs that is already available in their wallet excluding gas fees.
>
>* Although the user sets specific ranges for both DAs and FAs, the system will handle the randomization process. For example, if the user defines that the lootbox will give out between 1-3 NFTs, the number and selection of NFTs are random within this range when the box is opened.
>
>* Each lootbox can be opened and claimed once per wallet address until the lootbox is empty. Users can open the lootbox and claim rewards only one time until the lootbox becomes empty.