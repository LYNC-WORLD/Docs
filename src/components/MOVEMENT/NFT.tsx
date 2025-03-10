import { createGraphiQLFetcher } from "@graphiql/create-fetcher";
import { QueryEditor } from '@graphiql/react';
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.css";
import { useState } from "react";





const INDEXER_URL = 'https://mevm-devnet.lync.world/subgraphs/name/mevm'


const defaultQuery = `
    {
        getNftBalances {
            id
            owner
            amount
            nft {
                id
                contractAddress
                name
                symbol
            }
        }
    }
`;
export const NFT = () => {
    
    const fetcher = createGraphiQLFetcher({
		url:  INDEXER_URL,
	});
    
    
    
    
    return (
        <div>
            <GraphiQL fetcher={fetcher as any}  defaultQuery={defaultQuery} className="min-h-[70vh]">
                
                
                
                <QueryEditor />
            </GraphiQL>
        </div>
    )
}
