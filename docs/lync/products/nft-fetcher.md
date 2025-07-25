---
sidebar_label: "NFT Fetcher"
id: nft-fetcher
custom_edit_url: null
---

# NFT Fetcher

<span className="text-lg text-[rgb(192,192,192)]">Fetch NFTs directly from wallet.</span>

## Introduction

NFT Fetcher is a tool that allows developers to easily integrate NFT (Non-Fungible Tokens) into game engines like Unity and Unreal. With just a few clicks, developers can fetch NFT from specific chains and contracts and integrate them into their game.

## Integration with Game Engines

NFT Fetcher can be integrated into Unity and Unreal game engines with ease. Simply download the SDK from the NFT Fetcher website and import it into the engine by dragging and dropping the files.

## Fetching NFT

NFT Fetcher allows developers to fetch NFT from specific chains and contracts. To do this, developers must choose the chain and contract address they want to fetch NFT from. Developers can also enter the contract address to fetch all NFTs from a specific contract or get NFTs from a wallet of a contract address.

## Steps to Integrate NFT Fetcher:

- Download the SDK from the NFT Fetcher from LYNC World
- Import the SDK into Unity or Unreal by dragging and dropping the files.
- Choose the chain, List of supported chains are:
  - Ethereum
  - Goerli
  - Polygon
  - Mumbai
  - Arbitrum Mainnet
  - Arbitrum Goerli
  - Optimism Mainnet
  - Optimism Goerli

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/nft-fetcher/nft-fetcher.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Choose chain</span>
</div>
<br/>

- Pass the Contract Address on the selected chain. It will start fetching all the NFTs of that contract address.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/nft-fetcher/nft-fetcher-1.avif"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]">Choose chain</span> -->
</div>
<br/>

- If you want gamers to fetch their NFTs from the wallet address, mark "Show User NFTS" as True (Mark Tick).

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/nft-fetcher/nft-fetcher-2.png"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]">Choose chain</span> -->
</div>
<br/>

- For testing in Unity Editor, Pass Wallet Address and NFTs will start showing.
- If you wish to see logs, enable Debug Logs as True (Mark Tick).
