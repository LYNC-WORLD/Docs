---
sidebar_label: "Using Wallet and Signer"
id: metamask-wallet-sdk-using-the-sdk-using-wallet-and-signer
custom_edit_url: null
---

# Using Wallet and Signer

The SDK also provide `useWallet` and `useEthSigner` hooks, which provides access to user's metamask wallet provider and ethereum signer. You can import and use these hooks to get access to wallet provider and signer, and interact with user's metamask wallet for message and transaction signing.

## Using wallet provider

```tsx
import React, { useState } from "react";
import { useAccount, useWallet } from "lync-wallet-sdk";

const SignPersonalMessage: React.FC = () => {
  const { account } = useAccount();
  const { wallet } = useWallet();

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

## Using ethereum signer

The SDK provides `useEthSigner` hook that returns ethereum signer for the user's connected account. The hook automatically handles updating the signer when the network is switched or the connected account is changed. You can use this hook to sign transactions like coin transfers using user's connected account. For example:

```tsx
import React, { useMemo, useState } from "react";
import { ethers } from "ethers";
import { useAccount, useBalance, useEthSigner, useNetwork } from "lync-wallet-sdk";

export const CoinTransferTransaction: React.FC = () => {
  const { account } = useAccount();
  const { balance, isFetching, refetch } = useBalance();
  const { chainId } = useNetwork();
  const signer = useEthSigner();

  const [sendingFunds, setSendingFunds] = useState<boolean>(false);

  const formattedBalance = useMemo(() => {
    if (Number(balance) <= 0) return "0";
    if (Number(Number(balance).toFixed(6)) <= 0) return "< 0.000001";
    return Number(balance).toFixed(6);
  }, [balance]);

  const transferFunds = async () => {
    if (!account || !signer) return;

    if (Number(balance) === 0) {
      console.error("Account balance is too low. Please top-up your account to send funds.");
      return;
    }

    if (Number(balance) <= 0.001) {
      console.error("Insufficient funds. Please top-up your account to send funds.");
      return;
    }

    setSendingFunds(true);

    // Wallet address of the recipient (replace with actual address).
    const transferAddress = "0x0000000000000000000000000000000000000000";

    // Amount to be transferred, in wei.
    const transferAmount = ethers.utils.parseEther("0.001");

    const transactionParams = {
      from: account, // The user's connected account.
      to: transferAddress,
      value: transferAmount.toHexString(),
    };

    try {
      const transaction = await signer.sendTransaction(transactionParams);
      const receipt = await transaction.wait();

      console.log("Fund transfer successful: ", receipt.transactionHash);
      await refetch();
    } catch (error: unknown) {
      console.error("Error sending funds: ", { error });
    } finally {
      setSendingFunds(false);
    }
  };

  if (!account) return null;

  return (
    <div>
      <p>Connected account: {account}</p>
      <p>Connected network: {chainId}</p>
      {isFetching && <p>Fetching account balance...</p>}
      {!isFetching && <p>Balance: {formattedBalance}</p>}
      <button disabled={isFetching || sendingFunds} onClick={transferFunds}>
        Send Funds
      </button>
    </div>
  );
};
```
