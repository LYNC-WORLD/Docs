---
sidebar_label: 'Get Token Info'
id: 'movement-indexer-example-1'
custom_edit_url: null
hide_table_of_contents: true
---
# Get Token Info
<span className="text-lg text-[rgb(192,192,192)]">Retrieves the ERC-20 Token Data from contract address</span>

```GetTokenInfo``` can fetch data such as the symbol, name, decimals, and the coin type itself. This is particularly useful for applications needing to display token details.

Base URL: https://mevm-devnet.lync.world/subgraphs/name/mevm

import {TokenInfo} from '@site/src/components/MOVEMENT/TokenInfo'
import BrowserOnly from "@docusaurus/BrowserOnly";

<BrowserOnly>
    {() => <TokenInfo/>}
    
</BrowserOnly>