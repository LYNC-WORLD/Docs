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


const projectApiKey = projectApiKeys.SUPRA

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


const API_HOST = 'https://server-supra-sdk.lync.world/api/v1';
const METHOD = 'POST';
const PATH = '/transactions/send'
const BODY = {
    "fields":[
        {
            "name":"contractAddress",
            "type":"string",
            "description":"Contract address",
            "example":"0x4bb424eb03c0105e44e42a07294a7c9ed78b75942549b02844892401b578d150",
			"required":true,
        },
        {
            "name":"contractName",
            "type":"string",
            "description":"Name of contract",
            "example":"LyncCards",
			"required":true,
        },
        {
            "name":"functionName",
            "type":"string",
            "description":"Function you want to do mint transaction on",
            "example":"mint_nft",
			"required":true,
        },
        {
            "name":"privateAddress",
            "type":"string",
            "description":"User's private key",
            "example":"0x9e568d375d7dc88dcb58577a4167b11e559b3fed222f91383518e58f8565f353",
			"required":true,
        },
        {
            "name":"publicAddress",
            "type":"string",
            "description":"User's account address",
            "example":"0x41e019155a0916372341bcdb684b6e571b68563f933c3139deae6a9fac3fc38b",
			"required":true,
        },
        {
			"name":"arguments",
			"description":"Object of  ```{ argument: string, type: number }``` If the function accepts any arguments",
			"required":true,
			"type":"array",
			"field":{
				type:"object",
				fields:[
					{
						name:"argument",
						type:"string",
						required:true,
						description:"The argument"
					},
					{
						name:"type",
						type:"number",
						required:true,
						description:"The argument"
					}
				]
			}
		},
        {
            "name":"network",
            "type":"number",
            "description":"Network type enum (1 for Mainnet, 2 for Testnet)",
            "example":5,
            "enum":[
                "5",
                

            ],
			"required":true,
        },
        {
            "name":"usePaymaster",
            "type":"boolean",
            "description":"```true``` to sponsor the transaction or ```false``` if user pays for the transaction",
            "example":"false",
			"required":true,
        },
        {
            "name":"apiKey",
            "type":"string",
            "description":"Your API key generated from [LYNC Dashboard](https://dashboard.lync.world/).",
            "example":projectApiKey,
			"required":true,
        },
        




		
    ]
}

type SampleCodeParams = {
    endPoint: string;
	argumentsArray:ArgumentsArray[];
    xApiKey?: string;
    projectApiKey?: string;
    contractAddress?: string;
    contractName?: string;
    functionName?: string;
    privateAddress?: string;
    publicAddress?: string;
    network?: number;
    usePaymaster?: boolean;
}

const getTextInSingleQuotes = (text: string) => {
    return `'${text}'`;
}

const GET_SAMPLE_CODE = (
    sampleCodeParams: SampleCodeParams
) => {
    const {contractAddress,contractName,functionName,privateAddress,publicAddress,usePaymaster,network,endPoint,projectApiKey,xApiKey,argumentsArray} = sampleCodeParams;

	const getArgumentsField = () =>{
		if(argumentsArray.length === 0)return "";

		return argumentsArray.map((argument,index) => {
            return `                    { argument: ${getTextInSingleQuotes(argument.argument)}, type: ${argument.type} }`
        }).join(",\n")
	}

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
                contractAddress: ${ getTextInSingleQuotes(contractAddress) },
                contractName: ${ getTextInSingleQuotes(contractName)},
                functionName: ${ getTextInSingleQuotes(functionName)},
                privateAddress: ${ getTextInSingleQuotes(privateAddress)},
                publicAddress: ${ getTextInSingleQuotes(publicAddress)},
                ${argumentsArray.length!==0 ? "arguments: [ \n" + getArgumentsField() + "\n                ]" : "arguments: []"},
                network: ${network},
                usePaymaster: ${usePaymaster},
                apiKey: ${getTextInSingleQuotes(projectApiKey) }
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
        "message": "success",
        "data": {
          "transactionHash": "<transaction hash of successfull mint transaction>",
        }
    }
}

