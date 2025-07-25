---
sidebar_label: "Hook: useNFTDetails"
id: "hook-usenftdetails"
custom_edit_url: null
---

# Hook: useNFTDetails

<!-- <span className="text-xl text-[rgb(192,192,192)]">Fetch all NFT of a particular wallet address</span>
<br/>
<br/> -->

Fetch all details of an NFT, for a given ERC-721 and ERC-1155 contract and takes in `walletAddress`,`contractAddress`,`tokenId` and `chainId`.

**Interface**

```typescript
function useNFTDetails(
  walletAddress?: string,
  contractAddress?: string,
  tokenId?: String,
  chainId?: string
);
```

**Response**

```typescript
type useNFTDetails = {
    owners?: [array of owner ];
    isLoading?: bool;
    listingData?:[{listing data if item is listed  ex. price, id, nftAddress, seller etc}],
    nftMetaData?:,{nft meta data ex. title, description ,media etc},
    lendingData?:,{lendingData if item is on lend ex. lenderAddress, pricePerDay, maxRentDuration etc}
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
import { ChainConfig, LyncNFTDetails } from "@lyncworld/nft-marketplace";

const { provider, walletAddress } = useContext(AuthContext);

<LyncNFTDetails
  contractAddress={"0x9342b1039949d536b2eb456de198c26362daa523"}
  chainId={ChainConfig.MATIC_MUMBAI}
  tokenId={"1"}
  provider={provider}
  walletAddress={walletAddress}
/>;
```
