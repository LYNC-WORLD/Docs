---
sidebar_label: "Using the SDK"
id: using-the-sdk
custom_edit_url: null
---

# Using the SDK

In this Section, you will learn what are the functions provided by the SDK to integrate authentication, user management, and Movement transaction execution into your project.

## Functions Overview

### 1. signInWithGoogle: (network: MovementNetwork, apiKey: string, logEnabled?: boolean) => Promise&lt;SignInWithGoogleReturn&gt;

```javascript
const signInWithGoogle: (network: MovementNetwork, apiKey: string, logEnabled?: boolean) => Promise<SignInWithGoogleReturn>
```

This function allows users to sign in with Google using OAuthProvider.

```javascript
* @param {MovementNetwork} network - The network on which the transaction will be executed.
* @param {string} apiKey - Your API key generated from the {@link https://dashboard.lync.world|LYNC dashboard}.
* @param {boolean} [logEnabled=true] - Enable/disable logging. The default is true.

* @returns {object} SignInWithGoogleReturn - Returns an object with the success status and the user data or error message.

* @typedef {enum} MovementNetwork - { Mainnet = 1; Testnet = 2; Devnet = 3; }
* @typedef {object} SignInWithGoogleReturn - { success: true; user: ParsedUserData } | { success: false; message: string };
* @typedef {object} ParsedUserData - { email: string; avatar: string; name: string; accountAddress: string; providerId: string; id: string; privateKey: string; network: "Mainnet" | "Testnet" | "Devnet"; }
```

<br/>

### 2. signOutUser: (logEnabled?: boolean) => Promise&lt;SignOutUserReturn&gt;

```javascript
const signOutUser: (logEnabled?: boolean) => Promise<SignOutUserReturn>
```

```javascript
This function is used to sign-out a user from the application. It uses Firebase's signOut function to sign out the user.

 * @param {boolean} [logEnabled] - Enable/disable logging. The default is true.

 * @returns {object} SignOutUserReturn - Returns an object that contains a success status and (optionally) an error message.

 * @typedef {object} SignOutUserReturn - { success: true } | { success: false; message: string };

 * @errors - The function can throw an error if the sign-out operation fails. The error message is logged if logging is enabled.
```

<br/>

### 3. getUserData: (email: string, network: MovementNetwork, apiKey: string, logEnabled?: boolean) => Promise&lt;GetUserProfileReturn&gt;

```javascript
const getUserData: (email: string, network: MovementNetwork, apiKey: string, logEnabled?: boolean) => Promise<GetUserProfileReturn>
```

This function is used to get the user data from the server using the getUserProfile function.

```javascript

* @param {string} email - The email address of the user.
* @param {MovementNetwork} network - The network on which the transaction will be executed.
* @param {string} apiKey - Your API key generated from the {@link https://dashboard.lync.world|LYNC dashboard}.
* @param {boolean} [logEnabled=true] - Enable/disable logging. The default is true.

* @returns {object} GetUserProfileReturn - Returns an object with the success status and the user data or error message.

* @typedef {enum} MovementNetwork - { Mainnet = 1; Testnet = 2; Devnet = 3; }
* @typedef {object} GetUserProfileReturn - { success: true; data: ParsedUserData } | { success: false; message: string };
* @typedef {object} ParsedUserData - { email: string; avatar: string; name: string; accountAddress: string; providerId: string; id: string; privateKey: string; network: "Mainnet" | "Testnet" | "Devnet"; }
```

<br/>

### 4. movementTransaction: (args: MovementTransactionFuncArgs,apiKey: string, logEnabled?: boolean) => Promise&lt;MovementTransactionReturn&gt;

```javascript
const movementTransaction: (args: MovementTransactionFuncArgs, ,apiKey: string, logEnabled?: boolean) => Promise<MovementTransactionReturn>
```

This function will initiate and execute a transaction on the specified Aptos network and return an object containing a success status and transaction result or an error message.

```javascript

* @param {MovementTransactionFuncArgs} args - The arguments required to execute the generic transaction on the Movement blockchain.
  * @param {string} args.email - The email of the user.
  * @param {MovementNetwork} args.network - The network type enum (MovementNetwork).
  * @param {string} args.apiKey - Your API key generated from the {@link https://dashboard.lync.world|LYNC dashboard}.
  * @param {string} args.accountAddress - The wallet address of the currently signed-in user.
  * @param {string} args.contractAddress - The contract address.
  * @param {string} args.contractName - The contract name.
  * @param {string} args.functionName - The function name.
  * @param {Array} args.arguments - The arguments for the transaction.
    * @param {Object} args.arguments[].argument - The argument used by the function.
    * @param {TransactionArgumentTypes} args.arguments[].type - The type of the argument. Can be TransactionArgumentTypes.String, TransactionArgumentTypes.Number, TransactionArgumentTypes.Boolean, TransactionArgumentTypes.ByteArray, or TransactionArgumentTypes.Signature.
  * @param {boolean} [args.usePaymaster=false] - Enable/disable the use of paymaster. If enabled, the transaction will be sponsored. If the wallet doesn't exist, it will be created automatically before the transaction.

* @param {string} apiKey - Your API key generated from the {@link https://dashboard.lync.world|LYNC dashboard}.
* @param {boolean} [logEnabled=true] - Enable/disable logging. The default is true.


* @returns {object} MovementTransactionReturn - Returns an object with the success status and the transaction data or error message.

* @typedef {enum} MovementNetwork - { Mainnet = 1; Testnet = 2; Devnet = 3; }
* @typedef {object} MovementTransactionFuncArgs - { email: string; accountAddress: string; network: MovementNetwork; apiKey: string; contractAddress: string; contractName: string; functionName: string; arguments: Array<MovementTransactionArguments>; usePaymaster?: boolean; }
* @typedef {object} MovementTransactionArguments - { argument: string; type: TransactionArgumentTypes }
* @typedef {enum} TransactionArgumentTypes - { String = 1; Number = 2; ByteArray = 3; Signature = 4; Boolean = 5; }
* @typedef {object} MovementTransactionData - { transactionHash: string }
* @typedef {object} MovementTransactionReturn - { success: true; data: MovementTransactionData } | { success: false; data: string }

```
