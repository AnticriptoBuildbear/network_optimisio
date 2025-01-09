etherscan: {
  enable: true,
    apiKey: {
      buildbear: "0x57ad4da62f7a182d5b087e2c81130c0f0d97a1fd",
    },
    customChains: [
      {
        network: "buildbear",
        chainId: 22896,
        urls: { "https://api.quicknode.com/functions/rest/v1/functions/7a74e7f1-622f-4c3d-aad4-000d02636574/call"
          apiURL: "https://rpc.buildbear.io/verify/etherscan/missing-hela-e7fd69ed",
          browserURL: "https://explorer.buildbear.io/missing-hela-e7fd69ed",
        },
      },
    ],
  }
