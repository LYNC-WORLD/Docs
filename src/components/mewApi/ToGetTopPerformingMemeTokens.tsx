import axios from "axios";
import { Component, useEffect, useRef, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import ReactMarkdown from "react-markdown";
import Tabs from "@theme/Tabs";
import { RotateCw } from "lucide-react";
import { cn } from "@site/src/lib/utils";
import { useColorMode } from "@docusaurus/theme-common";
import projectApiKeys from "../../../docs/configs/projectApiKeys.json";

export interface CodeSample {
  language: "node" | "csharp" | "python";
  code: string;
  name?: string;
}

type ApiParam = any;

const projectApiKey = projectApiKeys.MEW;

export type ApiResponse = any;

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

const API_HOST = "https://server.mew.gg/api/v1";
const METHOD = "GET";
const PATH = "/asset/top-memes";
const BODY = {
  fields: [
    {
      name: "apiKey",
      type: "string",
      description:
        "Your API key generated from [LYNC Dashboard](https://dashboard.lync.world/).",
      example: projectApiKey,
      required: true,
    },
    {
      name: "network",
      type: "string",
      description: "Network type enum (Mainnet, Testnet)",
      example: "main_net",
      enum: ["main_net", "test_net"],
      required: true,
    },
    {
      page: {
        name: "page",
        type: "string",
        description: "Page number for pagination",
        required: true,
        example: 1,
      },
      limit: {
        name: "limit",
        type: "string",
        description: "Number of items per page",
        required: true,
        example: 10,
      },
      includeBonded: {
        name: "includeBonded",
        type: "boolean",
        description: "Include bonded tokens in the response",
        required: true,
        example: "true",
      },
    },
  ],
};

type SampleCodeParams = {
  page: string;
  endPoint: string;
  limit: string;
  includeBonded: string;
  network: string;
  xApiKey?: string;
  projectApiKey?: string;
};

const getTextInSingleQuotes = (text: string) => {
  return `'${text}'`;
};

const GET_SAMPLE_CODE = (sampleCodeParams: SampleCodeParams) => {
  const {
    network,
    endPoint,
    projectApiKey,
    xApiKey,
    page,
    limit,
    includeBonded,
  } = sampleCodeParams;

  // build query params string to match API call
  const queryParams = `?network=${network}&page=${page}&limit=${limit}&includeBonded=${includeBonded}&apiKey=${projectApiKey}`;

  return `const END_POINT = "${endPoint + queryParams}"
const createNewWallet = async () => {
    try {
        const response = await fetch(END_POINT, {
            method: '${METHOD}',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': ${getTextInSingleQuotes(xApiKey)}
            },
        });

        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}`;
};

const RESPONSE = {
  body: {
    status: 400,
    success: false,
    message: "Error message here",
  },
};

export const ToGetTopPerformingMemeTokens = () => {
  const [fetchedResponse, setFetchedResponse] = useState(null);
  const [fetchingResponse, setFetchingResponse] = useState(false);

  const [page, setPage] = useState<string>("1");
  const [limit, setLimit] = useState<string>("10");
  const [, set] = useState<string>("created_at");

  const [dashboardApiKey, setDashboardApiKey] = useState<any>(projectApiKey);
  const [xApiKey, setXApiKey] = useState<any>(projectApiKey);
  const [network, setNetwork] = useState<any>("main_net");
  const [includeBonded, setincludeBonded] = useState<string>("true");

  const responseBlockRef = useRef<HTMLDivElement>(null);

  const [sampleCode, setSampleCode] = useState<string>(
    GET_SAMPLE_CODE({
      endPoint: API_HOST + PATH,
      xApiKey: projectApiKey,
      projectApiKey: projectApiKey,
      network: "main_net",
      page: "1",
      limit: "10",
      includeBonded: "true",
    })
  );

  const { colorMode } = useColorMode();

  useEffect(() => {
    const updatedCode = GET_SAMPLE_CODE({
      endPoint: API_HOST + PATH,
      xApiKey,
      projectApiKey: dashboardApiKey,
      network,
      page,
      limit,
      includeBonded,
    });

    setSampleCode(updatedCode);
  }, [dashboardApiKey, xApiKey, network, limit, page, includeBonded]);

  const handleApiCall = async () => {
    try {
      setFetchingResponse(true);
      const queryParams = `?network=${network}&page=${page}&limit=${limit}&includeBonded=${includeBonded}&apiKey=${dashboardApiKey}`;
      const response = await axios.get(API_HOST + PATH + queryParams, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": xApiKey,
        },
      });
      console.log(response?.data);
      responseBlockRef.current?.scrollIntoView({ behavior: "smooth" });
      setFetchedResponse(response?.data);
      setFetchingResponse(false);
    } catch (error: any) {
      setFetchedResponse(error.response?.data || { error: error.message });
      responseBlockRef.current?.scrollIntoView({ behavior: "smooth" });
      setFetchingResponse(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full lg:grid lg:grid-cols-2">
        <div>
          <div className="lg:pr-5 w-full">
            <h3 className="text-2xl lg:text-base">Query Parameters</h3>

            <div>
              {/* Top-level fields: apiKey, network */}
              {BODY.fields
                .filter((field) => field.name)
                .map((field, index) => (
                  <div
                    key={index}
                    className={`border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid ${
                      field.name === "apiKey"
                        ? "rounded-t-[var(--ifm-global-radius)]"
                        : ""
                    }`}>
                    <div className="flex items-center justify-between px-5 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-2">
                          <span className="font-[--ifm-font-weight-semibold]">
                            {field.name}
                          </span>
                          <span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%]">
                            {field.type}
                          </span>
                          {field.required && (
                            <span className="text-red-500 font-light text-[75%]">
                              required
                            </span>
                          )}
                        </div>
                        <ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">
                          {field.description}
                        </ReactMarkdown>
                      </div>

                      {field.enum ? (
                        <select
                          value={network}
                          onChange={(e) => setNetwork(e.target.value)}
                          className="w-1/2 md:w-48 py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid">
                          {field.enum.map((option) => (
                            <option key={option} value={option}>
                              {option === "main_net" ? "main_net" : "test_net"}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={dashboardApiKey}
                          onChange={(e) => setDashboardApiKey(e.target.value)}
                          className="w-1/2 md:w-48 py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
                        />
                      )}
                    </div>
                  </div>
                ))}

              {/* Nested fields: page, limit, , order */}
              {"page" in BODY.fields[2] &&
                Object.entries(BODY.fields[2]).map(([key, field], index) => (
                  <div
                    key={key}
                    className={`border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid ${
                      index === Object.keys(BODY.fields[2]).length - 1
                        ? "rounded-b-[var(--ifm-global-radius)]"
                        : ""
                    }`}>
                    <div className="flex items-center justify-between px-5 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-2">
                          <span className="font-[--ifm-font-weight-semibold]">
                            {field.name}
                          </span>
                          <span className="text-[var(--ifm-font-color-secondary)] font-light text-[75%]">
                            {field.type}
                          </span>
                          {field.required && (
                            <span className="text-red-500 font-light text-[75%]">
                              required
                            </span>
                          )}
                        </div>
                        {field.description && (
                          <ReactMarkdown className="font-extralight text-wrap text-[80%] -mb-5">
                            {field.description}
                          </ReactMarkdown>
                        )}
                      </div>
                      <input
                        type={field.type === "number" ? "number" : "text"}
                        value={
                          key === "page"
                            ? page
                            : key === "limit"
                            ? limit
                            : key === "includeBonded"
                            ? includeBonded
                            : ""
                        }
                        onChange={(e) => {
                          const val = e.target.value;
                          if (key === "page") setPage(val);
                          else if (key === "limit") setLimit(val);
                          else if (key === "") set(val);
                          else if (key === "includeBonded")
                            setincludeBonded(val);
                        }}
                        className="w-1/2 md:w-48 py-[0.6rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* HEADER + RESPONSE + SAMPLE CODE */}
        <div className="space-y-3 mt-10 lg:mt-0">
          <div>
            <h3 className="text-2xl lg:text-base">Headers</h3>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="gap-3 flex items-center">
                  <span className="md:text-2xl font-bold mb-0.5 w-52">
                    x-api-key
                  </span>
                  <input
                    type="text"
                    value={xApiKey}
                    onChange={(e) => setXApiKey(e.target.value)}
                    className="w-full py-[0.8rem] px-[0.8rem] outline-none rounded-[var(--ifm-global-radius)] resize-none border-[length:var(--ifm-global-border-width)] border-[var(--ifm-toc-border-color)] border-solid"
                  />
                  <button
                    onClick={handleApiCall}
                    disabled={fetchingResponse}
                    className={cn(
                      "flex items-center self-stretch justify-center w-1/3 bg-[var(--ifm-color-primary)] border-none py-[0.4rem] px-[0.8rem] rounded-md md:text-lg cursor-pointer",
                      fetchingResponse && "brightness-50 py-[0.55rem]",
                      colorMode === "dark" ? "text-black" : "text-white"
                    )}>
                    {fetchingResponse ? (
                      <RotateCw className="animate-spin" />
                    ) : (
                      "Test API"
                    )}
                  </button>
                </div>

                <h6 className="w-[80%] font-extralight">
                  <ReactMarkdown>
                    API key to be put into the header as x-api-key for the
                    validation of HTTP requests on our server
                  </ReactMarkdown>
                </h6>
              </div>
            </div>
          </div>

          <div>
            <h2>Example (Javascript)</h2>
            <CodeBlock language="javascript">{sampleCode}</CodeBlock>
          </div>

          <div ref={responseBlockRef} tabIndex={-1}>
            <h2>Response</h2>
            <CodeBlock language="json">
              {!fetchedResponse
                ? JSON.stringify(RESPONSE.body, null, 4)
                : JSON.stringify(fetchedResponse, null, 4)}
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
};
