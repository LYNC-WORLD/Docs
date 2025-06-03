---
sidebar_label: "Overview"
id: api-overview
custom_edit_url: null
---

# API Overview

- BASE_URL - https://server.mew.gg/api/v1/
- your-x-api-key - `8f3a1c7d9e4b62f58d11a2b3c5d76e89f0123abcde456f7890b12c34d56e78fgh9012ijklmpks34567qrstuv89wxyz0123abcdef456ghijklmno789pqrstuv`
- Routes -
  - To get all tokens - `{{ BASE_URL }}/asset/all`
  - To get tokens details by ID - `{{ BASE_URL }}/asset/:assetId`
  - To search for tokens - `{{ BASE_URL }}/asset/search`
  - To get tokens held by user - `{{ BASE_URL }}/asset/user/held`
  - To get tokens created by user - `{{ BASE_URL }}/asset/user/created`
  - To get top-performing meme tokens - `{{ BASE_URL }}/asset/top-memes`
  - To get tokens bounding data - `{{ BASE_URL }}/asset/bonding-data`
  - To get view tokens trade - `{{ BASE_URL }}/trade/view`
