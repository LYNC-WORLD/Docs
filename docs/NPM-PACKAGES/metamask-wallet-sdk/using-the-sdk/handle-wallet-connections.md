---
sidebar_label: "Handle wallet connections"
id: metamask-wallet-sdk-using-the-sdk-handle-wallet-connections.md
custom_edit_url: null
---

# Handle wallet connections

`lync-wallet-sdk` provides a simple, hook-based approach for handling wallet connections. The SDK provides different hooks to connect and manage user wallet in your dapp. With the SDK, you can:

- Connect user's metamask wallet to your dapp.
- Access user accounts (addresses).
- Handle wallet connections (connect/disconnect).
- Handle adding and switching networks.
- Listen for account and network changes in real time.
- Use providers and signers to interact with user's wallet

This SDK provides different hooks to connect user's metamask wallet to your dapp and handle wallet connections. For example:

```tsx
import React from "react";
import { collapseAddress, MetaMaskFunctionErrorCodes, useAccount, useConnect, useDisconnect } from "lync-wallet-sdk";

const MetaMaskConnectExample: React.FC = () => {
  const { account } = useAccount();
  const { isConnecting, connect } = useConnect();
  const { disconnect } = useDisconnect();

  const connectToMetaMask = async () => {
    const response = await connect();
    if (response.success) return;

    if (response.errorData.code === MetaMaskFunctionErrorCodes.MetaMaskProviderNotFound) {
      window.open("https://metamask.io/download/", "_blank");
      return;
    }

    console.error("Error connecting to metamask: ", response.errorData);
  };

  const disconnectMetaMask = async () => {
    const response = await disconnect();
    if (!response.success) console.error(response.errorData);
  };

  return (
    <div>
      {!account && (
        <button disabled={isConnecting} onClick={connectToMetaMask}>
          Connect Metamask
        </button>
      )}
      {account && <span>{collapseAddress(account)}</span>}
      {account && <button onClick={disconnectMetaMask}>Disconnect</button>}
    </div>
  );
};
```

Additionally, the SDK provides a `MetamaskConnect` component which wraps the connection logic and returns a button the triggers wallet connection on click. You can also import and use the `MetamaskConnect` component to connect user's metamask wallet to your dapp. For example:

```tsx
import React from "react";
import { MetamaskConnect, MetaMaskFunctionErrorCodes, useAccount, useDisconnect } from "lync-wallet-sdk";

type MetaMaskConnectionError = {
  error?: E;
  code: MetaMaskFunctionErrorCodes;
  message: string;
};

const MetaMaskConnectExample: React.FC = () => {
  const { account } = useAccount();
  const { disconnect } = useDisconnect();

  const onConnectionSuccess = () => {
    console.info("MetaMask connected successfully.");
  };

  const onConnectionError = (error: MetaMaskConnectionError) => {
    if (errorData.code === MetaMaskFunctionErrorCodes.MetaMaskProviderNotFound) {
      console.error("Please install MetaMask: https://metamask.io/download/");
      window.open("https://metamask.io/download/", "_blank");
    } else {
      console.error(error);
    }
  };

  return (
    <div>
      <MetamaskConnect onSuccess={onConnectionSuccess} onError={onConnectionError} />
      {account && <button onClick={disconnect}>Disconnect</button>}
    </div>
  );
};
```

> NOTE:
>
> When you are using `MetamaskConnect` component in your dapp, you must import `'lync-wallet-sdk/build/index.css'` to get necessary styling for the component ([see here](#wrapping-your-application-with-the-lyncmetamaskprovider)). If you want to change the default styles implemented by tye SDK for connect button, you can add your custom styles by targeting `.LYNCMetaMaskConnectSDK__metamask_connect_btn` class, and `.LYNCMetaMaskConnectSDK__metamask_connect_btn:hover` and `.LYNCMetaMaskConnectSDK__metamask_connect_btn:disabled` states.