type ArgumentsArray = {
	id:number;
	argument: string;
    type: number;
}

export const MintNFTTransactions = () => {
	
	
	const [fetchedResponse,setFetchedResponse] = useState(null);
	const [fetchingResponse,setFetchingResponse] = useState(false);




    const [contractAddress,setContractAddress] = useState<string>(BODY.fields[0].example + '');
    const [contractName,setContractName] = useState<string>(BODY.fields[1].example + '');
    const [functionName,setFunctionName] = useState<string>(BODY.fields[2].example + '');
    const [privateAddress,setPrivateAddress] = useState<string>(BODY.fields[3].example + '');
    const [publicAddress,setPublicAddress] = useState<string>(BODY.fields[4].example + '');

    
	const [argumentsArray,setArgumentsArray] = useState<ArgumentsArray[]>([]
        // [
        //     {
        //         id:0,
        //         argument: "arg0",
        //         type: 0,
        //     },
        //     {
        //         id:1,
        //         argument: "arg1",
        //         type: 1,
        //     },
	    //]
    );
	const [network,setNetwork] = useState<number>(parseInt(BODY.fields[6].example + ''));

    const [usingPaymaster,setUsingPaymaster] = useState<boolean>(BODY.fields[7].example === "true")
	const [dashboardApiKey,setDashboardApiKey] = useState<any>(projectApiKey);
	const [xApiKey,setXApiKey] = useState<any>(projectApiKey);
	

	const responseBlockRef = useRef<HTMLDivElement>(null);

    const [sampleCode, setSampleCode] = useState<string>(GET_SAMPLE_CODE({
        endPoint: API_HOST+PATH,
		argumentsArray
    }));

	
    
	const {colorMode} = useColorMode();

    useEffect(()=>{
        const updatedCode = GET_SAMPLE_CODE({
            endPoint: API_HOST+PATH,
			argumentsArray,
            xApiKey,
            projectApiKey:dashboardApiKey,
            contractAddress,
            contractName,
            functionName,
            usePaymaster:usingPaymaster,
            privateAddress,
            publicAddress,
            network,
			
        })

        setSampleCode(updatedCode);
    },[
        contractAddress,
        contractName,
        functionName,
        privateAddress,
        publicAddress,
		argumentsArray,
        network,
        usingPaymaster,
        dashboardApiKey,
        xApiKey,
    ])

	


	const handleApiCall = async() =>{
		try {
			
			setFetchingResponse(true);
			const response = await axios.post(API_HOST+PATH,{
				network,
				contractName,
                contractAddress,
                functionName,
                privateAddress,
                publicAddress,
                arguments:argumentsArray.map((arg)=>{
                    return {
                        argument: arg.argument,
                        type: arg.type
                    }
                }),
                usePaymaster:usingPaymaster,
				apiKey:dashboardApiKey,
				
				
			},{
				
				headers:{
					"Content-Type": "application/json",
  					"x-api-key": xApiKey,
				},
				
			});
			console.log(response?.data);
			responseBlockRef.current?.scrollIntoView({behavior:'smooth'});
			setFetchedResponse(response?.data);
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
							{([BODY.fields[0]]).map((field,index) => (<div key={index} className="border-b-0 rounded-t-[var(--ifm-global-radius)] border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

								<div  className=" flex items-center flex-col gap-2  justify-between px-5 py-3  text-gray-900 whitespace-nowrap dark:text-white">
									<div className="w-full flex flex-col justify-center">
										<div className="flex items-center gap-2">

											<span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
											<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
											{field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
										</div>
										<ReactMarkdown  className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
										
									</div>

									<input type="text" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)}  
										className="w-full py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									/>
								</div>
							</div>))}

							{([BODY.fields[1]]).map((field,index) => (<div key={index} className="border-b-0  border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

								<div  className=" flex items-center flex-col gap-2 justify-between px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">

									<div className="w-full flex flex-col justify-center">

										<div className="flex items-center gap-2">

											<span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
											<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
											{field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
										</div>
										<ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
										
									</div>
									<input type="text" value={contractName } onChange={(e) => setContractName(e.target.value)}  
										className="w-full py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									/>

								</div>
							</div>))}
							
							{([BODY.fields[2]]).map((field,index) => (<div key={index} className="border-b-0  border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

								<div  className=" flex items-center flex-col gap-2 justify-between px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">

									<div className="w-full flex flex-col justify-center">

										<div className="flex items-center gap-2">

											<span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
											<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
											{field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
										</div>
										<ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
										
									</div>
									<input type="text" value={functionName } onChange={(e) => setFunctionName(e.target.value)}  
										className="w-full py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									/>

								</div>
							</div>))}
							{([BODY.fields[3]]).map((field,index) => (<div key={index} className="border-b-0  border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

								<div  className=" flex items-center flex-col gap-2 justify-between px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">

									<div className="w-full flex flex-col justify-center">

										<div className="flex items-center gap-2">

											<span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
											<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
											{field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
										</div>
										<ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
										
									</div>
									<input type="text" value={privateAddress } onChange={(e) => setPrivateAddress(e.target.value)}  
										className="w-full py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									/>

								</div>
							</div>))}
							{([BODY.fields[4]]).map((field,index) => (<div key={index} className="border-b-0  border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

								<div  className=" flex items-center flex-col gap-2 justify-between px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">

									<div className="w-full flex flex-col justify-center">

										<div className="flex items-center gap-2">

											<span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
											<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
											{field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
										</div>
										<ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
										
									</div>
									<input type="text" value={publicAddress } onChange={(e) => setPublicAddress(e.target.value)}  
										className="w-full py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									/>

								</div>
							</div>))}

                            {([BODY.fields[5]]).map((field,index) => (
								<div key={index} className="border-b-0  border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

									<div  className=" flex items-center  justify-between px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">

										<div className="flex-1 flex flex-col justify-center">

											<div className="flex items-center gap-2">

												<span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
												<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
												{field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
											</div>
											<ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
											
										</div>

									</div>
									{/* <input type="text" value={dashboardApiKey } onChange={(e) => setDashboardApiKey(e.target.value)}  
										className="w-48 py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									/> */}
									<div className="px-5 pb-4">
										{!argumentsArray.length && <div className="rounded-t-[var(--ifm-global-radius)] p-2 border-b-0 border-solid border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)]">
											No Items in array
										</div>}

										{(argumentsArray.length !== 0) && 
											argumentsArray.map((argument,index)=>{

												const handleRemoveOfItem = () =>{
													argumentsArray.splice(index, 1);
                                                    setArgumentsArray([...argumentsArray]);
                                                    
												}

												return (
													<div key={Math.random()} className={cn("px-[0.75rem] py-[0.75rem] border-solid border-[length:var(--ifm-global-border-width)] border-b-0  border-[var(--ifm-toc-border-color)]",
														index === 0 && "rounded-t-[var(--ifm-global-radius)]"
													)}>
														<div>
															<div className="px-[1rem] space-x-3  py-[0.25rem] text-[13px] rounded-t-[var(--ifm-global-radius)] border-b-0 border-solid border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)]">
																<button onClick={handleRemoveOfItem} className="bg-transparent hover:border-solid hover:border-[length:var(--ifm-global-border-width)]  hover:border-[var(--ifm-toc-border-color)] outline-none border-none font-semibold cursor-pointer">Remove</button>
																<span>
																	arguments[{index}]
																</span>
															</div>
															<div className="px-[1rem] py-[0.75rem] space-y-3 rounded-b-[var(--ifm-global-radius)] border-solid border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)]">
																{field.field.fields.map((argField) => {
																	const id = argument.id;
																	const argFieldItem = argumentsArray.find((argField) =>{
																		return argField.id === id;
																	})
																	const argFieldValue = argFieldItem[argField.name]

																	const handleArgFieldValueChange = (e) =>{
																		const newArgFieldItem = argFieldItem;
																		newArgFieldItem[argField.name] = e.target.value;

																		const newArgumentsArray = argumentsArray.slice(0,index).concat(newArgFieldItem).concat(argumentsArray.slice(index+1));
																		setArgumentsArray(newArgumentsArray)
																	}
																	return (
																		<div key={argField.name} className="flex items-center flex-col gap-2 justify-between">
																		
																			<div className="w-full flex flex-col justify-center">

																				<div className="flex items-center gap-2">

																					<span className=" font-[--ifm-font-weight-semibold]   ">{argField.name} </span>
																					<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{argField.type}</span>
																					{argField.required && <span className="text-red-500 font-light text-[75%]">required</span>}
																				</div>
																				<ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">{argField.description}</ReactMarkdown>
																				
																			</div>
																			<input type={argField.type} value={argFieldValue } onChange={(e) => handleArgFieldValueChange(e)}  
																				className="w-full py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
																			/>
																		</div>
																	)
																})}
															</div>
														</div>
													</div>
												)
											})
										
										}
										

										<div className="rounded-b-[var(--ifm-global-radius)] px-[0.75rem] py-[0.75rem]  border-solid border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)]">
											<button className="border-none outline-none bg-transparent cursor-pointer font-semibold" onClick={()=>setArgumentsArray([...argumentsArray,
											{
												id: argumentsArray.length,
												type: 0,
												argument:""
											},
												
											])}>Add Item</button>

											
										</div>
									</div>
								</div>
							))}

							{([BODY.fields[6]]).map((field,index) => (<div key={index} className="border-b-0 border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

								<div  className=" flex items-center flex-col gap-2 justify-between px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<div className="w-full flex flex-col justify-center">

										<div className="flex items-center gap-2">

											<span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
											<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
											{field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
										</div>
										<ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
									</div>

									<select onChange={(e) => setNetwork(parseInt(e.target.value))} value={network} name="" id=""
										className=" w-full py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									>
										<option value="1">1 (Mainnet)</option>
										<option value="2">2 (Testnet)</option>
									</select>

								</div>






							</div>))}
							{([BODY.fields[7]]).map((field,index) => (<div key={index} className="border-b-0  border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

								<div  className=" flex items-center flex-col gap-2 justify-between px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<div className="w-full flex flex-col justify-center">

										<div className="flex items-center gap-2">

											<span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
											<span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
											{field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
										</div>
										<ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
									</div>

									<select onChange={(e) => setUsingPaymaster(e.target.value === "true")} value={usingPaymaster ? "true" : "false"} name="" id=""
										className=" w-full py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
									>
										<option value="true">true</option>
										<option value="false">false</option>
									</select>

								</div>






							</div>))}

							{([BODY.fields[8]]).map((field,index) => (<div key={index} className="rounded-b-[var(--ifm-global-radius)]  border-[length:var(--ifm-global-border-width)]  border-[var(--ifm-toc-border-color)] border-solid ">

                                <div  className=" flex items-center flex-col gap-2 justify-between px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                    <div className="w-full flex flex-col justify-center">

                                        <div className="flex items-center gap-2">

                                            <span className=" font-[--ifm-font-weight-semibold]   ">{field.name} </span>
                                            <span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%] ">{field.type}</span>
                                            {field.required && <span className="text-red-500 font-light text-[75%]">required</span>}
                                        </div>
                                        <ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">{field.description}</ReactMarkdown>
                                        
                                    </div>
                                    <input type="text" value={dashboardApiKey } onChange={(e) => setDashboardApiKey(e.target.value)}  
                                        className="w-full py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none  border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
                                    />

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
									<span className="md: text-2xl font-bold mb-0.5 w-52">{'x-api-key'}</span>
									
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
