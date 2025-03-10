---
sidebar_label: 'Get NFTs Owned by an Account'
id: 'movement-indexer-example-3'
custom_edit_url: null
hide_table_of_contents: true
---
# Get NFTs Owned by an Account
<span className="text-lg text-[rgb(192,192,192)]">Retrieves the various ERC-20 Token balance by passing wallet address</span>

```GetAccountNfts ``` retrieves a list of NFTs owned by a specified account address. This query provides comprehensive details about each token, including its collection details, description, and unique identifiers. It is ideal for platforms that need to display the NFT portfolios of users or provide insights into the NFT market holdings.

Base URL: https://mevm-devnet.lync.world/subgraphs/name/mevm

import {NFT} from '@site/src/components/MOVEMENT/NFT'
import BrowserOnly from "@docusaurus/BrowserOnly";

<BrowserOnly>
    {() => <NFT/>}
    
</BrowserOnly>