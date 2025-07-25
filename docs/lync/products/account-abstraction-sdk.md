---
id: lync-account-abstraction-sdk
custom_edit_url: null
---

# LYNC Account Abstraction SDK

LYNC AA SDK is a no-code Unity SDK supporting PC (MacOS and Windows) and Mobile (Android and iOS). LYNC Unity Account Abstraction SDK, your solution to seamless gamer onboarding in Web3 Games! Enable effortless logins via socials, wallets, email, and more. Integrate swiftly into any game on Mac, Windows, Android, iOS, or browser. Simplify the gaming experience with LYNC AA SDK, connecting gamers effortlessly.

### Get your API Key

Please get your API key before downloading the SDK from [here](https://www.lync.world/form.html)

### Installation

Download the LYNC Account Abstraction SDK from [Here​](https://github.com/LYNC-WORLD/LYNC-Unity-AA/releases)

Example Project: https://github.com/LYNC-WORLD/LYNC-Unity-AA/tree/main/Assets/LYNC-AA-SDK

Import the SDK .unitypackage file to your project. or simply drag and drop .unitypackage file to your project.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/account-abstraction/account-abstraction.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets -> Import Package -> Custom Package</span>
</div>
<br/>

Once the Account Abstraction SDK package has finished importing into your Unity project, you can begin integrating it into your game.

The Folder structure looks like this

<div className="flex flex-col items-center">
    <img className="w-[50%]" src="/img/PRODUCTS/account-abstraction/account-abstraction-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]  ">SDK Folder Structure</span>
</div>
<br/>

### Integrating AA SDK in Unity

There are 3 Example Projects present in the SDK:

Assets -> LYNC-AA-SDK -> Example / Example-2 / Example-3

<div className="flex flex-col items-center">
    <img src="/img/PRODUCTS/account-abstraction/account-abstraction-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Example Projects</span>
</div>
<br/>

You can find the example scene in the folders. Simply pass the API key in lyncManager GameObject.

To test, Build and Run after adding this scene in (Scene in Build).

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/account-abstraction/account-abstraction-3.png"/>
    <span className="font-bold text-[rgb(192,192,192)]  ">Pass LYNC API Key​</span>
</div>
<br/>

## Setup the Project

To use LYNC Account Abstraction. Attach LYNC Manager Prefab(Assets/LYNC-AA-SDK/LYNC Manager. prefab), on the starting scene.

This will serve as the starting point for your project.

In LYNC Manager Prefab, be sure to provide the following details:

1. LYNC API Key ([The API Key can be generated from here](https://lync.world/form.html))
2. Choose chain
3. Choose Network (Testnet/ Mainnet)
4. Pass in the Dapp API Key ([The API key can be generated from the Biconomy Dashboard](https://dashboard.biconomy.io/))
5. Web3 Auth Client ID ([The API key can be generated from the Web3 Auth Dashboard](https://dashboard.web3auth.io/login))
6. Pass a deep link name (example: lync/gameName etc.)

### Integrating Login or Transaction Layer via Account Abstraction in Unity

## Login Flow

### No-Code Login Flow:

You can attach the Login Example Script in any scene where you want users to login, by dragging and dropping a Button as a Game Object.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/account-abstraction/account-abstraction-4.png"/>
    <span className="font-bold text-[rgb(192,192,192)]  ">Attach loginExample Script</span>
</div>
<br/>

### Login Flow with Code:

Login and Transactions can be done once the LyncReady action is triggered.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/account-abstraction/account-abstraction-5.png"/>
    <span className="font-bold text-[rgb(192,192,192)]  ">Assets -> LYNC-AA-SDK -> Example-2 -> loginExample.cs</span>
</div>
<br/>

The Sample Code for Login can be found at loginExample.cs, LoginTransactionExample.cs and ExampleLogin.cs

> **Make sure to Import LYNC.**

```cs
using LYNC;
using LYNC.Wallet;
```

**Example (Event Trigger):**

LYNC ready Should be a function which has an argument of type "LyncManager"

```cs
LyncManager.onLyncReady += LyncReady;

private void LyncReady(LyncManager Lync)
    {
        // Once LYNC is ready, you can do any steps like Login, Logout, Transactions etc.

        //To Login:
        Lync.WalletAuth.ConnectWallet((wallet) =>
        {
            addressTxt.text = "Wallet Address: " + wallet.publicAddress;
            loginDateTxt.text = "Login Date: " + wallet.loginDate.ToString();
            string smartAccountAddress = walletData.SmartAccount;
        });

        //To Logout:
        Lync.WalletAuth.Logout();
    }
```

**To Check if the user is logged in or not:**

```cs
WalletData walletData = WalletData.TryLoadSavedWallet();
if (walletData.WalletConnected){
    // User is already logged in
}
else{
    // Ask user to login
}
```

**To get the User's wallet address, if the user is logged in**

```cs
string EOAWalletAddress = walletData.PublicAddress
string SmartAccountAddress = walletData.SmartAccount
string EmailAddress=  walletData.Email;
string UserName = walletData.UserName;
string IdToken = walletData.IdToken;
```

**To Fetch from PlayerPrefs:**

```cs
string publicAddress = PlayerPrefs.GetString("_publicAddress");
string smartAccount = PlayerPrefs.GetString("_smartAccount");
string email = PlayerPrefs.GetString("_email");
string userName = PlayerPrefs.GetString("_userName");
string idToken = PlayerPrefs.GetString("_idToken");
```

**To Login directly:**

```cs
LyncManager.Instance.WalletAuth.ConnectWallet(loginUrl, (walletData) =>
{
    // Get all the user's wallet data from "walletData"
});
```

**To Logout directly:**

```cs
LyncManager.Instance.WalletAuth.Logout();
```

## Transaction Flow

There are two methods for proceeding with a transaction:

1. **Gasless Transaction -** Game Developer/ Game Studio will be sponsoring the transaction fee (Function Name: **SendTransaction**).
2. **User Paid Transaction-** The Gamer/ User will be responsible for paying the gas fee and cost if any, required to do the transaction (Function Name: **SendUserPaidTransaction**).

### Gasless Transaction

> **The limitation with gasless transaction is that, you can't have a cost required in the smart contract.**

To do transactions, TokenExample.cs and LoginTransactionExample.cs can be taken as a reference.

Pass in the Contract Address and Function Name Example: MintNFT(). MintNFT(unit256 id, unit256 amount)

Args are not compulsory parameters, but if the function accepts any argument, make sure to pass them.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/account-abstraction/account-abstraction-6.png"/>
    <span className="font-bold text-[rgb(192,192,192)]  ">Token Transactions</span>
</div>
<br/>

To do it from the script:

```cs
LyncManager.Instance.blockchainMiddleware.SendTransaction(contractAddress, functionName, args, onSuccess,onError);
```

onSuccess: Once the transactions are completed, this handles what to do.

onError: If the transactions failed, this handles what to do.

### Setup Gasless Transactions with Biconomy

To enable gasless transactions via Biconomy, Register a new paymaster on the [Biconomy Dashboard](https://dashboard.biconomy.io/#).

Make sure you select the version: 1.0.1

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/account-abstraction/account-abstraction-7.png"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]  ">Token Transactions</span> -->
</div>
<br/>

Once done, Get the API Key and Pass it to the [LYNC Manager](#setup-the-project).

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/account-abstraction/account-abstraction-8.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]  ">Biconomy API Key</span>
</div>
<br/>

Setup the gas tank, in Policies create a new one and pass the contract address

<div className="flex flex-col items-center">
    <img className="w-[50%]" src="/img/PRODUCTS/account-abstraction/account-abstraction-9.png"/>
    <span className="font-bold text-[rgb(192,192,192)]  ">Contract Address setup</span>
</div>
<br/>
That's it, now you can do the gasless transaction on this contract address passing in the LYNC AA SDK.

## User Paid Transaction

**This will require gamers/ users to have some funds in their wallet on the chain you are using. There are two ways, You can ask users to send some tokens to this smart account or use LYNC on-ramp/ off-ramp for gamers allowing them to add funds via credit/ debit card, Apple Pay, Google Pay etc.**

User Paid Transactions are similar to Gasless transactions to use, there is only one more parameter required to send is cost in ethers (ex. 0.1).

```cs
LYNC.LyncManager.Instance.blockchainMiddleware.SendUserPaidTransaction(contractAddress, functionName, arguments,cost, On721TrxCompleted, onError);
```

You can see the **Assets/LYNC-AA-SDK/Example-2/TransactionExample.cs** example script as a reference.

### Some common bugs and their resolutions

**Problem:** Newtonsoft JSON is missing.

**Solution:** Please, Add this as a git URL in adding package

```cs
com.unity.nuget.newtonsoft-json
```

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/account-abstraction/account-abstraction-10.avif"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]  ">Contract Address setup</span> -->
</div>
<br/>
