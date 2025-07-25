---
sidebar_label: "Using the SDK"
id: using-the-sdk
custom_edit_url: null
---

# Using the SDK

In this Section, you will learn what are the functions provided by the SDK to integrate authentication, user management, and Aptos transaction execution into your project.

## Functions Overview

### 1. signInWithGoogle: (network: NetworkConfigs, apiKey: string, logEnabled?: boolean) => Promise&lt;SignInWithGoogleReturn&gt;

```javascript
const signInWithGoogle: (network: NetworkConfigs, apiKey: string, logEnabled?: boolean) => Promise<SignInWithGoogleReturn>
```

```javascript
This function allows users to sign in with Google using OAuthProvider.

 * @param {NetworkConfigs} network - Network Type Enum.
 * @param {string} apiKey - Your API key from generated from LYNC dashboard - https://dashboard.lync.world
 * @param {boolean} [logEnabled] - Enable/disable logging. The default is true

 * @returns {object} SignInWithGoogleReturn - Returns an object with the success status and the user data or error message.

 * @typedef {object} SignInWithGoogleReturn - { success: true; user: UserData } | { success: false; message: string };
 * @typedef {object} UserData - { id: string; walletAddress: string; name: string; email: string; providerId: string; avatar: string; }

 * @errors - The function can throw an error if the sign-in operation fails. The error message is logged if logging is enabled.
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

### 3. getUserProfile: (email: string, network: NetworkConfigs, apiKey: string, logEnabled?: boolean) => Promise&lt;GetUserProfileReturn&gt;

```javascript
const getUserProfile: (email: string, network: NetworkConfigs, apiKey: string, logEnabled?: boolean) => Promise<GetUserProfileReturn>
```

```javascript
This function is used to get the user data from the server using the getUserProfile function.

 * @param {string} email - The email address of the user.
 * @param {NetworkConfigs} network - Network Type Enum.
 * @param {string} apiKey - Your API key from generated from LYNC dashboard - https://dashboard.lync.world
 * @param {boolean} [logEnabled] - Enable/disable logging. The default is true.

 * @returns {object} GetUserProfileReturn - Returns an object with the success status and the user data or error message.

 * @typedef {object} GetUserProfileReturn - { success: true; data: UserData } | { success: false; message: string };
 * @typedef {object} UserData - { id: string; walletAddress: string; name: string; email: string; providerId: string; avatar: string; }

 * @errors - The function can throw an error if the request fails. The error message is logged if logging is enabled.
```

<br/>

### 4. aptosTransaction: (args: AptosTransactionFuncArgs,apiKey: string, logEnabled?: boolean) => Promise&lt;AptosTransactionReturn&gt;

```javascript
const aptosTransaction: (args: AptosTransactionFuncArgs, ,apiKey: string, logEnabled?: boolean) => Promise<AptosTransactionReturn>
```

```javascript
This function will initiate and execute a transaction on the specified Aptos network and return an object containing a success status and transaction result or an error message.

 * @param {AptosTransactionFuncArgs} args - The arguments required to execute the generic transaction on the Aptos blockchain.
 * @param {string} apiKey - Your API key from generated from LYNC dashboard - https://dashboard.lync.world
 * @param {boolean} [logEnabled] - Enable/disable logging. The default is true.

 * @returns {object} AptosTransactionReturn - Returns an object with the success status and the transaction data or error message.

 * @typedef {object} AptosTransactionFuncArgs - { email: string; walletAddress: string; contractAddress: string; contractName: string; functionName: string; arguments: Array<AptosTransactionArguments>; usePaymaster?: boolean; }
 * @typedef {object} AptosTransactionArguments - { argument: string; type: "string" | "number" | "byte_array" | "signature" }
 * @typedef {object} AptosTransactionData - { transactionHash: string }
 * @typedef {object} AptosTransactionReturn - { success: true; data: AptosTransactionData } | { success: false; data: string }

 * @errors - The function can throw an error if the request fails. The error message is logged if logging is enabled.
```
