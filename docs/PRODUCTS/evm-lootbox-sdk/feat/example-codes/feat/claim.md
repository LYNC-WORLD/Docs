---
sidebar_label: 'Example code for claiming a new lootbox'
id: evm-lootbox-sdk-example-codes-claim
custom_edit_url: null
---

# Example code for claiming a new lootbox

## Example:

```typescript
import { ChainIdentifier, LootBoxError, LyncLootBox } from "@lyncworld/lootbox-evm-sdk";

const lootbox = new LyncLootBox();
const provider = new ethers.providers.Web3Provider(window.ethereum);

const lootboxId = "0x..." // a valid lootbox id created using `createLootBox` method

lootbox
	.initialize(ChainIdentifier.BASE_SEPOLIA, provider, lootboxId)
	.then((response) => console.log(response))
	.catch((err) => console.error("Error in initializing lootbox: ", err));

async function openLootbox() {
    try {
      const hasClaims = await lootbox.hasPendingClaims(String(walletAddress)); // checks if you have anything to claim from your open(s)
      if (!hasClaims) return;

      const signer = provider.getSigner();
      const responseData = await lootbox.claimRewards(signer);
      console.log("Transaction response: ", responseData);
    } catch (err: unknown) {
      console.error("Error in handleClaimNfts: ", err);

      if (err instanceof LootBoxError) {
		      console.error(err.message);
      }
    }
  }
```