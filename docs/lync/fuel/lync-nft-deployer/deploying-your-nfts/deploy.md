---
sidebar_label: "Deploying Your NFTs"
id: deploying-your-nfts
custom_edit_url: null
---

# Deploying Your NFTs

In this section, you will learn about launching an NFT, an SFT, or an entire collection of NFTs or SFTs. Our platform will guide you through every step of the deployment process.

## Fill Out the Deployment Form

### 1. Choose the Type of Contract

- **Nonfungible Tokens -**
  NFTs are unique digital assets. Each Nonfungible NFT is distinct and cannot be replicated.

  - **Examples:** Digital art, rare collectibles, unique game items.

- **Semi-fungible NFT -**
  SFTs are the type of digital assets that can be exchanged for one another (like a currency). SFTs are useful where multiple identical items are created, but their state changes after use.

  - **Examples:** Limited edition items where multiple copies exist, in-game currency with a fixed supply, and event tickets.

- **NFT Collections -**
  This option is for deploying a group of related NFTs or SFTs. Collections allow you to deploy multiple digital assets of the same type under a single contract.

  - **Examples:** A series of digital art pieces from the same artist, a collection of themed game items, or a set of collectible cards.

### 2. Access the Deployment Form

- Start by connecting your wallet to the Fuel NFT Deployer.
- Choose the NFT type to get started with the deployment.
- Within the "Deploy Contract" page, you’ll find the deployment form. You will have to input all the necessary information about your NFT contracts in the Form to get started with the deployment process.

### 3. Fill in the Required Details

- **Contract Name -**
  Provide a unique name for your NFT contract. This name will help identify your contract within the blockchain network and should be descriptive of its content or purpose.
- **Symbol -**
  Choose a symbol for your NFT or collection. This is often a short, memorable abbreviation that represents your NFT in transactions and listings.
- **Other Relevant Properties -**
  Depending on the type of NFT you’re deploying, you may need to fill out additional properties. These can include the token category, cost, max supply, and max mint per user (in case of collection).

By following these steps and filling out the form with detailed and accurate information, you ensure that your NFTs or NFT collections are properly set up to be deployed on the Fuel blockchain network.

## Mint Tokens Within the Contract

### 1. Select the Deployed Contract

After deploying your NFT smart contract on the blockchain, it will appear in the "Your Contracts" section of the web application interface. This is the list of all contracts you have deployed, where you can select the one you want to use for minting tokens.

Click on the desired contract. This will take you to the contract details page where you can mint the tokens or view already minted tokens.

### 2. Mint Tokens

Minting is the process of creating new tokens (NFTs or SFTs) based on the selected contract. Depending on the type of token you want to create, the process will differ.

- **For Nonfungible Tokens:** Each NFT is unique and distinct. You will mint one token at a time, with each token having its unique **[Asset ID](https://docs.fuel.network/docs/intro/glossary/#assetid)**.
- **For Semi-fungible Tokens:** Semi-fungible tokens can be created in groups or batches. Unlike non-fungible tokens, these tokens are interchangeable within the same batch but have unique **Asset IDs** between batches.

> What is an Asset ID for a minted token?
>
> On the Fuel blockchain, an **Asset ID** is a unique identifier for a minted token that is used to interact with an asset on the network. Each minted token (in case of NFTs) or batch of tokens (in case of SFTs) is assigned a unique 64-bit hash that is used to identify the asset and interact with the asset. Unlike the EVM, the sending and receiving of these assets can be done independently of the asset contract using the **Asset ID**.

### 3. Specify Minting Details

When you initiate the minting process, you'll need to provide specific details about the NFTs you're creating.

- Upload the image or other media of your digital asset. If you are uploading a video or an audio, you will be required to provide a thumbnail representing the poster of your digital asset.
- Enter the other details like the title and description of your digital asset specifying the identity of your digital asset.
- You will also need to provide the name of the creator of this digital asset - this can be the same user that is minting the asset or any other user that may be related to the digital asset.
- In the case of minting the SFTs, you will also required to enter how many editions you want to create of the current asset. This will mint the given no of copies of current digital asset, which will be represented by the same **Asset ID** on the Fuel blockchain.
- You can also specify other properties of the digital asset that can be used to describe the digital asset that you are minting. However, adding additional properties is completely optional and digital assets can be deployed without specifying the additional properties.

Once you've entered all the required details, click the "Mint" button to execute the minting process. This action will create a digital asset as specified and add it to the blockchain.

A unique **Asset ID** will be assigned to the minted asset or batch of assets (in the case of SFTs). This unique Asset ID can be used to digitally identify the asset on the fuel blockchain independently.

You can find the **Asset ID** of an already minted asset by clicking the "Tokens" tab on the contract details page and finding the minted token as shown in the figure below:

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/deployer/deployer-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Asset ID can be found by clicking on the "Tokens" tab</span>
</div>
<br/>

Congratulations! You've now successfully navigated the NFT minting process. By selecting the appropriate deployed contract and specifying the minting details, you’ve created new NFTs that are now live on the blockchain.
