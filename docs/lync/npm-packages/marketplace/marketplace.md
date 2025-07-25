---
sidebar_label: Marketplace
id: "marketplace"
custom_edit_url: null
---

# Marketplace

<span className="text-lg text-[rgb(192,192,192)]">LYNC Marketplace NPM SDK allows anyone to create their own decentralized marketplace, including Buy/Sell and Rent/Lend for ERC-721 and ERC-1155 contracts in a few lines of code.</span>

### Steps to setup Marketplace NPM inside any project:

Before integrating the marketplace, we will need to integrate [LYNC Wallet SDK​](https://www.npmjs.com/package/lync-wallet-sdk)

Install Wallet NPM Package: `npm i lync-wallet-sdk` and set up wallet integration as mentioned [here​](https://www.npmjs.com/package/lync-wallet-sdk)

Once done, We are ready to install LYNC Marketplace NPM Package.

Install NPM Package: `npm install @lync/marketplace`

**Step 1: Create a .env file to store your private keys**

Example .env file:REACT_APP_ALCHEMY_KEY=""

### Custom Hooks

- [​useAllCollectionNFT​](./useAllCollectionNFT.md)
- [​useAllBuyNFT​](./useAllBuyNFT.md)
- [​useAllOwnerNFT​](./useAllOwnerNFT.md)
- [​useNFTDetails​](./useNFTDetails.md)
- [​useAllNFTForRent​](./useAllNFTForRent.md)

### List of chains

- ChainConfig.MATIC_MUMBAI
- ChainConfig.ETH_GOERLI
- ChainConfig.ARB_GOERLI
