---
sidebar_label: 'Creating a Lootbox'
id: fuel-lootbox-create
custom_edit_url: null
---

# Creating a Lootbox
Creating a lootbox on Fuel Lootbox involves depositing assets (NFTs and FTs) and setting parameters that will control how rewards are distributed when someone opens the lootbox.

Before creating a lootbox, the user needs to connect to the Fuel Lootbox web application using their Fuel Wallet. Once connected, the user can navigate to the section where they can create a new lootbox.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/lootbox/lootbox-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">LYNC Fuel Lootbox Homepage</span>
</div>
<br/>

## Choose Assets to Include in the Lootbox

### NFTs (Non-Fungible Tokens):
* **Deposit NFTs:** For each NFT the user deposits, they need to input the corresponding **[Asset ID](https://docs.fuel.network/docs/intro/glossary/#assetid)**. The NFTs must already exist in the user’s wallet to add them to the lootbox.

>What is an [Asset ID](https://docs.fuel.network/docs/intro/glossary/#assetid) for a minted token?
>
>On the Fuel blockchain, an **Asset ID** is a unique identifier for a minted token that is used to interact with an asset on the network. Each minted token (in case of NFTs) or batch of tokens (in case of SFTs) is assigned a unique 64-bit hash that is used to identify the asset and interact with the asset. Unlike the EVM, the sending and receiving of these assets can be done independently of the asset contract using the **Asset ID**.
>
>You can use [LYNC's Contract Deployer on Fuel](https://fueldeployer.lync.world/) to mint NFTs and find Asset IDs to include in the lootbox. You can refer to the [Fuel NFT Deployer](https://docs.lync.world/fuel/lync-nft-deployer) documentation to know more about **Asset IDs** and where to find them.

* **Specify Range:** After adding the NFTs, the user specifies the range of how many NFTs can be given out when the lootbox is opened.
    
    For instance, if the user deposits 5 NFTs, they may specify that the lootbox should give out between 1 and 3 NFTs. This range defines how many NFTs the system will randomly select when the lootbox is opened.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/lootbox/lootbox-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Form to Add NFTs to the Lootbox</span>
</div>
<br/>

## FTs (Fungible Tokens):
* **Deposit Tokens:** The user will need to select which FTs they want to deposit into the lootbox. The FTs must also already be deployed and available in the user’s wallet. For each FT the user deposits, they need to input the corresponding [Asset ID](https://docs.fuel.network/docs/intro/glossary/#assetid).
* **Specify Range:** Similar to NFTs, the user defines the range for how many FTs will be given when the lootbox is opened.
* **Deposit Amount:** For each FT, the user needs to specify the total amount of FT they want to deposite to the lootbox. This deposit amount will be available to the users who opens the lootbox and will be distributed to them within the specified range until all the FTs are distributed to the users.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/lootbox/lootbox-3.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Form to Add FTs to the Lootbox</span>
</div>
<br/>

# Review and Confirm Deployment
Before finalizing the lootbox, the user can review all the details, including NFTs and FTs and their asset IDs respectively. Once everything is reviewed, the user can find the **"Create Lootbox"** button and click the button to confirm the creation of the lootbox.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/lootbox/lootbox-4.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Users can Review All the Assets Deposited to the Lootbox</span>
</div>
<br/>

Once the lootbox is created, it becomes available for opening. At this point, the lootbox is visible in the user interface, and ready for opening. If desired, the user can share the lootbox with others, or they may choose to open it themselves.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/lootbox/lootbox-5.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Lootbox is Ready to Open After the Successful Creation</span>
</div>
<br/>

Each lootbox created using the Fuel lootbox web application has a unique lootbox ID, which is used to identify the lootboxes and items in them uniquely. Users can share their created lootboxes with other users as well for opening the lootboxes and claiming rewards.

Each lootbox created by the user is available on the "Your Lootboxes" page. User can view their created lootboxes on this page and they can also see the status of their created lootboxes - whether they are still "active" or "empty".

A lootbox remains active "active" untill all the rewards inside the lootboxes are distributed. After all the rewards are distributed, lootbox becomes empty and will no longer be available for opening to other users.

>IMPORTANT NOTES -
>
> * Users can only deposit NFTs and FTs that already exist in their wallet. Fuel Lootbox does not support creating or minting new tokens.
>
> * Although the user sets specific ranges for both NFTs and FTs, the system will handle the randomization process. For example, if the user defines that the lootbox will give out between 1-3 NFTs, the number and selection of NFTs are random within this range when the box is opened.
>
> * Each lootbox can be opened and claimed multiple per wallet address until the lootbox is empty. Users can open the lootbox and claim rewards as many times as they want until the lootbox becomes empty.