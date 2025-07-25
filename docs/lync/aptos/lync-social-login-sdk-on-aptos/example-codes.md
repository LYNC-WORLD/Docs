---
sidebar_label: "Example Codes in React & TypeScript"
id: example-codes-in-react-and-typescript
custom_edit_url: null
---

# Example Codes in React & TypeScript

In this Section, you will see examples of how to use the functions provided by the SDK to integrate authentication, user management, and Aptos transaction execution into your React project. All the example uses TypeScript. However, the SDK can also be used with React and JavaScript in the same way, as shown in the examples.

## Functions Overview

### 1. Authenticating user with Google Sign-In

```javascript
// Function Signature -

const signInWithGoogle = (network: NetworkConfigs, apiKey: string, logEnabled?: boolean) => Promise<SignInWithGoogleReturn>
```

This function allows users to sign in with Google using OAuthProvider.

Parameters:

- `network`: Network Type Enum.
- `apiKey` : Your API key from generated from LYNC dashboard - https://dashboard.lync.world
- `logEnabled (Optional)`: Enable/disable logging. The default is true.

Return Type:

- `Promise<SignInWithGoogleReturn>:`

  - `{ success: true; user: UserData; } if successful.`

  - `{ success: false; message: string; } if unsuccessful.`

**Errors:**

The function can throw an error if the sign-in operation fails. The error message is logged if logging is enabled.

**Example:**

Here is an example of a React component that imports and uses the `signInWithGoogle` function:

```javascript
import React from "react";
import { signInWithGoogle } from "@lyncworld/aptos-social-login-sdk";

const SignInButton = () => {
  const handleSignIn = async () => {
    try {
      const response = await signInWithGoogle(
        NetworkConfigs.Testnet,
        "<YOUR_API_KEY>",
        true
      );
      if (response.success) {
        console.log("User data:", response.user);
      } else {
        console.log("Error:", response.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
};

export default SignInButton;
```

### 2. Signing Out a User

```javascript
// Function Signature -

const signOutUser = (logEnabled?: boolean) => Promise<SignOutUserReturn>
```

This function is used to sign out a user from the application. It uses Firebase's signOut function to sign out the user.

Parameters:

- `logEnabled (Optional)`: Enable/disable logging. The default is true.

Return Type:

- `Promise<SignOutUserReturn>:`

  - `{ success: true; } if successful.`

  - `{ success: false; message: string; } if unsuccessful.`

**Errors:**

The function can throw an error if the sign-out operation fails. The error message is logged if logging is enabled.

**Example:**

Here is an example of a React component that imports and uses the signOutUser function:

```javascript
import React from "react";
import { signOutUser } from "@lyncworld/aptos-social-login-sdk";

const SignOutButton = () => {
  const handleSignOut = async () => {
    try {
      const response = await signOutUser(true);
      if (response.success) {
        console.log("User signed out successfully");
      } else {
        console.log("Error:", response.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return <button onClick={handleSignOut}>Sign out</button>;
};

export default SignOutButton;
```

### 3. Get the details of a User

```javascript
// Function Signature -

const getUserProfile = (email: string, network: NetworkConfigs, apiKey: string, logEnabled?: boolean) => Promise<GetUserProfileReturn>
```

This function is an asynchronous function that fetches a user's profile from the server.

Parameters:

- `email`: The email of the user.
- `network`: Network Type Enum.
- `apiKey` : Your API key from generated from LYNC dashboard - https://dashboard.lync.world
- `logEnabled (Optional)`: Enable/disable logging. The default is true.

Return Type:

- `Promise<GetUserProfileReturn>:`

  - `{ success: true; data: UserData; } if successful.`

  - `{ success: false; data: string; } if unsuccessful.`

**Errors:**

The function can throw an error if the fetch operation fails. The error message is logged if logging is enabled.

**Example:**

Here is an example of a React component that imports and uses the `getUserProfile` function:

