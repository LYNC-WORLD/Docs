import { createGraphiQLFetcher } from "@graphiql/create-fetcher";
import { QueryEditor } from '@graphiql/react';
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.css";
import { useState } from "react";




const INDEXER_URL = 'https://mevm-devnet.lync.world/subgraphs/name/mevm'


const defaultQuery = `
    {
        getTokenBalances(where: {account: "0x26e76b18d4a132a9397c46af11e4688bdb602e92"}) {
            id
            account
            value
            token{
                id
                contractAddress
                name
                symbol
                decimals
            }
        }
    }
`;
export const TokenBalance = () => {
    
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
