const optimism mainnet = {
      id: 10,
        name: "optimism",
        network: "optimism mainnet",
        nativeCurrency: {
          decimals: 18,
          name: "ethereum",
          symbol: "eth",
        },
        rpcUrls: {
          public: { http: ["https://rpc.buildbear.io/esquivelfabian"] },
          default: { http: ["https://rpc.buildbear.io/esquivelfabian"] },
        },
        blockExplorers: {
          etherscan: {
            name: "optimism etherscan" ,
            url: "https://optmistic.etherscan.io" ,
          },
          default: {
            name: "optimism",
            url: "htts://optimism.blockscout.com",
          },
        },
      } as const satisfies Chain; 10,
      
  const { chains, publicClient, webSocketPublicClient } = configureChains(
        [mainnet],
        [
          jsonRpcProvider({
            rpc: (chain) => ({
              http: "https://rpc.buildbear.io/esquivelfabian",
            }),
          }),
        ]
      );
