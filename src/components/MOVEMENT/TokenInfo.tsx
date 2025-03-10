import { createGraphiQLFetcher } from "@graphiql/create-fetcher";
import { QueryEditor } from '@graphiql/react';
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.css";
import { useState } from "react";





const INDEXER_URL = 'https://mevm-devnet.lync.world/subgraphs/name/mevm'


const defaultQuery = `
    {
        getTokenInfos(where: {contractAddress:"0x00142eebe0bc35ecf94c221e85462bd281a1eb19"}){
            id
            contractAddress
            name
            symbol
            decimals
        }
    }
`;
export const TokenInfo = () => {
    
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
