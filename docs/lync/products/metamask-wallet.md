---
sidebar_label: "Metamask Wallet"
id: metamask-wallet
custom_edit_url: null
---

# Metamask Wallet

LYNC Metamask Wallet SDK is a one-stop solution for game developers to easily integrate Metamask into their game engine and deploy their game on multiple networks with just a few clicks. This SDK allows game developers to monitor gamers’ data via LYNC analytics system and update the SDK without leaving the game engine.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Integrate Metamask wallet inside any game using LYNC SDK</span>
</div>
<br/>

### Get Your API Key

Please get your API key before downloading the SDK from here

### Installation

Download the LYNC - Metamask Wallet SDK from here

Example Project- https://github.com/LYNC-WORLD/Metamask-Unity-WebGL-SDK

Import the SDK .unitypackage file to your project. or simply drag and drop .unitypackage file to your project.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets -> Import Package -> Custom Package</span>
</div>
<br/>

Once the Metamask Wallet SDK package has finished importing into your Unity project, you can begin integrating it into your game. To do this, open the ConnectWallet scene provided by the LYNC - Metamask SDK.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets ->LYNC-Metamask-SDK -> Scenes</span>
</div>
<br/>

### Choose blockchain network

:::info

If you haven't generated an API Key, please check [Get Your API Key](#get-your-api-key)
::::

After opening **ConnectWallet** scene, Go to **Interface**. In the "Inspector" window, go to the API key & Enter the **API key.**

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-3.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Enter the API key</span>
</div>
<br/>

To choose the blockchain network, simply go to the CurrentChain drop-down menu and pick the network of your preference to deploy your game on.

<div className="flex flex-col items-center">
    <img className="w-[60%]" src="/img/PRODUCTS/metamask-wallet/metamask-4.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Interface -> CurrentChain -> Choose Your Chain</span>
</div>
<br/>

### Integrating the Transaction Layer

The Transactions are divided into 2 parts:

1. No Code Transactions
2. Modular Transactions

Note: Make sure to have "TransactionManager.cs" in your scene.

**No-code Transaction**
Check the No-Code-Transaction Scene in the Scenes folder.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-5.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">No Code Transaction Scene</span>
</div>
<br/>

Check the No-Code TransactionExample GameObject, you can just pass in a few parameters to write on any custom contract inside the game.

Just pass the following parameters:

1. Contract Address - Type any contract address on the chain you selected in the LYNCInterface GameObject.
2. ABI - You can get the contract ABI of a verified contract on the explorer.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-6.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Copy ABI from explorer</span>
</div>
<br/>

3. Function Name - Write the exact function name from the contract
4. Cost - The cost required to do the transaction, if it's free you can pass 0 else pass the value in wei.
5. Arguments - The arguments required by the transaction, are left blank if none.

**Modular Transactions**
Check the No-Code-Transaction Scene in the Scenes folder.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-7.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Transaction Scene</span>
</div>
<br/>

Check the TransactionExample GameObject, it has a TransactionExample.cs file attached.
This example contains 3 types of transaction transactions, ERC-721, ERC-1155 and ERC-20.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-8.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets/LYNC-Metamask-SDK/Scripts/TransactionExample.cs</span>
</div>
<br/>

In this example:

1. send20Trx is a button to disable the button click once the transaction is initiated.
2. contractAddress - is the contract address for a custom transaction. (In this case, it's an ERC-20 contract address on Mumbai Testnet)
3. ABI - You can get the contract ABI of a verified contract on the explorer.
4. functionName - Write the exact function name from the contract (In this case, sendToken)
5. cost - The cost required to do the transaction, if it's free you can pass 0 else pass the value in wei. (In this case, as the function is not payable the value is 0).
6. ParametersOfFunctions - You can pass in the arguments required for the transaction. (In this example, the argument is how much amount you want to send, 10000000000000000 is the value in wei, i.e 0.01 eth. You can pass n number of arguments separated with a comma( , ) ).
7. args - Converts compatible to be a JSON
8. Sending transaction -

   ```cs

   TransactionManager.Instance.SendTransaction(LoadingScreen, contractAddress, ABI, functionName, args, cost, On20TrxCompleted, On20TrxFailed);

   The above example explains a requirement for doing transactions.

   You can use the "TransactionManager.Instance.SendTransaction()" to send transactions from anywhere in the project, make sure to add the TransactionManager.cs file in the scene.
   ```

It takes a LoadingScreen GameObject, contractAddress, ABI, functionName, args, and cost, as explained above and 2 more functions of type "System.Action&lt;string&gt;".

These are not compulsory functions but they handle the Transaction Success or Failure.

**On20TrxCompleted -** Handles once the transaction is completed. (It returns a transaction hash).

**On20TrxFailed -** Handles if the transaction failed. (It returns a reason for transaction failure).

## Integrating Connet Wallet scene into the build

To deploy your Unity project, it's necessary to set up the Player Settings in Unity. Follow these steps to select the LYNC WebGL template.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-9.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">File -> Build Settings</span>
</div>
<br/>

In the "**Build Settings**" window, place ConnectWallet and FetchWallet at the top of this section.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-10.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Add ConnectWallet & FetchWallet Scene to the top of Scenes in Build</span>
</div>
<br/>

Go to "**Player Settings**" and navigate to "**Resolution and Presentation**". **Select LYNC - Template** in WebGL Template

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-11.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Player Settings -> Resolution and Presentation -> Select LYNC - Template</span>
</div>
<br/>

After completing all the necessary steps and configuring the Player Settings with the LYNC WebGL template, you can now build and run your game.

- To do this, go to "**File**" on the top menu bar in the Unity editor and select "**Build and Run.**"

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-12.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Build and Run </span>
</div>
<br/>

Congratulation, you have successfully integrated the Metamask wallet with your favourite blockchain network using LYNC SDK.

NOTE: If you wish to use wallet address inside game after user's wallet is connected, use:

```cs
PlayerPrefs.GetString("WalletAddress");
```

If you face any error, while Build and Run.

PLEASE ADD, Unity package install by git link

```cs
com.unity.nuget.newtonsoft-json
```

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/metamask-wallet/metamask-13.png"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]">Build and Run </span> -->
</div>
<br/>
