---
sidebar_label: "Initial Supply Locking and Unlocking"
id: initial-supply-locking-and-unlocking
custom_edit_url: null
---

# Initial Supply Locking and Unlocking

The Meme token creation using [mew.gg](https://mew.gg) empowers you to launch your custom meme tokens directly on the Saga blockchain, with full control over supply, identity, and tokenomics.

## Initial Supply Locking

When creating a meme token using Mew.gg, users can define the initial locked supply, which is a portion of the total supply that will be made immediately available upon token creation. You can learn more about locking the initial token supply when creating a meme token from [here](/create-token#lock-initial-token-supply).

<div className="flex flex-col items-center">
    <img src="/img/lock-initial-token-supply.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Users can lock the amount of tokens initially available for trade</span>
</div>
<br></br>

The initial token supply locking mechanism lets you control the supply of the token you created, and gives you full control over unlocking the complete supply, encouraging strategic tokenomics. Once the token is deployed, creators retain the flexibility to unlock the full supply of the token at any time, granting them access to the remaining tokens beyond the initially locked amount.

<div className="flex flex-col items-center">
    <img src="/img/current-unlock-supply.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Users can find the current unlocked supply of a token below the bonding curve</span>
</div>
<br></br>

## Token supply exhaustion

In case a meme token’s current unlocked supply reaches 0 before the bonding curve has reached 100%, it indicates that the remaining tokens are still locked by the token creator and unavailable for trade. This occurs when all the current unlocked supply of the token has been bought, but the token creator has yet to unlock the remainder of the maximum 800 million token supply.

<div className="flex flex-col items-center">
    <img src="/img/current-unlock-supply-empty.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Current unlocked supply will be 0 when all the current unlocked supply of the token has been bought</span>
</div>
<br></br>

# Trade suspension

When a meme token’s current unlocked supply is exhausted, the platform will automatically suspend trading of that specific token to prevent failed transactions or confusion. Users will receive a clear notification that the token’s supply is currently locked, and trading has been temporarily halted until more tokens are made available.

<div className="flex flex-col items-center">
    <img src="/img/supply-locked.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Trade will be suspended when the current unlocked supply is exhausted</span>
</div>
<br></br>

Although trading is paused, users can still express interest in the token by liking the token. This shows continued support or demand for the locked token, even while trading is restricted.

## Unlocking the complete supply of the token

To restart the trading of the token, the creator of the token must manually unlock the remaining supply. To unlock the remaining supply of the token, the creator of the token can locate the "UNLOCK SUPPLY" button on the token details page. The "UNLOCK SUPPLY" button will be available for the token creator once the current unlocked supply reaches 0, but the token is still not bonded. The creator of the token can find the "UNLOCK SUPPLY" button on the right side of the token details page, in the section where the bonding details and current unlocked supply are displayed.

<div className="flex flex-col items-center">
    <img src="/img/unlock-supply-button.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">The "UNLOCK SUPPLY" button</span>
</div>
<br></br>

The option to unlock the remaining supply of the token is exclusively available to the creator of the token. The creator of the token can click on the "UNLOCK SUPPLY" button to initialize the unlocking process. Once the unlock transaction is confirmed on the Saga blockchain, trading will resume automatically, and users will be able to buy and sell the token again in real-time.

<div className="flex flex-col items-center">
    <img src="/img/remaining-supply-unlocked.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Trading resumes once the remaining supply is unlocked by the token creator</span>
</div>
<br></br>

Unlocking the supply is a permanent and irreversible action. Once the supply is unlocked, the remaining tokens will be made available for trading, allowing users to resume buying and selling the token freely.
