---
id: account-abstraction-webgl
custom_edit_url: null
---

# LYNC Account Abstraction WebGL SDK

LYNC AA SDK is a no-code Unity SDK allowing seamless integration of Account Abstraction. Supported Platforms: WebGL (Browser Games).

### Get your API Key
Please get your API key before downloading the SDK from [here​](https://www.lync.world/form.html)

### Installation
Download the LYNC Account Abstraction SDK from Here
Reference Project: https://github.com/LYNC-WORLD/LYNC-Unity-AA-WebGL/releases​

Import the SDK .unitypackage file to your project. or simply drag and drop .unitypackage file to your project.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/account-abstraction-webgl/account-abstraction-webgl.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets -> Import Package -> Custom Package</span>
</div>
<br/>

Once the Account Abstraction SDK package has finished importing into your Unity project, you can begin integrating it into your game.

The Folder structure looks like this

<div className="flex flex-col items-center">
    <img className="w-[50%]" src="/img/PRODUCTS/account-abstraction-webgl/account-abstraction-webgl-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">SDK Folder Structure</span>
</div>
<br/>

### Integrating AA SDK in Unity
There are 2 Example Projects present in the SDK: Assets -> LYNC-AA-WEBGL -> Example / Example-2

You can find the example scene in the folders. Simply pass the API key in lyncManager GameObject. To test, Build and Run after adding this scene in (Scene in Build).

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/account-abstraction-webgl/account-abstraction-webgl-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Example Projects</span>
</div>
<br/>

You can find the example scene in the folders. Simply pass the API key in lyncManager GameObject.

To test, Build and Run after adding this scene in (Scene in Build).

<div className="flex flex-col items-center">
    <img className="w-[50%]" src="/img/PRODUCTS/account-abstraction-webgl/account-abstraction-webgl-3.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Pass LYNC API Key​</span>
</div>
<br/>

## Setup the Project
To use, LYNC Manager Prefab, it needs to be attached to the first scene. This will serve as the starting point for your project. In LYNC Manager Prefab, be sure to provide the following details:

1. LYNC API Key ([The API Key can be generated from here](https://lync.world/form.html))
2. Choose chain
3. Pass in the Dapp API Key ([The API key can be generated from the Biconomy Dashboard](https://dashboard.biconomy.io/))
4. Web3 Auth Client ID ([The API key can be generated from the Web3 Auth Dashboard](https://dashboard.web3auth.io/login))

Once done, You can attach the Login Example Script in your Scene by dragging and dropping a Button as a Game Object

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/account-abstraction-webgl/account-abstraction-webgl-4.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Pass LYNC API Key​</span>
</div>
<br/>

To Login with Code:

```cs
using LYNC;
using LYNC.Wallet;

LyncManager.Instance.walletAuth.ConnectWallet(
  wallet =>
  {
      Debug.Log("EOA Address: "+walletData.PublicAddress);
      Debug.Log("Smart Account Address: "+walletData.SmartAccount);
  },
  error =>
  {
    Debug.LogError(error);
  }
);
```