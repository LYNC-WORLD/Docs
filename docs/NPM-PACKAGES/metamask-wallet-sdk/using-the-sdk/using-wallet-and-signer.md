---
sidebar_label: "Using Wallet and Signer"
id: metamask-wallet-sdk-using-the-sdk-using-wallet-and-signer
custom_edit_url: null
---

# Using Wallet and Signer

The SDK also provide `useWallet` and `useEthSigner` hooks, which provides access to user's metamask wallet provider and ethereum signer. You can import and use these hooks to get access to wallet provider and signer, and interact with user's metamask wallet for message and transaction signing.

```tsx
import React from "react";
import { useWallet, useEthSigner } from "lync-wallet-sdk";

const UserWalletProvider: React.FC = () => {
  const { wallet } = useWallet();
  const signer = useEthSigner();

  console.info("User wallet provider: ", wallet);
  console.info("Ethereum signer: ", signer);

  return null;
};
```
