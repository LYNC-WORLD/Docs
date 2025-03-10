import axios from "axios";
import { Component, useEffect, useRef, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import ReactMarkdown from "react-markdown";
import Tabs from "@theme/Tabs";
import { RotateCw } from "lucide-react";
import { cn } from "@site/src/lib/utils";
import {useColorMode} from '@docusaurus/theme-common';
import projectApiKeys from '../../../docs/configs/projectApiKeys.json'
  
export interface CodeSample {
	language: "node" | "csharp" | "python";
	code: string;
	name?: string; 
}

type ApiParam = any


const projectApiKey = projectApiKeys.FUEL

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


const API_HOST = 'https://server-fuel-sdk.lync.world';
const METHOD = 'POST';
const PATH = '/wallet/get-wallet'
const BODY = {
    "fields":[
        {
            "name":"email",
            "type":"string",
            "description":"User email id",
            "example":"shanu@lync.world",
			"required":true,
        },
        {
            "name":"apiKey",
            "type":"string",
            "description":"Your API key generated from [LYNC Dashboard](https://dashboard.lync.world/).",
            "example":projectApiKey,
			"required":true,
        },
        {
            "name":"network",
            "type":"string",
            "description":"Network type enum (1 for Mainnet, 2 for Testnet)",
            "example":"2",
            "enum":[
                "1",
                "2"

            ],
			"required":true,
        }
    ]
}

type SampleCodeParams = {
    endPoint: string;
    xApiKey?: string;
    projectApiKey?: string;
    email?: string;
    network?: string
}

const getTextInSingleQuotes = (text: string) => {
    return `'${text}'`;
}

const GET_SAMPLE_CODE = (
    sampleCodeParams: SampleCodeParams
) => {
    const {email,network,endPoint,projectApiKey,xApiKey} = sampleCodeParams;

    return `const END_POINT = "${endPoint}"
const createNewWallet = async () => {
    try {
        const response = await fetch(END_POINT, {
            method: '${METHOD}',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': ${getTextInSingleQuotes(xApiKey)}
            },
            body: JSON.stringify({
                email: ${ getTextInSingleQuotes(email)},
                apiKey: ${getTextInSingleQuotes(projectApiKey) },
                network: ${getTextInSingleQuotes(network) }
            })
        });

        
        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}`

}

const RESPONSE = {
    "status":"200",
    "description": "Wallet creation response",
    "body":{
        "success": true,
        "status": 200,
        "message": "User profile fetched successfully.",
        "data": {
          "id": "<ObjectId>",
          "email": "<user email id>",
          "accountAddress": "<account address of users newly created wallet>",
          "publicKey": "<public key of users newly created wallet>",
          "privateKey": "<private key of users newly created wallet>"
        }
    }
}


export const GetAlreadyCreatedWallet = () => {
	
	
	const [fetchedResponse,setFetchedResponse] = useState(null);
	const [fetchingResponse,setFetchingResponse] = useState(false);


	const [email,setEmail] = useState<any>("shanu@lync.world");
	const [dashboardApiKey,setDashboardApiKey] = useState<any>(projectApiKey);
	const [xApiKey,setXApiKey] = useState<any>("X_API_KEY");
	const [network,setNetwork] = useState<any>("2");

	const responseBlockRef = useRef<HTMLDivElement>(null);

    const [sampleCode, setSampleCode] = useState<string>(GET_SAMPLE_CODE({
        endPoint: API_HOST+PATH,
    
    }));

	const {colorMode} = useColorMode();
    
    useEffect(()=>{
        const updatedCode = GET_SAMPLE_CODE({
            endPoint: API_HOST+PATH,
            xApiKey,
            projectApiKey:dashboardApiKey,
            email,
            network,
        })

        setSampleCode(updatedCode);
    },[
        email,
        dashboardApiKey,
        xApiKey,
        network,
    ])

	


	const handleApiCall = async() =>{
		try {
			
			setFetchingResponse(true);
			const response = await axios.post(API_HOST+PATH,{
				
				email,
				apiKey:dashboardApiKey,
				network,
				
			},{
				
				headers:{
					"Content-Type": "application/json",
  					"x-api-key": xApiKey,
				},
				
			});
			console.log(response?.data);
			responseBlockRef.current?.scrollIntoView({behavior:'smooth'});
			setFetchedResponse(response.data);
			setFetchingResponse(false);
		} catch (error) {
			setFetchedResponse(error.response?.data);
			responseBlockRef.current?.scrollIntoView({behavior:'smooth'});
			setFetchingResponse(false);
			console.log(error);
			
		}
	}
	
	return (
		<div className="w-full">
			
			
			
			<div className="w-full lg:grid lg:grid-cols-2 ">
				<div>
					<div className="lg:pr-5 w-full">

						<h3 className="text-2xl lg:text-base">Body</h3>

						

						<div className=" ">
							{(BODY.fields.slice(0,1)).map((field,index) => (<div key={index} className="border-b-0 rounded-t-[var(--ifm-global-radius)] border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

								<div  className=" flex items-center   justify-between px-5 py-3  text-gray-900 whitespace-nowrap dark:text-white">
									<div className="flex-1 flex flex-col justify-center">
										<div className="flex items-center gap-2">

											<span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
											<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
											{field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
										</div>
										<ReactMarkdown  className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
										
									</div>

									<input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  
										className="w-48 py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									/>
								</div>
							</div>))}

							{(BODY.fields.slice(-2,-1)).map((field,index) => (<div key={index} className="border-b-0  border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

								<div  className=" flex items-center  justify-between px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">

									<div className="flex-1 flex flex-col justify-center">

										<div className="flex items-center gap-2">

											<span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
											<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
											{field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
										</div>
										<ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
										
									</div>
									<input type="text" value={dashboardApiKey } onChange={(e) => setDashboardApiKey(e.target.value)}  
										className="w-48 py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									/>

								</div>
							</div>))}

							{(BODY.fields.slice(-1)).map((field,index) => (<div key={index} className=" rounded-b-[var(--ifm-global-radius)] border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

								<div  className=" flex items-center  justify-between px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<div className="flex-1 flex flex-col justify-center">

										<div className="flex items-center gap-2">

											<span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
											<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
											{field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
										</div>
										<ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
									</div>

									<select onChange={(e) => setNetwork(e.target.value)} value={network} name="" id=""
										className=" w-48 py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									>
										<option value="1">1 (Mainnet)</option>
										<option value="2">2 (Testnet)</option>
									</select>

								</div>






							</div>))}
							
						</div>







						
					</div>
					
				</div>
				<div className="space-y-3 mt-10 lg:mt-0">
					<div>

						<h3 className="text-2xl lg:text-base">Headers</h3>
						<div className="flex items-start justify-between">

							<div className="space-y-1 ">
								<div className="gap-3 flex items-center">
									<span className="md:text-2xl font-bold mb-0.5 w-52">{'x-api-key'}</span>
									
									<input type="text" value={xApiKey } onChange={(e) => setXApiKey(e.target.value)}  
										className="w-full py-[0.8rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									/>

									<button onClick={handleApiCall} disabled={fetchingResponse} 
										className={cn(" flex items-center self-stretch justify-center w-1/3  bg-[var(--ifm-color-primary)] border-none py-[0.4rem] px-[0.8rem] rounded-md md:text-lg cursor-pointer",
											fetchingResponse && "brightness-50 py-[0.55rem]",
											colorMode === 'dark' ? 'text-black' : 'text-white'
										)}
									>
										{
											fetchingResponse ?
												<RotateCw className="animate-spin" />
												:
											'Test API'
										}

									</button>
								</div>
								
								<h6 className="w-[80%] font-extralight">

										<ReactMarkdown>{'API key to be put into the header as x-api-key for the validation of HTTP requests on our server'}</ReactMarkdown>
								</h6>
								
							</div>
							
						</div>

					</div>
					<div>
						<h2>Example (Javascript)</h2>
						<CodeBlock language="javascript">
                            {sampleCode}
							
						</CodeBlock>
					</div>
					<div ref={responseBlockRef} tabIndex={-1}>
						<h2>Response</h2>
						<CodeBlock language="json">
							
							{!fetchedResponse ? JSON.stringify(RESPONSE.body, null, 4) : JSON.stringify(fetchedResponse, null, 4)}
						</CodeBlock>
					</div>
				</div>
			</div>
			

			
			
		</div>
	)
}
