---
sidebar_label: "Types Used in the Methods Provided by the SDK"
id: types-and-enums-used-in-the-methods-provided-by-the-sdk
custom_edit_url: null
---

# Types Used in the Methods Provided by the SDK

Types used in the SDK's methods for managing user profiles and handling Movement transactions.

```typescript
enum MovementNetwork {
  Mainnet = 1,
  Testnet,
  Devnet,
}

enum TransactionArgumentTypes {
  String = 0,
  Number,
  ByteArray,
  Signature,
  Boolean,
}

type MovementNetworkMap = {
  1: "Mainnet";
  2: "Testnet";
  3: "Devnet";
};

type UserData = {
  accountAddress: string;
  avatar: string;
  email: string;
  id: string;
  name: string;
  network: 1 | 2 | 3;
  providerId: string;
};

type ParsedUserData = {
  email: string;
  avatar: string;
  name: string;
  accountAddress: string;
  providerId: string;
  id: string;
  privateKey: string;
  network: "Mainnet" | "Testnet" | "Devnet";
};

type GetUserProfileReturn =
  | { success: true; data: ParsedUserData }
  | { success: false; message: string };

type SignInWithGoogleReturn =
  | { success: true; user: ParsedUserData }
  | { success: false; message: string };

type SignOutUserReturn =
  | { success: true }
  | { success: false; message: string };

type MovementTransactionArguments = {
  argument: string;
  type: TransactionArgumentTypes;
};

type MovementTransactionFuncArgs = {
  email: string;
  accountAddress: string;
  network: MovementNetwork;
  apiKey: string;
  contractAddress: string;
  contractName: string;
  functionName: string;
  arguments: Array<MovementTransactionArguments>;
  usePaymaster?: boolean;
};

type MovementTransactionData = { transactionHash: string };

type MovementTransactionReturn =
  | { success: true; data: MovementTransactionData }
  | { success: false; data: string };
```
