---
sidebar_label: 'Hook: useAllCollectionNFT'
id: 'packages-marketplace-useAllCollectionNFT'
custom_edit_url: null
---
# Hook: useAllCollectionNFT
<span className="text-xl text-[rgb(192,192,192)]">Fetch an entire NFT Collection with its metadata and all NFT's metadata in that collection.</span>
<br/>
<br/>

Fetch all NFTs and contracts metadata for a given ERC-721 and ERC-1155 contract and takes in a ```contractAddress``` and ```chainId```

**Interface**
```typescript
function useAllCollectionNFT( 
contractAddress?:string, 
chainId?: string )
```

**Response**
```typescript
type useAllCollectionNFTType = {
  allNfts: [{Object}];
  isLoading?: bool;
  contractMetadata?: any;
};
```

Example Code:
```typescript
import {ChainConfig, useAllCollectionNFT} from "@lyncworld/nft-marketplace";

function App() {
    const { allNfts, isLoading, contractMetadata } = 
    useAllCollectionNFT(
        "0x9342b1039949d536b2eb456de198c26362daa523", 
        ChainConfig.MATIC_MUMBAI
    );
}
```

Not ready to create your own UI yet, don't worry we have got you covered!!
Example Code:
```typescript
import {LyncCollection, ChainConfig} from "@lyncworld/nft-marketplace";
<LyncCollection
    bannerImageUrl={
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    }
    collectionDescription={"Welcome"}
    contractAddress={"0xa879c01913f56419605fde494b5c140a6d146a1b"}
    chainId={ChainConfig.MATIC_MUMBAI}
/>
```