// @ts-nocheck
import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

//@ts-ignore
import pm from "@site/static/img/pm.png";
import Head from "@docusaurus/Head";
import SearchBarWrapper from "../theme/SearchBar";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">aaa</div>
    </header>
  );
}

function ProductFourPerLine() {
  return <></>;
}
/* Frame 1110166917 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// justify-content: flex-end;
// align-items: center;
// padding: 24px;
// gap: 16px;

// width: 336px;
// height: 70px;

// background: rgba(0, 0, 0, 0.5);
// border: 1px solid rgba(255, 255, 255, 0.25);
// backdrop-filter: blur(27px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 8px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 1;

/* Frame 1110166918 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// justify-content: flex-end;
// align-items: center;
// padding: 24px;
// gap: 16px;

// width: 392px;
// height: 70px;

// background: rgba(0, 0, 0, 0.4);
// border: 1px solid rgba(255, 255, 255, 0.8);
// backdrop-filter: blur(27px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 8px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

function ProductThreePerLine({
  text,
  url,
  icon,
}: {
  text: string;
  url?: string;
  icon: string;
}) {
  return (
    <Link
      to={url}
      className="hover:no-underline cursor-pointer transition-all duration-200 box-border w-full self-stretch lg:w-full rounded-lg backdrop-blur-[27px] flex items-center justify-center bg-[rgba(0,0,0,0.4)] px-4  py-6  border-[1px] border-solid border-[rgba(255,255,255,0.25)]  hover:border-[rgba(255,255,255,0.8)] font-normal text-sm lg:text-base lg:leading-[20px] text-white text-center"
    >
      <img src={icon} className="h-6 w-6 mr-4" />
      {text}
    </Link>
  );
}

function ChainInfo({ url }: { url: string }) {
  return (
    <div className="box-border h-[70px] rounded-lg backdrop-blur-[27px] flex items-center justify-center bg-[rgba(0,0,0,0.5)] p-6  border-[1px] border-solid border-[rgba(255,255,255,0.25)] font-normal text-xl leading-[22px] text-white text-center  ">
      <img className="w-[98px]" src={url} alt="" />
    </div>
  );
}

const PRODUCTS = {
  firstLine: [
    {
      text: "Smart Wallet & Paymaster",
      url: "/docs/PRODUCTS/account-abstraction",
      icon: "/img/wallet.svg",
    },
    {
      text: "Payments",
      url: "/docs/PRODUCTS/account-abstraction-webgl",
      icon: "/img/payment.svg",
    },
    // {
    //   text:'Metamask Wallet',
    //   url:'/docs/PRODUCTS/metamask-wallet'
    // },
  ],
  secondLine: [
    {
      text: "AI Agent",
      url: "/docs/PRODUCTS/metamask-sdk",
      icon: "/img/ai_agent.svg",
    },
    {
      text: "Tokenization Tools",
      url: "/docs/PRODUCTS/okx-wallet",
      icon: "/img/tokenization.svg",
    },
    // {
    //   text: "LYNC In-Game Marketplace SDK",
    //   url: "/docs/PRODUCTS/in-game-marketplace",
    // },
    // {
    //   text: "NFT Fetcher",
    //   url: "/docs/PRODUCTS/nft-fetcher",
    // },
  ],
  // thirdLine: [
  //   {
  //     text: "No-code Smart Contract Deployer",
  //     url: "/docs/PRODUCTS/no-code-deployer",
  //   },
  //   {
  //     text: "EVM Lootbox SDK",
  //     url: "docs/PRODUCTS/evm-lootbox-sdk",
  //   },
  //   {
  //     text: "Launch you products on Telegram",
  //     url: "/docs/PRODUCTS/telegram/telegram-launch",
  //   },
  // ],
};

const CHAINS = [
  {
    logo: "/img/aptos.png",
    text: "Aptos",
  },
  {
    logo: "/img/movement.png",
    text: "Movement",
  },
  {
    logo: "/img/supra.png",
    text: "Supra",
  },
  {
    logo: "/img/fuel.png",
    text: "Fuel",
  },
  {
    logo: "/img/metis.png",
    text: "Metis",
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
        <script type="text/javascript" src="/script.js"></script>
      </Head>

      <main
        className="relative"
        style={{
          backgroundImage: "url(/img/pm.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // height: '100vh',
        }}
      >
        <div className="w-full flex flex-col items-center relative px-4 lg:px-0 pt-20 pb-10 lg:py-36 gap-10">
          <img
            src="/img/home-bg-lync.png"
            className="absolute w-72 lg:w-96 top-3 lg:top-11"
            alt=""
          />
          <div className="flex items-center flex-col ">
            <p className="text-white font-grotesk font-semibold text-3xl lg:text-5xl leading-[40px] lg:leading-[52px] text-center">
              LYNC Developer Documentation
            </p>
            <p className="text-[#FFFFFFCC] hidden lg:block font-grotesk font-light text-xl  leading-8 text-center">
              In-depth overview of LYNC's architecture, along with detailed{" "}
              <br /> descriptions of its various toolkits and APIs.
            </p>
            <p className="text-[#FFFFFFCC] lg:hidden md:w-[75%] font-grotesk font-light lg:text-xl leading-5 lg:leading-8 text-center">
              In-depth overview of LYNC's architecture, along with detailed
              descriptions of its various toolkits and APIs.
            </p>
          </div>

          <div className="w-full flex items-center justify-center ">
            <input
              type="text"
              onClick={() => {
                document.getElementsByClassName("DocSearch-Button")[0].click();
              }}
              id="searcher"
              className="lg:w-[655px] w-[90%] md:w-[75%]  pl-[48px] lg:text-lg rounded-lg h-12 lg:h-16 bg-black border-[1px] border-solid border-[rgba(255,255,255,0.2)] outline-none resize-none"
              style={{
                boxShadow:
                  "0px 0px 0px 4px rgba(255, 255, 255, 0.1), 0px 0px 54px rgba(76, 229, 137, 0.25)",
                backgroundImage: "url(/img/home-search-icon.png)",
                backgroundPosition: "15px",
                backgroundSize: "24px",

                backgroundRepeat: "no-repeat",
              }}
              placeholder="Search using topics, categories, trends..."
            />
            <SearchBarWrapper />
          </div>

          <img src="/img/home-line-seperate.png" className="lg:my-10" alt="" />
          <div className="w-full px-3 md:w-[75%] lg:w-[80%] flex items-center flex-col gap-4">
            <div className="w-full flex items-center justify-between">
              <p className="m-0 font-grotesk font-semibold text-xl lg:text-[32px] lg:leading-[35.2px]">
                Products
              </p>

              <Link
                to="/docs/lync-introduction"
                className="font-grotesk font-medium lg:text-lg lg:leading-[19.8px]"
              >
                View All
              </Link>
            </div>

            <div className="hidden lg:flex  lg:flex-row justify-between w-full gap-5   items-center ">
              {PRODUCTS.firstLine.map((product, index) => (
                <ProductThreePerLine
                  key={index}
                  text={product.text}
                  url={product.url}
                  icon={product.icon}
                />
              ))}
            </div>
            <div className="hidden lg:flex justify-between gap-5 w-full   items-center ">
              {PRODUCTS.secondLine.map((product, index) => (
                <ProductThreePerLine
                  key={index}
                  text={product.text}
                  url={product.url}
                  icon={product.icon}
                />
              ))}
            </div>
            {/*<div className=" hidden lg:flex justify-between  w-full gap-5  items-center ">
              {PRODUCTS.thirdLine.map((product, index) => (
                <ProductThreePerLine
                  key={index}
                  text={product.text}
                  url={product.url}
                />
              ))}
            </div>*/}

            {/* mobile featured list */}
            <div className="flex lg:hidden justify-between gap-2 w-full flex-wrap  items-center ">
              {PRODUCTS.firstLine.map((product, index) => (
                <ProductThreePerLine
                  key={index}
                  text={product.text}
                  url={product.url}
                  icon={product.icon}
                />
              ))}
              {PRODUCTS.secondLine.map((product, index) => (
                <ProductThreePerLine
                  key={index}
                  text={product.text}
                  url={product.url}
                  icon={product.icon}
                />
              ))}
            </div>
          </div>
          <img src="/img/home-line-seperate.png" className="lg:my-10" alt="" />

          <div className="w-full px-3 md:w-[75%] lg:w-[80%]">
            <div className="flex justify-between flex-col lg:flex-row w-full gap-5 items-center">
              <div className="flex justify-between items-center gap-2 hover:no-underline cursor-pointer transition-all duration-200 box-border w-full self-stretch lg:w-full rounded-lg backdrop-blur-[27px] bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.4)] p-4  custom500:p-6   border-[1px] border-solid border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.8)] font-normal text-sm lg:text-base relative overflow-hidden  lg:leading-[20px] text-white">
                <img
                  src="img/chain_bg_img.png"
                  alt="Background"
                  class="absolute h-[306px] bottom-0 right-0 w-full object-cover z-[-1]"
                />

                <div className="text-left">
                  <h2 className="text-[#FFFFFF66] text-sm font-semibold tracking-wider uppercase mb-3 font-grotesk">
                    CHAINS WE SUPPORT
                  </h2>

                  <span className="text-white text-base font-normal leading-relaxed">
                    Ethereum, Solana, Aptos,
                    <br />
                    Bitcoin Layer 2, Babylon & more
                  </span>
                </div>

                <div className="justify-end hidden custom385:flex">
                  <div className="flex flex-wrap items-center justify-center max-w-[125px]">
                    <img
                      src="/img/eth.svg"
                      className="w-9 h-9 custom500:w-10 custom500:h-10"
                      alt=""
                    />
                    <img
                      src="/img/sol.svg"
                      className="w-9 h-9 custom500:w-10 custom500:h-10 -ml-[6px]"
                      alt=""
                    />
                    <img
                      src="/img/apt.svg"
                      className="w-9 h-9 custom500:w-10 custom500:h-10 -ml-[6px]"
                      alt=""
                    />

                    <img
                      src="/img/btc.svg"
                      className="w-9 h-9 custom500:w-10 custom500:h-10 -ml-[6px] -mt-2 custom500:-mt-[10px]"
                      alt=""
                    />

                    <img
                      src="/img/babylon.svg"
                      className="w-9 h-9 custom500:w-10 custom500:h-10 -ml-[6px] -mt-2 custom500:-mt-[10px] z-10"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-2 hover:no-underline cursor-pointer transition-all duration-200 box-border w-full self-stretch lg:w-full rounded-lg backdrop-blur-[27px] bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.4)] p-4  custom500:p-6  border-[1px] border-solid border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.8)] font-normal text-sm lg:text-base lg:leading-[20px] text-white overflow-hidden relative">
                <img
                  src="img/chain_bg_img.png"
                  alt="Background"
                  class="absolute  h-[306px] bottom-0 right-0 w-full object-cover z-[-1]"
                />
                <div className="text-left">
                  <h2 className="text-[#FFFFFF66] text-sm font-semibold tracking-wider uppercase mb-3 font-grotesk">
                    PLATFORMS WE SUPPORT
                  </h2>

                  <span className="text-white text-base font-normal leading-relaxed">
                    We are platform agnostic - <br />
                    Web, Mobile and VR
                  </span>
                </div>

                <div className="justify-end hidden custom385:flex">
                  <div className="flex flex-wrap items-center justify-center max-w-[140px]">
                    <img
                      src="/img/web.svg"
                      className="w-9 h-9 custom500:w-11 custom500:h-11"
                      alt=""
                    />
                    <img
                      src="/img/mobile.svg"
                      className="w-9 h-9 custom500:w-11 custom500:h-11 -ml-[6px] custom500:-ml-2"
                      alt=""
                    />
                    <img
                      src="/img/vr.svg"
                      className="w-9 h-9 custom500:w-11 custom500:h-11 -ml-[6px] custom500:-ml-2"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
