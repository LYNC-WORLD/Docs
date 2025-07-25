---
sidebar_label: "Example code for creating a new lootbox"
id: example-code-for-creating-a-new-lootbox
custom_edit_url: null
---

# Example code for creating a new lootbox

## Example:

```typescript
import { LyncLootBoxManager, ERC1155Item, ERC20Item, ERC721Item, LootBoxError } from "@lyncworld/lootbox-evm-sdk";
import { ethers } from "ethers";

const lootboxManager = new LyncLootBoxManager();

const erc20Items: ERC20Item = [...]; // array of ERC20 items
const erc721Items: ERC721Item = [...]; // array of ERC721 items
const erc1155Items: ERC1155Item = [...]; // array of ERC1155 items
const whitelist = [...]; // array of whitelisted addresses (Keep empty for no whitelist.)
const trustedForwarder = '0x...'; // trusted forwarder address
const startLootbox = true;

async function createNewLootbox() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const responseData = await lootboxManager.createLootbox(
      signer,
      erc20Items,
      erc721Items,
      erc1155Items,
      whitelist,
      trustedForwarder,
      startLootbox
    );
    const lootboxData = responseData[0].data;

    if (!lootboxData) {
      console.error("Something went wrong while creating lootbox. Please try again later.");
      return;
    }

    return lootboxData;
  } catch (err: unknown) {
    console.error("Error creating lootbox: ", err);

    if (err instanceof LootBoxError || err instanceof Error) {
      toast.error(err.message);
    } else {
      toast.error("Something went wrong while creating lootbox. Please try again later.");
    }
  } finally {
    setCreatingLootbox(false);
  }
}
```

## Types used in the above example:

