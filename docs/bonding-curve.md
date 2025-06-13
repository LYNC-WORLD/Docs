---
sidebar_label: "Bonding Curve"
id: bonding-curve
custom_edit_url: null
---

# Bonding Curve

Every token created on [Pump Solana](https://solana-launchpad-opal.vercel.app/) has a fixed total supply of 1 billion. Out of which a maximum of 800 million are put on sale on the platform, and the other 200 million are locked. The purpose of selling 800 million tokens is to raise 40 SOL, which will later be used to give real-world value to your token.
Bonding Curve is a mathematical concept that defines the relationship between the price and supply of a token. Unlike traditional cryptocurrencies or meme coins, where prices are often volatile and set by external market forces, bonding curves use mathematical formulas to determine token prices in a structured and transparent manner.

As more and more tokens are bought, the price of the token goes up, and more SOL is deposited in the bonding curve.

Once the bonding curve is completed (i.e., filled with 40 SOL), the tokens are said to be bonded, and they can be put on the [Meteora](https://www.meteora.ag/) with the liquidity that has been raised and the remaining 200 million tokens (out of 1 billion). Now the token is tradable on the [Meteora](https://www.meteora.ag/) on the Solana blockchain. This gives the token some real-world value.

<div className="flex flex-col items-center">
    <img src="/img/bonding-curve.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">A typical bonding curve of a token on Pump Solana</span>
</div>
<br></br>

You can track the progress of the bonding curve of any token on [Pump Solana](https://solana-launchpad-opal.vercel.app/) on the token details page. The bonding curve shows the percentage that is filled at the moment. Underneath that, you can also see how much SOL is in the bonding curve and how many tokens are available for sale.

> NOTE -
>
> The bonding curve will go up as more and more tokens are bought, and it goes down as more and more tokens are sold.

## Bonding curve math

The bonding curve on [Pump Solana](https://solana-launchpad-opal.vercel.app/) works similarly to many popular automated market makers (AMMs) like Uniswap, [Meteora](https://www.meteora.ag/), etc., based on the constant product formula.

<div className="h-full w-full cursor-pointer rounded-[.25rem] flex items-center justify-center text-2xl italic font-bold font-sans text-[#FF70D9]">
X × Y = K
</div>

## Constant product formula

Where -

- x is the amount of tokens in the bonding curve (initially 1 billion)
- y is the amount of SOL raised in the bonding curve
- k is a constant.
