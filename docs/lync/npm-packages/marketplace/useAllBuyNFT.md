---
sidebar_label: "Hook: useAllBuyNFT"
id: "hook-useallbuynft"
custom_edit_url: null
---

# Hook: useAllBuyNFT

<span className="text-xl text-[rgb(192,192,192)]">Fetch all NFT of Collection which are available for Buying with metadata.</span>
<br/>
<br/>

Fetch all NFTs and their metadata for ERC-721 and ERC-1155, NFTs available to buy and takes in a `contractAddress` and `chainId`.

**Interface**

```typescript
function useAllBuyNFT(contractAddress?: string, chainId?: string);
```

**Response**

```typescript
type useAllBuyNFTType = {
  allBuyNFT: [{ Object }];
  isLoading?: bool;
};
```

Example Code:

```typescript
import {ChainConfig, useAllBuyNFT} from "@lyncworld/nft-marketplace";

function App() {
const { isLoading, allBuyNFT } = useAllBuyNFT(
    "0x9342b1039949d536b2eb456de198c26362daa523",
    ChainConfig.MATIC_MUMBAI
);


```

Not ready to create your own UI yet, don't worry we have got you covered!!
Example Code:

```typescript
import { ChainConfig, LyncListedNFTToBuy } from "@lyncworld/nft-marketplace";

<LyncListedNFTToBuy
  contractAddress={"0xa879c01913f56419605fde494b5c140a6d146a1b"}
  chainId={ChainConfig.MATIC_MUMBAI}
/>;
```
