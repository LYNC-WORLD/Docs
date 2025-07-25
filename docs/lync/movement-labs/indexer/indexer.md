---
sidebar_label: '📇 Indexer'
id: 'movement-indexer'
custom_edit_url: null
hide_table_of_contents: true
---
# 📇 Indexer
<span className="text-lg text-[rgb(192,192,192)]">There are main no-code components to indexing with the Movement on-chain data.</span>

Most applications require an indexer to efficiently query for on-chain state as the Movement Node API provides only a basic, stable API and does not support data shaping required for rich user experiences. The LYNC Indexer on Movement processes raw blockchain data for app-specific needs, enabling low-latency and enhanced experiences for end-user applications.

Here’s an example of how you can query for the Current Coin Balances of an account. More usage examples can be found in example queries.


<iframe width="100%" height="400" src="https://www.youtube.com/embed/LUf3xLoBa3E?si=S92sUAvGLxUttlMZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Get an NFT Data

Base URL: ```https://mevm-devnet.lync.world/subgraphs/name/mevm```

```bash
POST /getNftBalances
```

import {IndexerGraphQl} from '@site/src/components/MOVEMENT/IndexerGraphQl'
import BrowserOnly from "@docusaurus/BrowserOnly";

<BrowserOnly>
    {() => <IndexerGraphQl/>}
    
</BrowserOnly>