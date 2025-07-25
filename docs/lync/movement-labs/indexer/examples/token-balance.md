---
sidebar_label: 'Get Token Balances'
id: 'movement-indexer-example-2'
custom_edit_url: null
hide_table_of_contents: true
---
# Get Token Balances
<span className="text-lg text-[rgb(192,192,192)]">Retrieves the various ERC-20 Token balance by passing wallet address</span>

```GetCoinBalances ``` retrieves the current balances for various coin types associated with a specified account address. This is crucial for platforms requiring real-time information on account coin holdings.

Base URL: https://mevm-devnet.lync.world/subgraphs/name/mevm

import {TokenBalance} from '@site/src/components/MOVEMENT/TokenBalance'
import BrowserOnly from "@docusaurus/BrowserOnly";

<BrowserOnly>
    {() => <TokenBalance/>}
    
</BrowserOnly>