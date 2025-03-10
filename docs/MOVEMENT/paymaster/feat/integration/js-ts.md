---
sidebar_label: 'JavaScript/ TypeScript'
id: movement-paymaster-integration-js-ts
custom_edit_url: null
---
# JavaScript/ TypeScript

<span className="text-lg text-[rgb(192,192,192)]">Easily integrate in your JS/TS application using the sdk.</span>
<br/>
<br/>

**LYNC Paymaster SDK supporting movement on ```npmjs```**: https://www.npmjs.com/package/lync-paymaster-movement-sdk

### Install the SDK

```bash
npm install lync-paymaster-movement-sdk --save
```

### Import the dependencies
```javascript
import { performPaymasterTransaction } from "lync-paymaster-movement-sdk";
import { Network } from "@aptos-labs/ts-sdk";
```

### Get API Keys from [LYNC Dashboard](https://dashboard.lync.world/)    
```javascript
// From LYNC Dashboard
const apiKey = "LYNC API KEY Dashboard";

// Get this from LYNC
const lyncAuthKey = "Get this from LYNC Support";
```

### The ```performPaymasterTransaction``` function
```javascript
import { 
  CommittedTransactionResponse, 
  InputEntryFunctionData, 
  Network 
} from "@aptos-labs/ts-sdk";

/**
 * The data returned from a paymaster transaction.
 * @param {CommittedTransactionResponse} receipt - The transaction receipt.
 * @param {CommittedTransactionResponse} accountCreationReceipt - The account creation receipt.
 * @param {string} privateKey - The private key for the account.
 */
interface PaymasterTransactionReturnData {
  receipt: CommittedTransactionResponse;
  accountCreationReceipt: CommittedTransactionResponse;
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

/**
 * Performs a paymaster transaction using the LYNC paymaster API.
 *
 * @param {string} lyncAuthKey - The LYNC API key for authentication.
 * @param {Network} network - The network to perform the transaction on. Should be CUSTOM for movement networks.
 * @param {string} apiKey - The LYNC API key for authentication.
 * @param {InputEntryFunctionData} inputTransaction - The input data for the transaction.
 * @param {boolean} showLogs - Whether to show logs or not.
 * @param {"porto" | "suzuka"} movementNetwork - The movement network to use(optional). Required if network is CUSTOM.
 * @param {AccountInfo} accountData - The account data(privateKey and accountAddress) for the transaction(optional). If not provided, a new account will be generated.
 * @returns {Promise<PaymasterTransactionReturnData>} The data returned from a paymaster transaction.
 */
async function performPaymasterTransaction(
  lyncAuthKey: string,
  network: Network,
  apiKey: string,
  inputTransaction: InputEntryFunctionData,
  showLogs: boolean,
  movementNetwork?: "porto" | "suzuka",
  accountData?: AccountInfo,
): Promise<PaymasterTransactionReturnData> ;
```

### Using the ```performPaymasterTransaction``` function

```javascript
const accountData = {
  privateKey: "0x....",
  accountAddress: "0x...."
};

const data = await performPaymasterTransaction(
  lyncAuthKey,
  Network.CUSTOM, // For movement networks
  apiKey,
  {
    function: "0x1::aptos_account::transfer", // entry function
    functionArguments: [
      "0x587f66c999fed81c8872c5ddabed1e7049c790d750d2a796313a32702dcff962", // to address
      "100000000" // 1 APT = 100000000
    ]
  },
  false, // show logs or not
  "porto", // For porto movement testnet
  accountData // optional - will generate a new account if not provided
);

console.log(data);

```