```typescript
type RangeInclusive = {
  // start of the range
  start: BigNumberish;

  // end of the range
  end: BigNumberish;
};

type ERC20Item = {
  contractAddress?: string;
  name?: string;
  symbol?: string;

  // When a user opens the loot box, they will get token amounts between this range
  pickRange: RangeInclusive;

  // Total amount of tokens to be deposited to the loot box for rewards
  tokenAmount: BigNumberish;
};

type ERC721Item = {
  contractAddress?: string;
  name?: string;
  symbol?: string;
  uriBase?: string;

  // When a user opens the loot box, they will get randomly NFTs with token IDs between
  // this range.
  pickRange: RangeInclusive;

  // Range of token IDs to be deposited to the loot box for rewards
  inputTokenIdRange: RangeInclusive;

  // Array of unique token IDs to be deposited to the loot box for rewards
  inputTokenIds: BigNumberish[];
};

Note - In the above type for ERC721 item, either `inputTokenIdRange` or `inputTokenIds` has to be passed when creating a lootbox using the SDK. You cannot pass both `inputTokenIdRange` and `inputTokenIds`.

type ERC1155Item = {
  contractAddress?: string;
  name?: string;
  symbol?: string;
  uriBase?: string;

  // When a user opens the loot box, they will get randomly NFTs with token IDs between
  // this range.
  pickRange: RangeInclusive;

  // Range of token IDs to be deposited to the loot box for rewards
  inputTokenIdRange: RangeInclusive;

  // Fixed token amounts for each token IDS provided in `inputTokenIdRange` (above)
  inputTokenAmountFixed: BigNumberish;

  // Fixed range of NFTs to be picked corresponding to the `inputTokenIdRange`
  // (above) when a user opens a loot box.
  amountPickRangeFixed: RangeInclusive;

  // For example - Let's say you have `inputTokenIdRange` {start: 1, end: 10} with
  // `inputTokenAmountFixed` 20 (for each token ID 1 through 10) and
  // `amountPickRangeFixed` {start: 5, end: 8} (for each token Ids 1 through 10).
  // Then when a user opens a lootbox and gets the token ID 2 as a reward.
  // Then he/she will receive the token amount in the range of 5 to 8 as passed in
  // `amountPickRangeFixed`

  // Array of unique token IDs to be deposited to the loot box for rewards
  inputTokenIds: BigNumberish[];

  // Array of token amounts corresponding to the `inputTokenIds` (above)
  inputTokenAmounts: BigNumberish[];

  // Array of range of NFTs to be picked corresponding to the `inputTokenIds` (above) when a user opens a loot box.
  amountPickRanges: RangeInclusive[];

  // For example - Let's say you have `inputTokenIds` [1, 2, 3] with
  // `inputTokenAmounts` [40, 50, 60] and `amountPickRanges` [{start: 5, end: 6},
  // {start: 7, end: 8}, {start: 9, end: 10}]. Then when a user opens a loot box and get
  // the token ID 2 as a reward. Then he/she will receive the token amount in the range
  // of 7 to 8 as passed in `amountPickRanges`
};

Note - In the above type for the ERC1155 item, either `inputTokenIdRange`, `inputTokenAmountFixed`, `amountPickRangeFixed` or `inputTokenIds`, `inputTokenAmounts`, `amountPickRanges` has to be passed when creating a loot box using the SDK. You cannot pass both `inputTokenIdRange`, `inputTokenAmountFixed`, `amountPickRangeFixed` and `inputTokenIds`, `inputTokenAmounts`, `amountPickRanges`.

enum LBErrorCodes {
  NORMALIZATION_ERROR = "NORMALIZATION_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  INITIALIZATION_ERROR = "INITIALIZATION_ERROR",
  LOOTBOX_OPENED_ERROR = "LOOTBOX_OPENED_ERROR",
  LOOTBOX_MULTICALL_OPEN_ERROR = "LOOTBOX_MULTICALL_OPEN_ERROR",
  LOOTBOX_MULTICALL_CLAIM_ERROR = "LOOTBOX_MULTICALL_CLAIM_ERROR",
  TOO_MANY_REQUESTS_ERROR = "TOO_MANY_REQUESTS_ERROR",
  LOOTBOX_REWARDS_CLAIM_ERROR = "LOOTBOX_REWARDS_CLAIM_ERROR",
  RNG_PENDING_ERROR = "RNG_PENDING_ERROR",
  RNG_TIMEOUT_ERROR = "RNG_TIMEOUT_ERROR",
  LOOTBOX_ACTIVE_ERROR = "LOOTBOX_ACTIVE_ERROR",
  LOOTBOX_INACTIVE_ERROR = "LOOTBOX_INACTIVE_ERROR",
  LOOTBOX_PERMANENTLY_STOPPED_ERROR = "LOOTBOX_PERMANENTLY_STOPPED_ERROR",
  APPROVAL_ERROR = "APPROVAL_ERROR",
  LOOTBOX_CREATION_ERROR = "LOOTBOX_CREATION_ERROR",
  MERKLE_ROOT_MISMATCH_ERROR = "MERKLE_ROOT_MISMATCH_ERROR",
  SERVER_ERROR = "SERVER_ERROR",
  LOOTBOX_ACTIVATION_ERROR = "LOOTBOX_ACTIVATION_ERROR",
  LOOTBOX_ITEM_REMOVAL_ERROR = "LOOTBOX_ITEM_REMOVAL_ERROR",
  REMAINING_OPENS_UPDATE_ERROR = "REMAINING_OPENS_UPDATE_ERROR",
  TRUSTED_FORWARDER_UPDATE_ERROR = "TRUSTED_FORWARDER_UPDATE_ERROR",
  TRANSFER_OWNER_ERROR = "TRANSFER_OWNER_ERROR",
}

interface ApprovalData {
  itemAddress: string;
  itemType: ItemType;
  amount?: string;
}

interface CreateLootBoxData {
  lootBoxAddress: string;
  itemAddresses: string[];
}

interface TransactionResponse {
  txn: ContractTransaction;
  receipt: ContractReceipt;
  data?: ApprovalData | CreateLootBoxData;
}
```
