---
sidebar_label: "Hook: useAllNFTForRent"
id: "hook-useallnftforrent"
custom_edit_url: null
---

# Hook: useAllNFTForRent

<span className="text-xl text-[rgb(192,192,192)]">Fetch all NFT which are available to rent</span>
<br/>
<br/>

Fetch all details of an NFT, for a given ERC-721 and ERC-1155 contract and takes in `contractAddress` and `chainId`.

**Interface**

```typescript
function useAllNFTForRent(contractAddress?: string, chainId?: string);
```

**Response**

```typescript
type useAllNFTForRent = {
  allNftForRent?: [{}];
  isLoading?: bool;
};
```

Example Code:

```typescript
import {ChainConfig, useNFTDetails} from "lync-marketplace";
import { AuthContext } from "lync-wallet-sdk";

function App() {

const {  walletAddress } = useContext(AuthContext);

const {isLoading, allNftForRent } = useNFTDetails(
    "0x9342b1039949d536b2eb456de198c26362daa523",
    "1",
);

```

Not ready to create your own UI yet, don't worry we have got you covered!!
Example Code:

```typescript
import { ChainConfig, LyncNFTForRent } from "@lyncworld/nft-marketplace";

<LyncNFTForRent
  contractAddress={"0x9342b1039949d536b2eb456de198c26362daa523"}
  chainId={ChainConfig.MATIC_MUMBAI}
/>;
```