```javascript
import React, { useEffect, useState } from "react";
import { getUserProfile } from "@lyncworld/aptos-social-login-sdk";

const UserProfileComponent = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await getUserProfile(
        "test@example.com",
        NetworkConfigs.Testnet,
        "<YOUR_API_KEY>"
      );
      if (response.success) {
        setUserProfile(response.data);
      } else {
        console.error(response.message);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      {userProfile && (
        <div>
          <h2>{userProfile.name}</h2>
          <p>{userProfile.email}</p>
          {/* Render other user profile data as needed */}
        </div>
      )}
    </div>
  );
};

export default UserProfileComponent;
```

### 4. Generic Transactions on Aptos Blockchain

```javascript
// Function Signature

const aptosTransaction = (args: AptosTransactionFuncArgs,apiKey: string,logEnabled?: boolean) => Promise<AptosTransactionReturn>
```

This is an asynchronous function that executes a generic Aptos transaction.

Parameters:

- `args (AptosTransactionFuncArgs)`: The arguments for the generic Aptos transaction. It is an object that includes the following properties:

  - `email (string)`: The email of the user.

  - `walletAddress (string)`: The wallet address of the currently signed-in user.

  - `apiKey(string)`: Your API key from generated from LYNC dashboard - https://dashboard.lync.world

  - `network (NetworkConfigs)`: Network Type Enum.

  - `contractAddress (string)`: The contract address.

  - `contractName (string)`: The contract name.

  - `functionName (string)`: The function name.

  - `arguments (Array)`: The arguments for the transaction. Each argument is an object that includes the following properties:

    - `argument (string)`: The argument used by the function.

    - `type (string)`: The type of the argument. It can be string, number, or byte_array.

  - `usePaymaster (Optional)`: Enable/disable the use of paymaster. The default is false. If you enable paymaster the transaction will be sponsored. Also, if the wallet doesn't exist, it will be created automatically before the transaction.

  - `apiKey`: Your API key from generated from LYNC dashboard - https://dashboard.lync.world

  - `logEnabled (Optional)`: Enable/disable logging. The default is true.

Return Type:

- `Promise<AptosTransactionReturn>:`

  - `{ success: true; data: AptosTransactionData; } if successful.`

  - `{ success: false; data: string; } if unsuccessful.`

**Errors:**

The function can throw an error if the transaction fails. The error message is logged if logging is enabled.

**Example:**

Here is an example of a React component that imports and uses the aptosTransaction function to perform a simple transfer transaction:

```javascript
import React, { useState } from "react";
import { aptosTransaction } from "@lyncworld/aptos-social-login-sdk";

const TransactionComponent = () => {
  const [transactionResult, setTransactionResult] = useState(null);

  const executeTransaction = async () => {
    const transactionArgs = {
      email: "user@example.com", // Email id of the sender
      walletAddress: "0x0000", // Public key of the sender
      apiKey: "<YOUR_API_KEY>",
      network: NetworkConfigs.Testnet
      contractAddress: "0x1",
      contractName: "aptos_account",
      functionName: "transfer",
      arguments: [
        {
          argument: "0x0000", // Wallet address of the receiver
          type: "string",
        },
        {
          argument: (1 * 10 ** 8).toString(), // Total APT to be transferred (Current argument will transfer 1 APT)
          type: "number",
        },
      ],
      usePaymaster: true, // Sponsor the transaction
    };

    const logEnabled = true;

    try {
      const response = await aptosTransaction(transactionArgs,"<YOUR_API_KEY>", logEnabled);
      setTransactionResult(response);
    } catch (error) {
      console.error("Error executing transaction:", error);
    }
  };

  return (
    <div>
      <button onClick={executeTransaction}>Execute Transaction</button>
      {transactionResult && (
        <div>
          <h2>Transaction Result:</h2>
          <p>Success: {transactionResult.success.toString()}</p>
          <p>Data: {JSON.stringify(transactionResult.data)}</p>
        </div>
      )}
    </div>
  );
};

export default TransactionComponent;
```
