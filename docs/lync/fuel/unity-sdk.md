---
sidebar_label: "LYNC Unity Fuel SDK"
id: lync-unity-fuel-sdk
custom_edit_url: null
---

# LYNC Unity Fuel SDK

Fuel Unity SDK is a no-code Modular Unity SDK supporting PC (MacOS and Windows) and Mobile (Android and iOS) on Fuel Blockchain.

**Platform Supported**: PC (Windows and MacOs) and Mobile (Android and iOS)

**Network Supported**: Fuel Testnet and Mainnet (Coming Soon)

This release includes the following:

- Social Logins
- Fuelet Wallet Login
- Custom Transactions in Social Login and Web3 Wallet like Fuelet.
- Paymaster inbuilt to sponsor transactions for your users.

### Get your API Key

Please get your API key before downloading the SDK from [here](https://www.lync.world/form.html)

### Installation

Download the LYNC Unity Fuel SDK from [Here​](https://github.com/LYNC-WORLD/Fuel-Unity-SDK)

Example Project: https://github.com/LYNC-WORLD/Fuel-Unity-SDK

Import the SDK .unitypackage file to your project. or simply drag and drop .unitypackage file to your project.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/unity-sdk/unity-sdk.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets -> Import Package -> Custom Package</span>
</div>
<br/>

Once the LYNC Fuel SDK package has finished importing into your Unity project, you can begin integrating it into your game.

The Folder structure looks like this

<div className="flex flex-col items-center">
    <img className="w-[50%]" src="/img/FUEL/unity-sdk/unity-sdk-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">SDK Folder Structure</span>
</div>
<br/>

### Integrating LYNC Fuel SDK in Unity

There is 1 Example Projects present in the SDK:

Assets/LYNC-FUELET-SDK/FUELET/Example.unity

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/unity-sdk/unity-sdk-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Example Projects</span>
</div>
<br/>

You can find the example scene in the folders. Simply pass the API key in LyncManager GameObject.

To test, Build and Run after adding this scene in (Scene in Build).

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/unity-sdk/unity-sdk-3.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Pass LYNC API Key​</span>
</div>
<br/>

## Setup the Project

To use LYNC Fuel SDK. Attach LYNC Manager Prefab(Assets/LYNC-FUELET-SDK/LYNC Manager.prefab), on the starting scene.

This will serve as the starting point for your project. In LYNC Manager Prefab, be sure to provide the following details:

1. LYNC API Key [(The API Key can be generated from here)](https://lync.world/form.html)
2. Choose Network -> Testnet
3. Sponsor Transactions -> If you want to sponsor transactions for users (Please contact [LYNC](https://calendly.com/shanu-lync/30-minute-meeting) to setup Paymaster)
4. Login Options -> Allowing users to choose which login method to login from

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/unity-sdk/unity-sdk-4.png"/>
    
</div>
<br/>
5. Pass a deep link name (example: lyncfuel/gameName etc.)

### Integrating Login or Transaction Layer via LYNC Fuel SDK in Unity

The Sample Code for Login can be found at Example.cs.

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
            publicAddress.text = _authBase.PublicAddress; //Get Wallet Address
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

## Transaction Flow:

### ABI Fetcher

You will need ABI of the function to hit transaction, it's a rather complex process. To simply that, We have built a ABI Fetcher.

Link to ABI Fetcher: https://fuel-abi-fetcher.lync.world/

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/unity-sdk/unity-sdk-5.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">LYNC Fuel ABI Fetcher</span>
</div>
<br/>

To get ABI of a function, pass Function Name and Contract ABI

<details>
  <summary>Function Name</summary>
  ```bash
  get_global_score
  ```

</details>
<details>
  <summary>ABI</summary>
  ```json
  {
    "encoding": "1",
    "types": [
      {
        "typeId": 0,
        "type": "()",
        "components": [],
        "typeParameters": null
      },
      {
        "typeId": 1,
        "type": "b256",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 2,
        "type": "bool",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 3,
        "type": "enum AccessError",
        "components": [
          {
            "name": "NotOwner",
            "type": 0,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 4,
        "type": "enum Errors",
        "components": [
          {
            "name": "GAME_SESSION_NOT_STARTED",
            "type": 0,
            "typeArguments": null
          },
          {
            "name": "GAME_SESSION_ALREADY_STARTED",
            "type": 0,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 5,
        "type": "enum Identity",
        "components": [
          {
            "name": "Address",
            "type": 8,
            "typeArguments": null
          },
          {
            "name": "ContractId",
            "type": 9,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 6,
        "type": "enum InitializationError",
        "components": [
          {
            "name": "CannotReinitialized",
            "type": 0,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 7,
        "type": "enum State",
        "components": [
          {
            "name": "Uninitialized",
            "type": 0,
            "typeArguments": null
          },
          {
            "name": "Initialized",
            "type": 5,
            "typeArguments": null
          },
          {
            "name": "Revoked",
            "type": 0,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 8,
        "type": "struct Address",
        "components": [
          {
            "name": "bits",
            "type": 1,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 9,
        "type": "struct ContractId",
        "components": [
          {
            "name": "bits",
            "type": 1,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 10,
        "type": "struct OwnershipSet",
        "components": [
          {
            "name": "new_owner",
            "type": 5,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 11,
        "type": "struct OwnershipTransferred",
        "components": [
          {
            "name": "new_owner",
            "type": 5,
            "typeArguments": null
          },
          {
            "name": "previous_owner",
            "type": 5,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 12,
        "type": "u256",
        "components": null,
        "typeParameters": null
      }
    ],
    "functions": [
      {
        "inputs": [
          {
            "name": "owner",
            "type": 5,
            "typeArguments": null
          }
        ],
        "name": "constructor",
        "output": {
          "name": "",
          "type": 0,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read",
              "write"
            ]
          }
        ]
      },
      {
        "inputs": [],
        "name": "owner",
        "output": {
          "name": "",
          "type": 7,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read"
            ]
          }
        ]
      },
      {
        "inputs": [
          {
            "name": "new_owner",
            "type": 5,
            "typeArguments": null
          }
        ],
        "name": "change_owner",
        "output": {
          "name": "",
          "type": 0,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "write"
            ]
          }
        ]
      },
      {
        "inputs": [
          {
            "name": "id",
            "type": 5,
            "typeArguments": null
          }
        ],
        "name": "end_game_session",
        "output": {
          "name": "",
          "type": 0,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "write"
            ]
          }
        ]
      },
      {
        "inputs": [
          {
            "name": "id",
            "type": 5,
            "typeArguments": null
          }
        ],
        "name": "get_game_session_score",
        "output": {
          "name": "",
          "type": 12,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read"
            ]
          }
        ]
      },
      {
        "inputs": [
          {
            "name": "id",
            "type": 5,
            "typeArguments": null
          }
        ],
        "name": "get_game_session_started",
        "output": {
          "name": "",
          "type": 2,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read"
            ]
          }
        ]
      },
      {
        "inputs": [
          {
            "name": "id",
            "type": 5,
            "typeArguments": null
          }
        ],
        "name": "get_global_score",
        "output": {
          "name": "",
          "type": 12,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read"
            ]
          }
        ]
      },
      {
        "inputs": [
          {
            "name": "id",
            "type": 5,
            "typeArguments": null
          }
        ],
        "name": "start_new_game_session",
        "output": {
          "name": "",
          "type": 0,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "write"
            ]
          }
        ]
      },
      {
        "inputs": [
          {
            "name": "id",
            "type": 5,
            "typeArguments": null
          },
          {
            "name": "score_to_add",
            "type": 12,
            "typeArguments": null
          }
        ],
        "name": "update_game_session_increase_score",
        "output": {
          "name": "",
          "type": 0,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "write"
            ]
          }
        ]
      }
    ],
    "loggedTypes": [
      {
        "logId": "2161305517876418151",
        "loggedType": {
          "name": "",
          "type": 6,
          "typeArguments": []
        }
      },
      {
        "logId": "16280289466020123285",
        "loggedType": {
          "name": "",
          "type": 10,
          "typeArguments": []
        }
      },
      {
        "logId": "4571204900286667806",
        "loggedType": {
          "name": "",
          "type": 3,
          "typeArguments": []
        }
      },
      {
        "logId": "12970362301975156672",
        "loggedType": {
          "name": "",
          "type": 11,
          "typeArguments": []
        }
      },
      {
        "logId": "7573363117586927569",
        "loggedType": {
          "name": "",
          "type": 4,
          "typeArguments": []
        }
      }
    ],
    "messagesTypes": [],
    "configurables": []
  }
  ```

</details>

There are two methods for proceeding with a transaction:

1. **Gasless Transaction -** Game Developer/ Game Studio will be sponsoring the transaction fee.

2. **User Paid Transaction-** The Gamer/ User will be responsible for paying the gas fee and cost if any, required to do the transaction.

### Gasless Transaction

To Enable Gasless Transactions or to Sponsor Transactions for your users,
Set Sponsor Transactions as true, and [contact LYNC team to setup your paymaster](https://calendly.com/shanu-lync/30-minute-meeting)

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/unity-sdk/unity-sdk-6.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Sponsor Transactions​</span>
</div>
<br/>

To do transactions, APTOSExample.cs can be taken as a reference.

Pass in the Contract Address, Contract Name, Function Name and Network.

Arguments are not compulsory parameters, but if the function accepts any argument, make sure to pass them.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/FUEL/unity-sdk/unity-sdk-7.png"/>
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
    <img className="w-[80%]" src="/img/FUEL/unity-sdk/unity-sdk-8.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Add newtonsoft Json</span>
</div>
<br/>
