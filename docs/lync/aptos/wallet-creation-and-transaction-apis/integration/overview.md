---
sidebar_label: "API Overview"
custom_edit_url: null
id: api-overview
---

# API Overview

Here's a basic overview of the API endpoints provided by Lync for wallet creation and transactions on the Aptos blockchain network.

These APIs enables the management of wallets by providing endpoints for creating new wallets and retrieving existing ones. Each wallet is associated with a unique address and private key. These APIs also facilitate the minting of NFT transactions and any generic transactions on the Aptos blockchain network. You can easily integrate mint NFT transactions and any generic transactions on Aptos using our APIs.

- Postman Collection - [View Collection](https://lyncworld.postman.co/workspace/Integrating-Aptos-SDK-to-Your-P~fa081133-4b96-41e6-87eb-a68cf9c53e7b/collection/34190925-ee7283fe-1266-42e5-8fe3-0877ab39d5db?action=share&creator=34190925)
- BASE_URL - https://server-aptos-sdk.lync.world/api
- Routes
  - [To create a new wallet](./create-new-wallet.mdx) - `{{ BASE_URL }}/create-wallet`
  - [To get already created wallet](./get-already-created-wallet.mdx) - `{{ BASE_URL }}/get_wallet`

In the upcoming sections, we will learn about the usage of all the above API endpoints individually.

> Note -
>
> Ensure to replace `{{ BASE_URL }}` with the actual base URL: https://server-aptos-sdk.lync.world/api.
>
> Always use secure storage practices for private keys, as they are essential for managing wallet access.
