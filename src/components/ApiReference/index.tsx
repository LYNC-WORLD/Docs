import axios from "axios";
import { Component, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import ReactMarkdown from "react-markdown";
import Tabs from "@theme/Tabs";
import { RotateCw } from "lucide-react";
import { cn } from "@site/src/lib/utils";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog"

  
export interface CodeSample {
	language: "node" | "csharp" | "python";
	code: string;
	name?: string;
}

type ApiParam = any


const getInputTypeFromParamType = (type:string) =>{

	switch(type){
		case 'string': return 'text';
        case 'number': return 'number';
        case 'boolean': return 'checkbox';
        case 'object': return 'json';
        default: return 'text';
	}
}


export type ApiResponse = any

export interface ApiReferenceProps {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    path: string;
    description?: string;
    pathParams?: ApiParam[];
    queryParams?: ApiParam[];
    body?: ApiParam;
    responses: ApiResponse[];
    apiHost: string;
    testHost?: string;
    codeSamples?: CodeSample[];
    children?: Component;
    aptosNetwork?: "mainnet" | "testnet";
    disabled?: boolean;
}
export interface FormValues {
  path: object;
  query: object;
  body: object;
}


export const ApiReference = ({
	description,
	method,
	path,
	pathParams,
	queryParams,
	body,
	responses,
	apiHost,
	testHost,
	codeSamples,
	children,
	disabled,
}:ApiReferenceProps) => {
	
	
	const [fetchedResponse,setFetchedResponse] = useState(null);
	const [fetchingResponse,setFetchingResponse] = useState(false);


	const [email,setEmail] = useState<any>("shanu@lync.world");
	const [dashboardApiKey,setDashboardApiKey] = useState<any>("YOU API KEY");
	const [xApiKey,setXApiKey] = useState<any>("");
	const [network,setNetwork] = useState<any>("2");


	const endpoint = 'https://api.example.com/data';

	async function postData() {
		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-API-Key': 'your-api-key-here'
				},
				body: JSON.stringify({
					name: 'John Doe',
					email: 'johndoe@example.com',
					age: 30
				})
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			console.log('Success:', data);
		} catch (error) {
			console.error('Error:', error);
		}
	}

	postData();


	const handleApiCall = async() =>{
		try {
			
			setFetchingResponse(true);
			const response = await axios.post(apiHost+path,{
				
				email,
				apiKey:dashboardApiKey,
				network,
				
			},{
				
				headers:{
					"Content-Type": "application/json",
  					"x-api-key": xApiKey,
				},
				
			});
			console.log(response.data);
			setFetchedResponse(response.data);
			setFetchingResponse(false);
		} catch (error) {
			setFetchedResponse(error.response.data);
			setFetchingResponse(false);
			console.log(error);
			
		}
	}
	
	return (
		<div className="w-full">
			
			
			
			<div className="w-full lg:grid lg:grid-cols-2 ">
				<div>
					<div className="pr-5 w-full">

						<h3>Body</h3>

						

						<div className="relative overflow-x-auto ">
							<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
								{/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th scope="col" className="px-6 py-3">
											Product name
										</th>
										<th scope="col" className="px-6 py-3">
											Color
										</th>
										<th scope="col" className="px-6 py-3">
											Category
										</th>
										<th scope="col" className="px-6 py-3">
											Price
										</th>
										<th scope="col" className="px-6 py-3">
											Action
										</th>
									</tr>
								</thead> */}
								<tbody className="w-full table">
									{(body.fields.slice(0,1)).map((field) => (<tr className="  ">

										<th scope="row" className=" flex items-start flex-col justify-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
											<span className="text-2xl">{field.name} ({field.type})</span>
											<span className="">

												<ReactMarkdown className="-mb-4 font-extralight">{field.description}</ReactMarkdown>
											</span>

										</th>
										
										<td>
											<input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
											
										</td>
										
										
										
										
									</tr>))}
									{(body.fields.slice(-2,-1)).map((field) => (<tr className=" ">

										<th scope="row" className=" flex items-start flex-col justify-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
											<span className="text-2xl">{field.name} ({field.type})</span>
											<span className="">

												<ReactMarkdown className="-mb-4 font-extralight text-wrap">{field.description}</ReactMarkdown>
											</span>

										</th>
										
										<td>
											<input type="text" value={dashboardApiKey } onChange={(e) => setDashboardApiKey(e.target.value)}  className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
											
										</td>
										
										
										
										
									</tr>))}
									{(body.fields.slice(-1)).map((field) => (<tr className=" ">

										<th scope="row" className=" flex items-start flex-col justify-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
											<span className="text-2xl">{field.name} ({field.type})</span>
											<span className="">

												<ReactMarkdown className="-mb-4 font-extralight text-wrap">{field.description}</ReactMarkdown>
											</span>

										</th>
										
										<td>
											

											<select onChange={(e) => setNetwork(e.target.value)} value={network} className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="" id="">
												<option value="1">1 (Mainnet)</option>
												<option value="2">2 (Testnet)</option>
											</select>
										</td>
										
										
										
										
									</tr>))}
									
								</tbody>
							</table>
						</div>







						
					</div>
					
				</div>
				<div className="space-y-3">
					<div>

						<h3>Headers</h3>
						<div className="flex items-start justify-between">

							<div className="space-y-1 mt-1">
								<div className="gap-3 flex items-center">
									<span className="text-2xl font-bold mb-0.5">{'x-api-key'}</span>
									
									<input type="text" value={xApiKey } onChange={(e) => setXApiKey(e.target.value)}  className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
								</div>
								
								<h6 className="w-[80%] font-extralight">

										<ReactMarkdown>{'API key to be put into the header as x-api-key for the validation of HTTP requests on our server'}</ReactMarkdown>
								</h6>
								
							</div>
							<button onClick={handleApiCall} disabled={fetchingResponse} 
							className={cn(" flex items-center justify-center w-32 bg-[var(--ifm-color-primary)] border-none py-2 px-3 rounded-md text-xl cursor-pointer",
							fetchingResponse && "brightness-50"
							)}>
							{
								fetchingResponse ?
									<RotateCw className="animate-spin" />
									:
								'Test API'
							}

							</button>
						</div>

					</div>
					<div>
						<h2>Response</h2>
						<CodeBlock language="json">
							
							{!fetchedResponse ? JSON.stringify(responses[0].body, null, 4) : JSON.stringify(fetchedResponse, null, 4)}
						</CodeBlock>
					</div>
				</div>
			</div>
			

			
			
		</div>
	)
}
