---
sidebar_label: "LYNC Metamask PC SDK"
id: lync-metamask-pc-sdk
custom_edit_url: null
---

# LYNC Metamask PC SDK

LYNC Metamask Wallet SDK is a one-stop solution for game developers to easily integrate Metamask into their game engine and deploy their game on multiple networks with just a few clicks. This SDK allows game developers to monitor gamers’ data via LYNC analytics system and update the SDK without leaving the game engine.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-sdk/metamask-sdk.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Integrate Metamask wallet inside any game using LYNC SDK</span>
</div>
<br/>

### Get Your API Key

Please get your API key before downloading the SDK from [here](https://dashboard.lync.world/auth/login)

### Installation

Download the LYNC - Metamask Wallet SDK from [here](https://github.com/LYNC-WORLD/Metamask-Unity-PC-SDK/releases)

Example Project- https://github.com/LYNC-WORLD/Metamask-Unity-PC-SDK

Import the SDK .unitypackage file to your project. or simply drag and drop .unitypackage file to your project.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-sdk/metamask-sdk-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets -> Import Package -> Custom Package</span>
</div>
<br/>

Once the Metamask PC SDK package has finished importing into your Unity project, you can begin integrating it into your game. To do this, open the Metamask scene provided by the LYNC - Metamask SDK.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-sdk/metamask-sdk-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets ->LYNC -> Metamask</span>
</div>
<br/>

### Choose blockchain network

:::info

If you haven't generated an API Key, please check [Get Your API Key](#get-your-api-key)
::::

After opening **Metamask** scene, Go to **LYNC Manager**. In the "Inspector" window, go to the API key & Enter the **API key**.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-sdk/metamask-sdk-3.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Enter the API key</span>
</div>
<br/>

To choose the blockchain network, simply go to the **Network** drop-down menu and pick the network of your preference to deploy your game on.

<div className="flex flex-col items-center">
    <img className="w-[70%]" src="/img/PRODUCTS/metamask-sdk/metamask-sdk-4.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">LYNC Manager -> Network</span>
</div>
<br/>

## Integrating the Transaction Layer

The Transactions are divided into 2 parts:

1. No Code Transactions
2. Modular Transactions

**No-code Transaction**

<div className="flex flex-col items-center">
    <img className="w-[70%]" src="/img/PRODUCTS/metamask-sdk/metamask-sdk-5.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">LYNC Intigration Example</span>
</div>
<br/>

Check the **LYNCIntigrationExample** GameObject, you can just pass in a few parameters to write on any custom contract inside the game.

Just pass the following parameters:

1. Contract Address - Type any contract address on the chain you selected in the LYNCInterface GameObject.
2. ABI - You can get the contract ABI of a verified contract on the explorer.

<div className="flex flex-col items-center">
    <img className="w-[70%]" src="/img/PRODUCTS/metamask-sdk/metamask-sdk-6.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Copy ABI from explorer</span>
</div>
<br/>

3. Function Name - Write the exact function name from the contract
4. Arguments - The arguments required by the transaction, are left blank if none.

**Modular Transactions**

Check the TransactionExample GameObject, it has a TransactionExample.cs file attached.
This example contains 3 types of transaction transactions, ERC-721, ERC-1155 and ERC-20.

<div className="flex flex-col items-center">
    <img className="w-[70%]" src="/img/PRODUCTS/metamask-sdk/metamask-sdk-7.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Example Code</span>
</div>
<br/>

In this example:

1. contractAddress - is the contract address for a custom transaction. [(In this case, it's a Sepolia contract address on Ethereum Testnet)](https://sepolia.etherscan.io/address/0x79107ad6bd949bd955640fc1c861a2d2909e2bbd)
2. ABI - [You can get the ABI from Contract(Code)](https://sepolia.etherscan.io/address/0x79107ad6bd949bd955640fc1c861a2d2909e2bbd#code)
3. functionName - Write the exact function name from the contract [(In this case, sendToken)](https://sepolia.etherscan.io/address/0x79107ad6bd949bd955640fc1c861a2d2909e2bbd#writeContract)
4. cost - The cost required to do the transaction, if it's free you can pass 0 else pass the value in wei. (In this case, as the function is not payable the value is 0).
5. ParametersOfFunctions - You can pass in the arguments required for the transaction. (In this example, the argument is how much amount you want to send, [1000 is the value in wei, i.e 0.000000000000001 eth](https://eth-converter.com/). You can pass n number of arguments separated with a comma( , ) ).
6. args - Converts compatible to be a JSON

Congratulation, you have successfully integrated the Metamask wallet with your favourite blockchain network using LYNC SDK.

NOTE: If you wish to use wallet address inside game after user's wallet is connected, use:

```cs
PlayerPrefs.GetString("WalletAddress");
```

If you face any error in ABI, then open in JSON Format and select result as ABI.

<div className="flex flex-col items-center">
    <img className="w-[70%]" src="/img/PRODUCTS/metamask-sdk/metamask-sdk-8.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Open in JSON Format</span>
</div>
<br/>

<div className="flex flex-col items-center">
    <img className="w-[70%]" src="/img/PRODUCTS/metamask-sdk/metamask-sdk-9.avif"/>
    
</div>
<br/>
