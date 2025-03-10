import { createGraphiQLFetcher } from "@graphiql/create-fetcher";
import { QueryEditor } from '@graphiql/react';
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.css";
import { useState } from "react";

const CHAINS = {
    ETH: "ETH",
    FUEL: "FUEL",
};

type TChain = typeof CHAINS[keyof typeof CHAINS]


const ETH_INDEXER_URL = 'https://indexer.hyperindex.xyz/e3caed3/v1/graphql'
const FUEL_INDEXER_URL = 'https://indexer.dev.hyperindex.xyz/4886109/v1/graphql'


const defaultQuery = `
    query {
		PoolState(
			order_by: { timestamp: desc }
		) {
			asset_reserves
			
			real_eth_reserves
			timestamp
			virtual_eth_reserves
			is_completed
		}
	}
`;
export const GraphQlExample = () => {
    const [playgroundNetwork,setPlaygroundNetwork] = useState<TChain>(CHAINS.ETH);
    const ethFetcher = createGraphiQLFetcher({
		url:  ETH_INDEXER_URL,
	});
    const fuelFetcher = createGraphiQLFetcher({
		url:  FUEL_INDEXER_URL,
	});
    
    
    const handleNetworkChange = (e: any) => {
        
        
        setPlaygroundNetwork(e.target.value);
    }
    return (
        <div>
            <GraphiQL fetcher={playgroundNetwork === CHAINS.ETH ? ethFetcher as any : fuelFetcher as any}  defaultQuery={defaultQuery} className="min-h-[70vh]">
                <GraphiQL.Logo>
                
  
                    <select onChange={handleNetworkChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        
                        <option value={CHAINS.ETH}>ETH</option>
                        <option value={CHAINS.FUEL}>FUEL</option>
                        
                    </select>
                
                </GraphiQL.Logo>
                
                
                <QueryEditor />
            </GraphiQL>
        </div>
    )
}
