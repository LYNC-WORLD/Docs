---
sidebar_label: "Launch Your Entire Collection"
id: launch-your-entire-collection
custom_edit_url: null
---

# Launch Your Entire Collection

This **"Collection"** option is used when you're deploying a full set of tokens, rather than a single item. Collections allow you to group multiple tokens under a single deployment, making it easier to manage and launch a series of related digital assets.

## Provide Collection Details

- Upload an image that represents your collection. This is often a visual that represents the essence of your entire collection and will be displayed on the claimer page that will be created for your collection where users can mint the tokens.
- Enter a unique contract name and unique symbol for your collection. This contract name will be used as an identifier of your collection and will be displayed on the claimer page along with the contract address and collection image.

## Choose Contract Type

- **Non-Fungible NFT Contract (1/1 NFT) -** Ideal for digital assets that are unique and not interchangeable. Each token is distinct and has its properties. Nonfungible tokens are a variant of the ERC-721 on EVM standard.
- **Semi-Fungible NFT Contract (Multiple Editions) -**
  This contract type is suited for digital assets where multiple copies or editions of the same item exist. Semi-fungible tokens allow for a single contract to manage multiple types of tokens.

## Input Metadata and Supply Details

- Provide the URI (Uniform Resource Identifier) for the token metadata. This URI points to where the metadata for each digital asset is stored, usually on a decentralized storage network like IPFS (InterPlanetary File System).
- Set a limit on the number of assets that can be minted per wallet address.
- Specify the total number of digital assets available in your collection.
- Enter the cost required to mint each asset. This is the price that users will pay to acquire an asset from your collection.

Once you’ve filled in all the details and reviewed them, click on the "Deploy" button. This will initiate the process of deploying your collection on the Fuel blockchain. This involves paying a deployment fee (gas fee) and will make your collection available for minting by users.

By following these detailed steps, you'll be able to effectively deploy your collection, ensuring all necessary information is included and configured correctly.

## Share and Manage the Claimer Page

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/deployer/deployer-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Claimer Page for Non-Fungible (1/1) NFTs</span>
</div>
<br/>

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/deployer/deployer-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Claimer Page for Semi-Fungible (Multiple Edition) NFTs</span>
</div>
<br/>

## Find the Claimer Page for Your NFT Collection

- After deploying your collection using the Fuel NFT Deployer, go to the "Your Contracts" section on your dashboard.
- In this section, you will see a list of all the contracts you've deployed. Look for the specific collection contract you want to share.
- Each collection will have an associated Claimer Page URL. Click on this URL or copy it to access the Claimer Page for your collection.
- The Claimer Page URL is the link you’ll share with your community, friends, or customers. This URL directs users to a page where they can interact with your collection.
