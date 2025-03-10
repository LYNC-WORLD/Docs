---
sidebar_label: 'EVM Lootbox SDK'
id: evm-lootbox-sdk
custom_edit_url: null
---

# EVM Lootbox SDK

The **LYNC Lootbox SDK** introduces an exciting and engaging way for users to receive rewards through lootboxes, sparking anticipation for what they’ll unlock next. Perfect for scenarios like **Token Generation Events (TGE)**, token distribution, or community rewards, lootboxes can gamify and enhance user experience, driving participation and excitement. Developers can easily integrate these blockchain-powered lootboxes into their games, offering transparency, security, and fun while maintaining control over reward distribution mechanics.

## Demo Application:

<div className="flex items-center flex-col">

    <a href="https://lootbox-evm.lync.world/" target="_blank" className="mb-5 w-full border-[0.5px] hover:border-[rgb(135,135,135)] cursor-pointer border-[rgb(91,91,91)] border-solid rounded-[.25rem] flex items-center justify-between px-5 py-2">
        <div className="flex items-center gap-4">
            <img className="w-10" src="/img/lync-logo.png" alt="" />

            <span className="mt-1">Lync Solidity Lootbox Demo</span>
        </div>

        <div>
            <img className="w-3 mt-2" src="/img/arrow.svg" alt="" />
        </div>
    </a>

    <span className="text-sm text-[rgb(192,192,192)]">Demo Lootbox application on EVM</span>

</div>

## View Code on GitHub

<div href="https://lootbox-evm.lync.world/" target="_blank" className="mb-5 w-full border-[0.5px] hover:border-[rgb(135,135,135)] cursor-pointer border-[rgb(91,91,91)] border-solid rounded-[.25rem] flex items-center justify-between px-5 py-2">
    <div className="flex items-center gap-4">
        <img className="w-10" src="/img/lync-logo.png" alt="" />

        <span className="mt-1">https://github.com/LYNC-WORLD/lootbox-evm-sdk</span>
    </div>

    <div>
        <img className="w-3 mt-2" src="/img/arrow.svg" alt="" />
    </div>
</div>

## On Chain Lootboxes
**On-chain loot boxes** are a new, blockchain-based version of these virtual mystery boxes. Unlike traditional loot boxes, where the process of distributing rewards is often hidden or controlled by game developers, on-chain loot boxes use blockchain technology and smart contracts to manage every step of the process in a decentralized and transparent way. This means that the rules and procedures governing how rewards are distributed are openly visible and verifiable by anyone. The use of blockchain ensures that no one can tamper with or manipulate the outcome, providing players with a fair and trustworthy experience. This level of transparency sets on-chain loot boxes apart from their traditional counterparts by addressing concerns over fairness and encouraging player confidence.

## Randomization and Its Importance
**Randomization** is the process that ensures each reward within a loot box is distributed in an unpredictable and unbiased way. It's a key component in creating and managing loot boxes because it directly impacts the player experience and the perceived fairness of the system. The excitement of opening a loot box comes from the uncertainty of what it might contain, which is made possible by effective randomization. Randomization is crucial for creating and managing loot boxes because:


* **It Enhances Player Experience:** The unpredictable nature of rewards makes opening loot boxes exciting and engaging for players.
* **It Ensures Fairness:** Proper randomization means every player has an equal chance of winning any given reward, preventing favoritism or manipulation.
* **Builds Trust in the System:** When players know that the randomization is genuinely fair and transparent, they are more likely to engage with the game and its loot boxes.

## LYNC's Lootbox SDK

The Loobox SDK on EVM, designed to streamline the integration of Looboxes to your games and other web applications on EVM chains for users. With this SDK, developers can easily integrate Lootbox functionality into their games and applications, allowing users to open and claim rewards in the form of NFTs and tokens. Our SDK provides a simple yet powerful solution for developers looking to enhance their games and applications with the integration of loot boxes, ensuring a smooth and hassle-free user experience. With just a few lines of code, developers can unlock the full potential of randomness and EVM transactions, enabling users to easily interact with their applications.

## What is inside a Lootbox

Our on-chain loot boxes are filled with a mix of **ERC721 NFTs, ERC1155 NFTs, and ERC20 tokens**, making every opening a unique and exciting experience. The contents of these boxes are chosen using a randomization method known as the **Verifiable Random Function (VRF)**, which is an on-chain mechanism that ensures complete fairness and transparency in selecting rewards.

**ERC721 NFTs** represent unique, one-of-a-kind digital rewards that players can receive when they open a loot box. Each ERC721 token could be an exclusive in-game item like a rare skin, a powerful weapon, a special character, or any other unique asset that enhances the gameplay experience. Because ERC721 tokens are non-fungible, each one has its distinct value and properties, making them highly desirable to players who want something unique and collectible. The use of ERC721 NFTs in loot boxes adds excitement and value by offering players the chance to obtain rare, verifiable items that are truly theirs, which they can use, trade, or sell on the blockchain.

**ERC1155** is a versatile token standard on the Ethereum blockchain that allows for the creation of both fungible (identical and interchangeable) and non-fungible (unique) tokens within a single smart contract, making it ideal for loot boxes in games. When used in loot boxes, ERC1155 enables developers to include a variety of items, such as multiple copies of a common in-game currency, resources, or potions (fungible tokens), alongside rare, unique items like exclusive skins or limited-edition weapons (non-fungible tokens). This flexibility allows for a dynamic range of rewards within a single loot box, offering players a richer and more varied experience. Additionally, ERC1155 is more efficient than previous standards, reducing transaction costs and network congestion, which is especially valuable when handling multiple items in a loot box simultaneously

**ERC20 tokens** are digital currencies that can be used within the game’s ecosystem. Players can earn these tokens through loot boxes and use them for in-game purchases, to unlock new levels, or trade them with other players. Because ERC20 tokens are compatible with external marketplaces, they offer players a way to exchange their in-game rewards for other digital assets or even real-world currency.

By including these different types of NFTs and tokens, our loot boxes provide a richer and more dynamic experience. Players know they have the chance to win not just any in-game item, but a verifiable, blockchain-based asset that could have substantial value outside the game as well. The use of the **VRF (Verifiable Random Function)** ensures that every time a loot box is opened, the reward selection process is genuinely random and unbiased, enhancing trust and fairness in the reward system.

> Note - The current SDK version supports only **Eth Sepolia** and **Base Sepolia** testnets. But we will be coming with more EVM chains soon.
