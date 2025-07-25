---
sidebar_label: "Example Codes in React & TypeScript"
id: example-codes-in-react-and-typescript
custom_edit_url: null
---

# Example Codes in React & TypeScript

In this Section, you will see examples of how to use the functions provided by the SDK to integrate authentication, user management, and Movement transaction execution into your React project. All the example uses TypeScript. However, the SDK can also be used with React and JavaScript in the same way, as shown in the examples.

## Functions Overview

### 1. Authenticating user with Google Sign-In

```javascript
// Function Signature -

const signInWithGoogle = (network: MovementNetwork, apiKey: string, logEnabled?: boolean) => Promise<SignInWithGoogleReturn>
```

This function allows users to sign in with Google using OAuthProvider.

Parameters:

- `network`: Network Type Enum(`MovementNetwork`).
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

// Import the `signInWithGoogle` function from our SDK
import { signInWithGoogle } from "@lyncworld/movement-social-login-sdk";

const SignInButton = () => {
  // Create an asynchronous function to handle the Google sign-in process
  const handleSignIn = async () => {
    try {
      // Use the `signInWithGoogle` method from the SDK to authenticate the user.
      // This function takes three parameters:
      // 1. `MovementNetwork.Testnet` - Specifies the network environment (Testnet in this case).
      // 2. `"<YOUR_API_KEY>"` - Your API key required for authentication.
      // 3. `true` - A boolean flag that enables specific authentication options if applicable.

      const response = await signInWithGoogle(
        MovementNetwork.Testnet,
        "<YOUR_API_KEY>",
        true
      );

      // After authentication, handle the response accordingly.
      if (response.success) {
        // If authentication is successful, log the user data to the console.
        console.log("User data:", response.user);
      } else {
        // If authentication fails, log the error message returned by the function.
        console.log("Error:", response.message);
      }
    } catch (error) {
      // Catch and log any unexpected errors that may occur during the authentication process.
      console.error("An error occurred:", error);
    }
  };

  // Render a button that triggers the sign-in function when clicked.
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

// Import the `signOutUser` function from our SDK
import { signOutUser } from "@lyncworld/movement-social-login-sdk";

const SignOutButton = () => {
  // Create a function to call the `signOutUser` function
  // and handle your custom sign-out logic
  const handleSignOut = async () => {
    try {
      // Your custom logic before sign-out goes here...

      // Use the `signOutUser` method from the SDK to sign the user out.
      // This function signs a user out of the application and returns an object that
      // contains a success status and (optionally) an error message based on the
      // result of sign out (refer to above-described documentation for return values)
      const response = await signOutUser(true);

      // Your custom logic after sign-out goes here...
      if (response.success) {
        // If sign-out is successful, the function will return `true` for success
        console.log("User signed out successfully");
      } else {
        // If sign-out fails, the function will return `false` for success
        // and an error message describing why the sign-out has failed
        console.log("Error:", response.message);
      }
    } catch (error) {
      // Your custom error handling logic goes here...
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

const getUserData = (email: string, network: MovementNetwork, apiKey: string, logEnabled?: boolean) => Promise<GetUserProfileReturn>
```

This function is an asynchronous function that fetches a user's profile from the server.

Parameters:

- `email`: The email of the user.
- `network`: Network Type Enum(`MovementNetwork`).
- `apiKey` : Your API key from generated from LYNC dashboard - https://dashboard.lync.world
- `logEnabled (Optional)`: Enable/disable logging. The default is true.

Return Type:

- `Promise<GetUserProfileReturn>:`

  - `{ success: true; data: UserData; } if successful.`

  - `{ success: false; data: string; } if unsuccessful.`

**Errors:**

The function can throw an error if the fetch operation fails. The error message is logged if logging is enabled.

**Example:**

Here is an example of a React component that imports and uses the `getUserData` function:

```javascript
import React, { useEffect, useState } from "react";

// Import the `getUserProfile` function from our SDK
import { getUserProfile } from "@lyncworld/movement-social-login-sdk";

const UserProfileComponent = () => {
  // React state to store the user's profile data returned by `getUserProfile`
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Create an asynchronous function to fetch the user's profile details
    const fetchUserProfile = async () => {
      // Use the `getUserProfile` method from the SDK to fetch user details.
      // This function takes three parameters:
      // 1. `"test@example.com"` - The email of the user whose profile is to be retrieved.
      // 2. `MovementNetwork.Testnet` - Specifies the network environment (Testnet in this case).
      // 3. `"<YOUR_API_KEY>"` - Your API key required for authentication.

      const response = await getUserProfile(
        "test@example.com",
        MovementNetwork.Testnet,
        "<YOUR_API_KEY>"
      );

      // After fetching, handle the response accordingly
      if (response.success) {
        // If the request is successful, store the returned user data in state
        setUserProfile(response.data);
      } else {
        // If the request fails, log the error message returned by the function
        console.error(response.message);
      }
    };

    // Call the function on component mount to fetch user data
    fetchUserProfile();
  }, []);

  return (
    <div>
      {/* Render user profile details if data is available */}
      {userProfile && (
        <div>
          <h2>{userProfile.name}</h2>
          <p>{userProfile.email}</p>
          {/* Render additional user profile data if needed */}
        </div>
      )}
    </div>
  );
};

export default UserProfileComponent;
```

### 4. Generic Transactions on Movement Networks

```javascript
// Function Signature

const movementTransaction = (args: MovementTransactionFuncArgs, apiKey: string, logEnabled?: boolean) => Promise<MovementTransactionReturn>;
```

This is an asynchronous function that executes a generic Movement transaction.

Parameters:

- `args (MovementTransactionFuncArgs)`: The arguments for the generic Movement transaction. It is an object that includes the following properties:

  - `email (string)`: The email of the user.

  - `network (MovementNetwork)`: Network type enum (`MovementNetwork`).

  - `accountAddress (string)`: The wallet address of the currently signed-in user.

  - `apiKey(string)`: Your API key from generated from LYNC dashboard - https://dashboard.lync.world

  - `contractAddress (string)`: The contract address.

  - `contractName (string)`: The contract name.

  - `functionName (string)`: The function name.

  - `arguments (Array)`: The arguments for the transaction. Each argument is an object that includes the following properties:

    - `argument (string)`: The argument used by the function.

    - `type (TransactionArgumentTypes)`: The type of the argument. It can be `TransactionArgumentTypes.String`, `TransactionArgumentTypes.Number`, `TransactionArgumentTypes.Boolean`, `TransactionArgumentTypes.ByteArray`, or `TransactionArgumentTypes.Signature`.

  - `usePaymaster (Optional)`: Enable/disable the use of paymaster. The default is false. If you enable paymaster the transaction will be sponsored. Also, if the wallet doesn't exist, it will be created automatically before the transaction.

  - `apiKey`: Your API key from generated from LYNC dashboard - https://dashboard.lync.world

  - `logEnabled (Optional)`: Enable/disable logging. The default is true.

Return Type:

- `Promise<MovementTransactionReturn>:`

  - `{ success: true; data: MovementTransactionData; } if successful.`

  - `{ success: false; data: string; } if unsuccessful.`

**Errors:**

The function can throw an error if the transaction fails. The error message is logged if logging is enabled.

**Example:**

Here is an example of a React component that imports and uses the `movementTransaction` function to perform a simple movement transaction:

```javascript
import React, { useState } from "react";
import { movementTransaction } from "@lyncworld/movement-social-login-sdk";

const TransactionComponent = () => {
  // React state to set transaction response data returned by the `movementTransaction` function
  const [transactionResult, setTransactionResult] = useState(null);

  // Create a function to call the `movementTransaction` function
  // and handle your custom logic here
  const executeTransaction = async () => {
    // Sample arguments required by the `movementTransaction` function to process a transaction
    const transactionArgs = {
      email: "user@example.com", // Email id of the sender
      network: MovementNetwork.Testnet, // Network on which the transaction will execute
      apiKey: "<YOUR_API_KEY>", // Your API key required for authentication
      accountAddress: "0x0000", // The wallet address of the sender
      contractAddress:
        "0x30b16e76bbd67b41387a33de68ab489fec1ecab210c1b06413121e5da7ba839f", // Contract address of the deployed contract on the Movement network specified above
      contractName: "lync_contract", // Name of the contract
      functionName: "hit", // Name of the function to be executed
      arguments: [], // Arguments required by the function to be executed
      usePaymaster: true, // Optional. If true, the transaction fee will be sponsored by Lync, else the transaction fee will be paid by the sender
    };

    const logEnabled = true; // Enable logging for debugging

    try {
      // Use the `movementTransaction` method from the SDK to send the transaction.
      // This function will initiate and execute a transaction on the specified
      // Movement network and return an object that contains a success status
      // and transaction result or an error message based on the success of execution
      // of the transaction.
      const response = await movementTransaction(
        transactionArgs,
        "<YOUR_API_KEY>",
        logEnabled
      );

      // Your custom logic after execution of the transaction goes here...
      if (response.success) {
        // If the request is successful, set the returned transaction data
        setTransactionResult(response);
      } else {
        // If the request fails, log the error message
        console.error(response.message);
      }
    } catch (error) {
      // Custom error handling logic
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
