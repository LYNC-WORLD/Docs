---
sidebar_label: 'Types Used in the Methods Provided by the SDK'
id: aptos-social-login-types
custom_edit_url: null
---

# Types Used in the Methods Provided by the SDK

Types used in the SDK's methods for managing user profiles and handling Aptos transactions.

```typescript
enum NetworkConfigs {
  Mainnet = 1,
  Testnet = 2,
}

type UserData = {
  id: string;
  walletAddress: string;
  name: string;
  email: string;
  providerId: string;
  avatar: string;
};

type GetUserProfileReturn = { success: true; data: UserData } | { success: false; message: string };

type RegisterUserPayloadData = {
  email: string;
  firebaseUid: string;
  avatar: string;
  name: string;
  network: NetworkConfigs;
  lastLoginAt: string;
  providerId: string;
};


type UpdateUserPayloadData = {
  email: string;
  network: NetworkConfigs;
  firebaseUid: string;
  publicKey: string;
  privateKey: string;
  apiKey: string;
};


type SignInWithGoogleReturn = { success: true; user: UserData } | { success: false; message: string };

type SignOutUserReturn = { success: true } | { success: false; message: string };

type AptosTransactionArguments = { argument: string; type: "string" | "number" | "byte_array" | "signature" };

type AptosTransactionFuncArgs = {
  email: string;
  walletAddress: string;
  network: NetworkConfigs;
  apiKey: string;
  contractAddress: string;
  contractName: string;
  functionName: string;
  arguments: Array<AptosTransactionArguments>;
  usePaymaster?: boolean;
};

type AptosTransactionData = { transactionHash: string };

type AptosTransactionReturn = { success: true; data: AptosTransactionData } | { success: false; data: string };
```