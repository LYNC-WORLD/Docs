---
sidebar_label: "API Overview"
custom_edit_url: null
id: "metis-overview"
---

# API Overview

Here's a basic overview of the API endpoints provided by Lync for wallet creation and transactions on the Metis blockchain network.

These APIs enables the management of wallets by providing endpoints for creating new wallets and retrieving existing ones. Each wallet is associated with a unique address and private key. These APIs also facilitate the minting of NFT transactions and any generic transactions on the Metis blockchain network. You can easily integrate mint NFT transactions and any generic transactions on Metis using our APIs.

- BASE_URL - https://creatorserver.lync.world/metis
- Routes
  - [To create a new wallet](./create-new-wallet.mdx) - `{{ BASE_URL }}/create-wallet`
  - [To get already created wallet](./get-already-created-wallet.mdx) - `{{ BASE_URL }}/get-wallet`
  - [Mint NFT transactions](./mint-nft-transactions.mdx) - `{{ BASE_URL }}/mint-nft`

In the upcoming sections, we will learn about the usage of all the above API endpoints individually.

> Note -
>
> Ensure to replace `{{ BASE_URL }}` with the actual base URL: https://creatorserver.lync.world/metis.
>
> Always use secure storage practices for private keys, as they are essential for managing wallet access.
