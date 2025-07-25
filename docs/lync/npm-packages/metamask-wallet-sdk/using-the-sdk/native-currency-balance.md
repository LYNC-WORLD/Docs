---
sidebar_label: "Native Currency Balance"
id: metamask-wallet-sdk-using-the-sdk-native-currency-balance
custom_edit_url: null
---

# Get the native currency balance

The SDK provides a dedicated hook for fetching the native currency balance on the current connected network of a user's connected account. The hook automatically handles updating the balance when the network is switched or the connected account is changed, making it easier for developers to get an updated balance according to the change in network or account.

```tsx
import React, { useMemo } from "react";
import { useAccount, useBalance, useNetwork } from "lync-wallet-sdk";

export const AccountBalance: React.FC = () => {
  const { account } = useAccount();
  const { balance, isFetching } = useBalance();
  const { chainId } = useNetwork();

  const formattedBalance = useMemo(() => {
    if (Number(balance) <= 0) return "0";
    if (Number(Number(balance).toFixed(6)) <= 0) return "< 0.000001";
    return Number(balance).toFixed(6);
  }, [balance]);

  if (!account) return null;

  return (
    <div>
      <p>Connected account: {account}</p>
      <p>Connected network: {chainId}</p>
      {isFetching && <p>Fetching account balance...</p>}
      {!isFetching && <p>Balance: {formattedBalance}</p>}
    </div>
  );
};
```
