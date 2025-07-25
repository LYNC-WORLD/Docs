---
sidebar_label: 'How to run index custom data?'
id: 'movement-indexer-how-to-run'
custom_edit_url: null
---

# How to run index custom data?

To deploy your subgraph on movement mevm devnet.

## Step 1. Create Subgraph
Create your subgraph: https://thegraph.com/docs/en/developing/creating-a-subgraph/

Once done, Make sure to set ```network``` to ```devnet```

>NOTE: Set your ```network``` to ```devnet``` in your ```subgraph.yaml``` file manually. It will not be listed in the ```graph init``` command because mevm is not yet supported by thegraph.

Your subgraph.yaml should look something like this:
```yml
specVersion: 0.0.4
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum
    name: ERC1155
    network: devnet
    source:
      abi: ERC1155
      address: "0x4114e6516413c5ba631002a0cf95e828714f8f18"
      startBlock: 1785835
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.6
      language: wasm/assemblyscript
      entities:
        - NFT
        - NftData
        - NftApprovalForAll
      abis:
        - name: ERC1155
          file: ./abis/ERC1155.json
      eventHandlers:
        - event: TransferBatch(indexed address,indexed address,indexed address,uint256[],uint256[])
          handler: handleTransferBatch1155
        - event: TransferSingle(indexed address,indexed address,indexed address,uint256,uint256)
          handler: handleTransferSingle1155
        - event: URI(string,indexed uint256)
          handler: handleURI1155
        - event: ApprovalForAll(indexed address,indexed address,bool)
          handler: handleApprovalForAll1155
      file: ./src/mapping.ts
```

:::info

NOTE: This is just an example no need to copy it as it is.
::::

## Step 2. Get ```AUTH TOKEN``` from [LYNC team](https://t.me/shanu_lync)
Get your AUTH TOKEN from [LYNC Team](https://t.me/shanu_lync)

## Step 3. Set your ```AUTH TOKEN``` to prepare for deployment

In your subgraph directory run:

```bash
graph auth https://api.mevm-devnet.lync.world/deploy
```

This will prompt you to enter your deploy key. Pass the ```AUTH TOKEN``` in there.

## Step 4: Create a new subgraph
```bash
graph create --node https://api.mevm-devnet.lync.world/deploy <PROJECT>/<NAME>
```
:::warning

Note: Replace the ```<PROJECT>/<NAME>``` accordingly. Example ```lync/nfts```

If you have properly setup the correct ```AUTH TOKEN``` and subgraph name you should see output like this

:::

<div className="flex flex-col items-center">
    <img src="/img/MOVEMENT/indexer/indexer.avif"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]">Pass LYNC API Key​</span> -->
</div>
<br/>
If you get any error(s) refer to the [Troubleshooting section](#troubleshooting)

## Step 5: Deploy you created subgraph:
In the subgraph directory after completing the above steps run:
```bash
graph deploy <PROJECT>/<NAME> --node https://api.mevm-devnet.lync.world/deploy --ipfs https://ipfs.lync.world
```

Note: Replace the ```<PROJECT>/<NAME>``` accordingly. Example ```lync/nfts```

If everything goes right you will see output like:
<div className="flex flex-col items-center">
    <img src="/img/MOVEMENT/indexer/indexer-1.avif"/>
    <!-- <span className="font-bold text-[rgb(192,192,192)]">Pass LYNC API Key​</span> -->
</div>
<br/>
:::info

Note: Currently we do not have any validations on version label so it can be anything.
::::


Also, you can ignore the HTTP queries endpoint that is shown in the output.

The subgraph will be deployed on:

```bash
https://mevm-devnet.lync.world/subgraphs/name/<PROJECT>/<NAME>
```
Note: Replace the ```<PROJECT>/<NAME>``` accordingly. Example ```lync/nfts```

You can use this endpoint to query your subgraph data using graphql.

## Troubleshooting

If while deploying the subgraph you face any errors like:


```bash
x graph create --node <https://api.mevm-devnet.lync.world/deploy> lync/nfts
 ›   Warning: In next major version, this command will be merged as a subcommand for `graph local`.
✖ HTTP error creating the subgraph: 480
/home/tit4n/.nvm/versions/node/v20.14.0/lib/node_modules/@graphprotocol/graph-cli/node_modules/@oclif/core/lib/errors/index.js:21
    throw new exit_2.ExitError(code);
    ^

ExitError: EEXIT: 1
    at Object.exit (/home/tit4n/.nvm/versions/node/v20.14.0/lib/node_modules/@graphprotocol/graph-cli/node_modules/@oclif/core/lib/errors/index.js:21:11)
    at CreateCommand.exit (/home/tit4n/.nvm/versions/node/v20.14.0/lib/node_modules/@graphprotocol/graph-cli/node_modules/@oclif/core/lib/command.js:131:23)
    at /home/tit4n/.nvm/versions/node/v20.14.0/lib/node_modules/@graphprotocol/graph-cli/dist/commands/create.js:50:22
    at Client._parseResponse (/home/tit4n/.nvm/versions/node/v20.14.0/lib/node_modules/@graphprotocol/graph-cli/node_modules/jayson/lib/client/index.js:190:12)
    at /home/tit4n/.nvm/versions/node/v20.14.0/lib/node_modules/@graphprotocol/graph-cli/node_modules/jayson/lib/client/index.js:149:10
    at IncomingMessage.<anonymous> (/home/tit4n/.nvm/versions/node/v20.14.0/lib/node_modules/@graphprotocol/graph-cli/node_modules/jayson/lib/client/http.js:80:11)
    at IncomingMessage.emit (node:events:531:35)
    at endReadableNT (node:internal/streams/readable:1696:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  oclif: { exit: 1 },
  code: 'EEXIT'
}

Node.js v20.14.0
```

Here, take a look at the error code. ```480``` in the output above.

| ERROR CODE | REASON                              | SOLUTION                                                                  |
|------------|-------------------------------------|---------------------------------------------------------------------------|
| 401        | Request Unauthorized                | Make sure the AUTH TOKEN is correct and run the graph auth command [again](https://docs.lync.world/movement-labs/indexer/how-to-run-index-custom-data#step-3.-set-your-auth-token-to-prepare-for-deployment). |
| 470        | Naming format not followed properly | The name of the subgraph should be in the format /                        |
| 480        | Name already taken                  | Reuse of the subgraph name is not allowed. Use a different name.          |
| 500        | Internal Server error               | [Contact LYNC Support](https://t.me/shanu_lync)                                                      |