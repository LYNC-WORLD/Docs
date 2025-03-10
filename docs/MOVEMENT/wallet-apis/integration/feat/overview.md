---
sidebar_label: 'API Overview'
custom_edit_url: null
id: 'movement-overview'

---
# API Overview

Here's a basic overview of the API endpoints provided by Lync for wallet creation and transactions on the Movement blockchain network.

These APIs enables the management of wallets by providing endpoints for creating new wallets and retrieving existing ones. Each wallet is associated with a unique address and private key. These APIs also facilitate the minting of NFT transactions and any generic transactions on the Movement blockchain network. You can easily integrate mint NFT transactions and any generic transactions on Movement using our APIs.


- BASE_URL - https://movement-sdk.lync.world/api/v1
- Routes
  - [To create a new wallet](./create-new-wallet.mdx) - `{{ BASE_URL }}/wallet/create`
  - [To get already created wallet](./get-already-created-wallet.mdx) - `{{ BASE_URL }}/wallet/get`
  - [Mint NFT transactions](./mint-nft-transactions.mdx) - `{{ BASE_URL }}/nft/mint-nft`

In the upcoming sections, we will learn about the usage of all the above API endpoints individually.

> Note -
>
> Ensure to replace `{{ BASE_URL }}` with the actual base URL:  https://movement-sdk.lync.world/api/v1.
>
> Always use secure storage practices for private keys, as they are essential for managing wallet access.