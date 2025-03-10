---
sidebar_label: 'LYNC Unity SUPRA SDK'
id: supra-unity-sdk
custom_edit_url: null
---

# LYNC Unity SUPRA SDK

SUPRA Unity SDK is a no-code Modular Unity SDK supporting PC (MacOS and Windows), Mobile (IOS and Android) and WebGL on SUPRA Blockchain.

**Platform Supported**: PC (Windows and MacOs) and Mobile (Android and iOS)

**Network Supported**: SUPRA Testnet and Mainnet

This release includes the following:

* Social Logins
* StarKey wallet login
* Custom Transactions in Social Login and Web3 Wallet like Pontem
* Paymaster inbuilt to sponsor transactions for your users.

### Get your API Key

Please get your API key before downloading the SDK from [here](https://www.lync.world/form.html)

### Installation
Download the LYNC Unity SUPRA SDK from [Here​](https://github.com/LYNC-WORLD/LYNC-Supra-Unity-SDK/releases)

Example Project: https://github.com/LYNC-WORLD/LYNC-Supra-Unity-SDK

Import the SDK .unitypackage file to your project. or simply drag and drop .unitypackage file to your project.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/SUPRA/unity-sdk/unity-sdk.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets -> Import Package -> Custom Package</span>
</div>
<br/>

Once the LYNC SUPRA SDK package has finished importing into your Unity project, you can begin integrating it into your game.

The Folder structure looks like this

<div className="flex flex-col items-center">
    <img className="w-[50%]" src="/img/SUPRA/unity-sdk/unity-sdk-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">SDK Folder Structure</span>
</div>
<br/>


### Integrating LYNC SUPRA SDK in Unity
There is 1 Example Projects present in the SDK: 

Assets/LYNC-SUPRA-SDK/SUPRA/SUPRAExample.unity

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/SUPRA/unity-sdk/unity-sdk-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Example Projects</span>
</div>
<br/>

You can find the example scene in the folders. Simply pass the API key in LyncManager GameObject.

To test, Build and Run after adding this scene in (Scene in Build).

<div className="flex flex-col items-center">
    <img className="w-[70%]" src="/img/SUPRA/unity-sdk/unity-sdk-3.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Pass LYNC API Key​</span>
</div>
<br/>

## Setup the Project

To use LYNC SUPRA SDK. Attach LYNC Manager Prefab(Assets/LYNC-SUPRA-SDK/LYNC Manager.prefab), on the starting scene.

This will serve as the starting point for your project. In LYNC Manager Prefab, be sure to provide the following details:

1. LYNC API Key [(The API Key can be generated from here)](https://lync.world/form.html)
2. Choose Network -> Testnet
3. Sponsor Transactions -> If you want to sponsor transactions for users (To setup Paymaster go to [LYNC Dashboard](https://dashboard.lync.world/auth/login))
4. Login Options -> Allowing users to choose which login method to login from
5. Pass a deep link name (example: lyncaptos/gameName etc.)


### Integrating Login or Transaction Layer via LYNC SUPRA SDK in Unity

The Sample Code for Login can be found at SUPRAExample.cs.

> **Make sure to Import LYNC.**

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
            OnWalletConnected(wallet);
        });
        
        //To Logout:
        Lync.WalletAuth.Logout();
        
    }
```

**To Check if the user is logged in or not:**

```cs
using LYNC;

private AuthBase authBase;

    authBase = await AuthBase.LoadSavedAuth();
        if (authBase.WalletConnected)
        {
            // User is Already Login
            OnWalletConnected(authBase);
        }
        else{
             // Ask user to login
        }
```



**To Login directly:**

```cs
LyncManager.Instance.WalletAuth.ConnectWallet((wallet) =>
        {
                publicAddress.text = _authBase.PublicAddress; //Get Wallet Address
        });
```

**To Logout directly:**

```cs
LyncManager.Instance.WalletAuth.Logout(); 
```

## Transaction Flow 
There are two methods for proceeding with a transaction:

1. **Gasless Transaction -** Game Developer/ Game Studio will be sponsoring the transaction fee.

2. **User Paid Transaction-** The Gamer/ User will be responsible for paying the gas fee and cost if any, required to do the transaction.

### Gasless Transaction

To Enable Gasless Transactions or to Sponsor Transactions for your users, 
Set Sponsor Transactions as true, go to [LYNC Dashboard](https://dashboard.lync.world/) to setup the paymaster. 


To do transactions, APTOSExample.cs can be taken as a reference.

Pass in the Contract Address, Contract Name, Function Name and Network.

Arguments are not compulsory parameters, but if the function accepts any argument, make sure to pass them.

<div className="flex flex-col items-center">
    <img className="w-[70%]" src="/img/SUPRA/unity-sdk/unity-sdk-4.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Transaction Objects​</span>
</div>
<br/>

```cs
TransactionResult txResult = await LyncManager.Instance.TransactionsManager.SendTransaction(transaction);
```

You can create a public Transaction Object, pass in the parameters and hit the function call where you want to do the transactions

```cs
public Transaction transaction;

TransactionResult txData = await LyncManager.Instance.TransactionsManager.SendTransaction(transaction);

if (txData.success)
    SuccessfulTransaction(txData.hash, "MINT");
else
    ErrorTransaction(txData.error);

```
Or You can create a Transaction Object, 

```cs
public Transaction mintTxn;

//LyncManager.Instance.TransactionsManager.SendTransaction( new Transaction(ContractAddress, ContractName, FunctionName,ListOfArguments));

TransactionResult txData = await LyncManager.Instance.TransactionsManager.SendTransaction(
new Transaction("0x1b89ab160c9ec18b5ee37f6d2774b5e8a9433c620a98bad062b6b738bd829316","tst_unity","set_data_bytes",arguments));

if (txData.success)
    SuccessfulTransaction(txData.hash, "MINT");
else
    ErrorTransaction(txData.error);

```

List of Arguments:

```cs
//List<TransactionArgument>{
//    new TransactionArgument{ argument = value, type = ARGUMENT_TYPE.STRING }
//};

List<TransactionArgument> arguments = new List<TransactionArgument>{
    new TransactionArgument{ argument = "0xb66b180422a4886dac85b8f68cc42ec1c6bafc824e196d437fdfd176192c25fccfc10e47777699420eec0c54a0176861a353a43dd45b338385e1b975709f2000", type = ARGUMENT_TYPE.STRING }
};
```

### Some common bugs and their resolutions

**Problem:** Newtonsoft JSON is missing.

**Solution:** Please, Add this as a git URL in adding package

```cs
com.unity.nuget.newtonsoft-json
```
<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/SUPRA/unity-sdk/unity-sdk-5.avif"/>
    <span className="font-bold text-[rgb(192,192,192)]">Add newtonsoft Json</span>
</div>
<br/>
