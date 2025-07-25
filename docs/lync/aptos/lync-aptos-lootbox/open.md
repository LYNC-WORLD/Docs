---
sidebar_label: "Opening a Lootbox"
id: opening-a-lootbox
custom_edit_url: null
---

# Opening a Lootbox

Once a lootbox is created, users (or others) can open the lootbox by pressing the 'Open Your Lootbox' button, revealing the randomized rewards.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/APTOS/lootbox/open/open.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Lootbox is ready to open</span>
</div>
<br/>

To open a lootbox, the user must be connected to the Aptos Lootbox platform using their [Petra Wallet](https://petra.app/). This ensures that the rewards from the lootbox will be deposited directly into their wallet after opening.

## Initiate the Opening

The user can see an **“Open Your Lootbox”** button on the open lootbox page. Upon clicking this button, the lootbox opening process is initiated, triggering the randomization of rewards inside the box.

## Random Reward Selection

- After initiating the opening, the Aptos Lootbox system in the background selects the rewards based on the user-defined parameters that were set during lootbox creation.
- If the lootbox contains DAs, the system will randomly select some NFTs (within the range defined during lootbox creation) and choose which specific NFTs from the deposited pool will be given as a reward.
- Similarly, for FAs (fungible assets), the system will select a random number of APTs from the specified range and choose how many APTs will be given to the user. The selection process is entirely random, ensuring each opening is unique and unpredictable.
- If the user receives NFTs, they will see the details of which specific NFTs have been awarded to them. Similarly, if the lootbox includes FTs (fungible tokens), the user will see how many tokens they’ve received and the type of token.
- After the rewards are revealed, the user must claim them to finalize the process and transfer the assets into their wallet. A “Claim” button will appear on the web page to claim the randomly selected rewards. Clicking this button initiates the final step of transferring the NFTs and FTs (fungible tokens) to the user’s Fuel Wallet.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/APTOS/lootbox/open/open-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Users can Claim the Randomly Selected Rewards After Opening the Lootbox</span>
</div>
<br/>

Once the user clicks the claim button, the rewards are automatically deposited into the connected Petra Wallet. The NFTs and APTs are directly transferred into the user’s connected wallet. The user can now view their claimed assets in their Petra Wallet immediately.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/APTOS/lootbox/open/open-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Claiming Rewards Requires Approval from User's Connected Wallet</span>
</div>
<br/>

> **Important Notes -**
>
> - Each lootbox can be opened and claimed once per wallet address until the lootbox is empty. Users can open the lootbox and claim rewards only once until the lootbox becomes empty.
> - Once the lootbox is opened and the random rewards are determined, there is no option to change or modify the outcome.
> - Even if a user opens a lootbox but decides not to claim the rewards, they cannot reopen the box to try again.
