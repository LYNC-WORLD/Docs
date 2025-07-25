---
sidebar_label: "Hook: useAllOwnerNFT"
id: "hook-useallownernft"
custom_edit_url: null
---

# Hook: useAllOwnerNFT

<span className="text-xl text-[rgb(192,192,192)]">Fetch all NFT of a particular wallet address</span>
<br/>
<br/>

Fetch all NFTs and their metadata for a given ERC-721 and ERC-1155 contract and takes in `walletAddress`,`contractAddress` and `chainId`.

**Interface**

```typescript
function useAllOwnerNFT(
  walletAddress?: string,
  contractAddress?: string,
  chainId?: string
);
```

**Response**

```typescript
type useAllOwnerNFTType = {
  allOwnerNFT: [{ Object }];
  isLoading?: bool;
};
```

Example Code:

```typescript
import {ChainConfig, useAllOwnerNFT} from "@lyncworld/nft-marketplace";
import { AuthContext } from "lync-wallet-sdk";

function App() {
const {  walletAddress } = useContext(AuthContext);

const { isLoading, allOwnerNFT } = useAllOwnerNFT(
    walletAddress,
    "0x9342b1039949d536b2eb456de198c26362daa523",
    ChainConfig.MATIC_MUMBAI
);
```

Not ready to create your own UI yet, don't worry we have got you covered!!
Example Code:

```typescript
import { AuthContext } from "lync-wallet-sdk";
import { ChainConfig, LyncOwnersNFT } from "@lyncworld/nft-marketplace";

const { provider, walletAddress } = useContext(AuthContext);

<LyncOwnersNFT
  contractAddress={"0xd82990166ac626ed191ffeda2a73ba364c340748"}
  chainId={ChainConfig.ETH_GOERLI}
  ownerAddress={walletAddress}
/>;
```
