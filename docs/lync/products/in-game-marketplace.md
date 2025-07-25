---
sidebar_label: "LYNC In-Game Marketplace SDK"
id: lync-in-game-marketplace-sdk
custom_edit_url: null
---

# LYNC In-Game Marketplace SDK

<span className="text-lg text-[rgb(192,192,192)]">Integrate in-game Marketplace into game engine</span>

The in-game marketplace SDK enables developers to integrate a blockchain-based marketplace into their games, allowing players to perform transactions using NFT-based in-game assets. Key features include:

1. Decentralized profile management.
2. Buy, sell, rent, and lend NFTs.
3. NFT minting for free.
4. Cross-chain swaps.
5. Cross-chain rent/lend.
6. On-Ramp / Off-ramp Integration

By incorporating this SDK, developers can enhance player engagement, create monetization opportunities, and foster a strong player community.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/in-game-marketplace/in-game-marketplace.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">LYNC MARKETPLACE SDK</span>
</div>
<br/>

### Steps to Integrate Marketplace in Games:

**Note**: Make sure to Integrate any wallet SDK provided by LYNC.

Download the LYNC - Marketplace Wallet SDK

Import the SDK .unitypackage file to your project. or simply drag and drop .unitypackage file to your project.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/in-game-marketplace/in-game-marketplace-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Import LYNC Marketplace SDK</span>
</div>
<br/>

Once the Marketplace Wallet SDK package has finished importing into your Unity project, you can begin integrating it into your game. To do this, open the **Marketplace** scene provided by the LYNC.

**Path : Assets ->LYNC-Marketplace -> Scenes**

After opening the **Marketplace** scene, Go to **Marketplace** GameObject. In the "Inspector" window, go to the **Contract Address** and enter the Contract Address of your in-game assets which are listed as NFT.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/in-game-marketplace/in-game-marketplace-2.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Enter contract address</span>
</div>
<br/>

Once you have entered the Contract Address, the chain id is getting fetched directly by Interface from the wallet Integration Screen.

Once the contract address is added, if you play the Unity game. It will start fetching all the NFTs by this contract address.

**Listing In-Game Assets on the In-Game Marketplace:**

Players can list their in-game assets on either sell or lend in just one click.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/in-game-marketplace/in-game-marketplace-3.avif"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]">Enter contract address</span> -->
</div>
<br/>

1. Navigate to the 'Inventory' section to access your owned NFTs.
2. Choose the desired NFT from your inventory' owned NFT Section.
3. Input a price for the asset.
4. Click the 'Sell' button to initiate the listing process.
5. Complete the first wallet transaction to approve your token.
6. Finalize the second transaction to successfully list your item on the marketplace.

**_Voila! You've just listed your item for sale._**

Similarly, players can easily list their in-game assets for lending with just a few clicks:

1. Go to the 'Inventory' section to view your owned NFTs.
2. Select the NFT you wish to lend from your inventory's 'Owned NFT' section.
3. Set a daily rental price for the asset.
4. Specify the maximum duration for which the asset can be rented.
5. Complete the transaction to list your token for lending.

**_And there you have it! You've successfully listed your item for rent._**

Additionally, our in-game marketplace SDK allows cross-chain token swaps, enabling players to exchange tokens seamlessly within the game environment, without worrying about any complexities.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/in-game-marketplace/in-game-marketplace-4.avif"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]">Enter contract address</span> -->
</div>
<br/>

**In-Game Claimer Page**

LYNC Marketplace SDK allows gamers to mint in-game assets as NFT from the game itself, gamers can bring their contract address from any chain and the claimer page can be used by the gamers.

If you want to deploy in-game assets as NFTs, Loot boxes, gasless NFT mint, or even dynamic NFTs. This can be done via LYNC NFT Deployer.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/in-game-marketplace/in-game-marketplace-5.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Claim/Mint NFTs in game</span>
</div>
<br/>
