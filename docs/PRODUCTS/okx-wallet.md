---
sidebar_label: 'OKX Wallet'
id: okx-wallet
custom_edit_url: null
---

# OKX Wallet
Integrate OKX wallet into game engine

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/okx/okx.avif"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]">Open in JSON Format</span> -->
</div>
<br/>

The LYNC - OKX wallet SDK allows game developers to integrate OKX Wallet into their games quickly, and set up OKX Chain inside the game in less than 30 seconds. This SDK allows game developers to monitor gamers’ data via the LYNC analytics system and update the SDK without leaving the game engine.

### Get Your API Key
Please get your API key before downloading the SDK from [here](https://www.lync.world/form.html)

### Installation
Download the LYNC - OKX Wallet SDK from [here](https://github.com/LYNC-WORLD/OKX-Unity-Wallet-SDK/releases)

Import the SDK .unitypackage file to your project. or simply drag and drop .unitypackage file to your project.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/okx/okx-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets -> Import Package -> Custom Package</span>
</div>
<br/>

Once the OKX Wallet SDK package has finished importing into your Unity project, you can begin integrating it into your game. To do this, open the ConnectWallet scene provided by the LYNC-OKX SDK.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/okx/okx-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Assets ->LYNC-OKX-SDK -> Scenes</span>
</div>
<br/>

### Choose blockchain network 

:::info

If you haven't generated an API Key, please check [Get Your API Key](#get-your-api-key)
::::

After opening **ConnectWallet** scene, Go to **Interface**. In the "Inspector" window, go to the API key & Enter the **API key**. 

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/okx/okx-3.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Enter the API key</span>
</div>
<br/>

To choose the blockchain network, simply go to the **CurrentChain** drop-down menu and pick the network of your preference to deploy your game on.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/okx/okx-4.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Interface -> CurrentChain -> Choose Your Chain</span>
</div>
<br/>

## Integrating ConnetWallet scene into the build 
To deploy your Unity project, it's necessary to set up the Player Settings in Unity. Follow these steps to select the LYNC WebGL template.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/okx/okx-5.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">File -> Build Settings</span>
</div>
<br/>

Add ConnectWallet & FetchWallet Scene to the top of Scenes in Build

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/okx/okx-6.avif"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]">File -> Build Settings</span> -->
</div>
<br/>