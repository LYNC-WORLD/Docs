---
sidebar_label: "JavaScript/ TypeScript"
id: javascript-typescript
custom_edit_url: null
---

# JavaScript/ TypeScript

<span className="text-lg text-[rgb(192,192,192)]">Easily integrate in your JS/TS application using the sdk.</span>
<br/>
<br/>

**LYNC Paymaster SDK supporting movement on `npmjs`**: https://www.npmjs.com/package/lync-paymaster-supra-sdk

### Install the SDK

```bash
npm install lync-paymaster-supra-sdk --save
```

### Import the dependencies

````javascript
import { performPaymasterTransaction } from "lync-paymaster-supra-sdk";
import { BCS } from "supra-l1-sdk";```

### Get API Keys from [LYNC Dashboard](https://dashboard.lync.world/)
```javascript
// From LYNC Dashboard
const apiKey = "LYNC API KEY Dashboard";

// Get this from LYNC
const lyncAuthKey = "Get this from LYNC Support";
````

### The `performPaymasterTransaction` function

```javascript
import {
  TxnBuilderTypes,
  TransactionResponse
} from "supra-l1-sdk";

interface PaymasterTransactionReturnData {
  receipt: TransactionResponse;
  accountCreationReceipt: TransactionResponse;
  privateKey: string;
}

/**
 * The account information.
 * @param {string} privateKey - The private key for the account.
 * @param {string} accountAddress - The account address.
 */
interface AccountInfo {
  privateKey: string;
  accountAddress: string;
}

function performPaymasterTransaction(
  lyncAuthKey: string,
  supraNetwork: "testnet_supra" | "mainnet_supra",
  apiKey: string,
  inputTransaction: {
    entryFnStr: `0x${string}::${string}::${string}`;
    entryFnTypeArgs?: TxnBuilderTypes.TypeTag[];
    entryFnArgs: Uint8Array[];
  },
  showLogs: boolean,
  accountData?: AccountInfo,
): Promise<PaymasterTransactionReturnData>;
```

### Using the `performPaymasterTransaction` function

```javascript
const accountData = {
  privateKey: "0x....",
  accountAddress: "0x....",
};

const data = await performPaymasterTransaction(
  lyncAuthKey,
  "testnet_supra", // "testnet_supra" or "mainnet_supra",
  apiKey,
  {
    entryFnStr:
      "0x1b89ab160c9ec18b5ee37f6d2774b5e8a9433c620a98bad062b6b738bd829316::tst_unity::set_data_num_u32",
    entryFnArgs: [BCS.bcsSerializeU32(10)],
  },
  false, // show logs or not
  accountData // optional - will generate a new account if not provided
);

console.log(data);
```
