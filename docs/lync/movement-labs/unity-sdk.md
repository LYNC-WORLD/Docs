---
sidebar_label: "LYNC Unity Movement SDK"
id: lync-unity-movement-sdk
custom_edit_url: null
---

# LYNC Unity Movement SDK

LYNC Unity Movement SDK is a no-code Modular Unity SDK supporting PC (MacOS and Windows) , Mobile (Android and iOS) and WebGL on [Aptos Move (M2)](https://movementlabs.xyz/).

**Platform Supported**: PC (Windows and MacOs) , Mobile (Android and iOS) and WebGL

**Network Supported**: Movement Testnet and Mainnnet

This release includes the following:

- Social Logins
- Custom Transactions in Social Login

### Get your API Key

Please get your API key before downloading the SDK from [here](https://www.lync.world/form.html)

### Installation

Download the LYNC Unity Movement SDK from [Here​](https://github.com/LYNC-WORLD/LYNC-Unity-Movement-SDK)

Example Project: https://github.com/LYNC-WORLD/LYNC-Unity-Movement-SDK

​Import the SDK .unitypackage file to your project or simply drag and drop .unitypackage file to your project.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/MOVEMENT/unity-sdk/unity-sdk.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets -> Import Package -> Custom Package</span>
</div>
<br/>

Once the LYNC Movement SDK package has finished importing into your Unity project, you can begin integrating it into your game.

The Folder structure looks like this

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/MOVEMENT/unity-sdk/unity-sdk-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">SDK Folder Structure</span>
</div>
<br/>

### Integrating LYNC Movement SDK in Unity

There are 2 Example Projects present in the SDK:

1. Assets/LYNC-Movement-SDK/Example/MoveExample.unity
2. Assets/LYNC-Movement-SDK/Example/Example 2.unity

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/MOVEMENT/unity-sdk/unity-sdk-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Example Projects</span>
</div>
<br/>

You can find the example scene in the folders. Simply pass the API key in LyncManager GameObject.

To test, Build and Run after adding this scene in (Scene in Build).

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/MOVEMENT/unity-sdk/unity-sdk-3.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Pass LYNC API Key​</span>
</div>
<br/>

## Setup the Project

To use LYNC Aptos SDK, attach LYNC Manager Prefab(Assets/LYNC-APTOS-SDK/LYNC Manager.prefab) on the starting scene.

This will serve as the starting point for your project. In LYNC Manager Prefab, be sure to provide the following details:

1. LYNC API Key [(The API Key can be generated from here)](https://lync.world/form.html)
2. Choose Network -> Testnet / Mainnet
3. Sponsor Transactions -> If you want to sponsor transactions for users (Please contact [LYNC](https://calendly.com/shanu-lync/30-minute-meeting) to setup Paymaster)
4. Pass a deep link name (example: lyncmovement/gameName etc.)

### Integrating Login or Transaction Layer via LYNC Aptos SDK in Unity

The Sample Code for Login can be found at APTOSExample.cs.

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

On Wallet Connected (TypeOfLoginMethod)

```cs
//To OnWalletConnected(TypeOfLoginMethod):

        private void OnWalletConnected(AuthBase _authBase)
        {
            if (AuthBase.AuthType == AUTH_TYPE.FIREBASE)
            {
                Populate(_authBase as FirebaseAuth);
            }
        }


        public void Populate(FirebaseAuth firebaseAuth = null)
        {
            WalletAddressText.text = (firebaseAuth == null ? "Disconnected" : AbbreviateWalletAddressHex(firebaseAuth.AptosFirebaseAuthData.publicKey));
            balance.text = (firebaseAuth == null ? "0" : firebaseAuth.AptosFirebaseAuthData.balance) + " APT";
        }
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
Set Sponsor Transactions as true, and [contact LYNC team to setup your paymaster](https://calendly.com/shanu-lync/30-minute-meeting)

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/MOVEMENT/unity-sdk/unity-sdk-4.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Sponsor Transactions​</span>
</div>
<br/>

To do transactions, MoveExample.cs can be taken as a reference.

Pass in the Contract Address, Contract Name, Function Name and Network.

Arguments are not compulsory parameters, but if the function accepts any argument, make sure to pass them.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/MOVEMENT/unity-sdk/unity-sdk-5.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Transaction Objects​</span>
</div>
<br/>

```cs
LyncManager.Instance.TransactionsManager.SendTransaction(Transaction);
```

You can create a public Transaction Object, pass in the parameters and hit the function call where you want to do the transactions

```cs
public Transaction mintTxn;

TransactionResult txData = await LyncManager.Instance.TransactionsManager.SendTransaction(mintTxn);

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
new Transaction("0x55db3f109405348dd4ce271dc92a39a6e1cbc3d78cf71f6bf128b1c8a9dfac33","tst_unity","set_data_bytes",arguments));

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
    <img className="w-[80%]" src="/img/APTOS/unity-sdk/unity-sdk-6.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Add newtonsoft Json</span>
</div>
<br/>
