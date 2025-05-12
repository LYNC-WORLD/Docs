---
sidebar_label: "Using Wallet and Signer"
id: metamask-wallet-sdk-using-the-sdk-using-wallet-and-signer
custom_edit_url: null
---

# Using Wallet and Signer

The SDK also provide `useWallet` and `useEthSigner` hooks, which provides access to user's metamask wallet provider and ethereum signer. You can import and use these hooks to get access to wallet provider and signer, and interact with user's metamask wallet for message and transaction signing.

```tsx
import React, { useState } from "react";
import { useAccount, useEthSigner, useWallet } from "lync-wallet-sdk";

const SignPersonalMessage: React.FC = () => {
  const { account } = useAccount();
  const { wallet } = useWallet();

  const signer = useEthSigner();
  console.info("Ethereum signer: ", signer);

  const [signedMessage, setSignedMessage] = useState<string | null>(null);

  const signMessage = async () => {
    if (!wallet || !account) return;

    const signingMessage = `This message is a demo message signed by account: ${account}`;
    const message = `0x${Buffer.from(signingMessage, "utf8").toString("hex")}`;

    try {
      const signature = (await wallet.request({
        method: "personal_sign",
        params: [message, account],
      })) as string;

      setSignedMessage(signature);
    } catch (error) {
      console.error(error);
      setSignedMessage(null);
    }
  };

  return (
    <div>
      {signedMessage && <p>{signedMessage}</p>}
      <button onClick={signMessage}>Sign Message</button>
    </div>
  );
};
```
