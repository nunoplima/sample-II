export async function GET() {
  return Response.json([
    {
      network: "arbitrum",
      id: "5",
      isVerified: true,
      configAddress: "0x4bb4F94d319f77B36dc43B09818063Eb32889539",
      silo0: {
        tokenAddress: "0x18C14C2D707b2212e17d1579789Fc06010cfca23",
        symbol: "ETH+",
        name: "ETHPlus",
        logos: {
          coinMarketCap: null,
        },
        decimals: 18,
        priceUsd: "3819733755",
        maxLtv: "900000000000000000",
        lt: "950000000000000000",
        oracle: {
          address: "0x6f260F87379D42b29058ECbfbE50638f96071f07",
          oracleKey: "chainlinkV3",
        },
        collateralBaseApr: "0",
        debtBaseApr: "0",
        liquidity: "0",
        tvl: "0",
      },
      silo1: {
        tokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        symbol: "ETH",
        name: "Ether",
        logos: {
          coinMarketCap: {
            small:
              "https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png",
            large:
              "https://s2.coinmarketcap.com/static/img/coins/128x128/2396.png",
          },
        },
        decimals: 18,
        priceUsd: "3690332924",
        maxLtv: "900000000000000000",
        lt: "950000000000000000",
        oracle: {
          address: "0x0000000000000000000000000000000000000000",
          oracleKey: "none",
        },
        collateralBaseApr: "0",
        debtBaseApr: "0",
        liquidity: "0",
        tvl: "923234500000000000",
      },
    },
    {
      network: "arbitrum",
      id: "6",
      isVerified: false,
      configAddress: "0xfBd30B2CcA308d2C5462D3261Acc1CA632802bFb",
      silo0: {
        tokenAddress: "0x70d95587d40A2caf56bd97485aB3Eec10Bee6336",
        symbol: "gmETH",
        name: "GMX Market",
        logos: {
          coinMarketCap: null,
        },
        decimals: 18,
        priceUsd: "1820974",
        maxLtv: "750000000000000000",
        lt: "800000000000000000",
        oracle: {
          address: "0x045d3f4aB299341C563e6c42826bc18F3906521c",
          oracleKey: "chainlinkV3",
        },
        collateralBaseApr: "0",
        debtBaseApr: "0",
        liquidity: "0",
        tvl: "0",
      },
      silo1: {
        tokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        symbol: "ETH",
        name: "Ether",
        logos: {
          coinMarketCap: {
            small:
              "https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png",
            large:
              "https://s2.coinmarketcap.com/static/img/coins/128x128/2396.png",
          },
        },
        decimals: 18,
        priceUsd: "3690332924",
        maxLtv: "0",
        lt: "0",
        oracle: {
          address: "0x01F73074Cf16420e0Bb2D448cdaF172D419adD00",
          oracleKey: "chainlinkV3",
        },
        collateralBaseApr: "0",
        debtBaseApr: "0",
        liquidity: "110000000000000",
        tvl: "223234500000000000",
      },
    },
    {
      network: "arbitrum",
      id: "7",
      isVerified: false,
      configAddress: "0x1F2F4073D178BEDD8E7087f19AA73A5d4fC02F5a",
      silo0: {
        tokenAddress: "0x3647c54c4c2C65bC7a2D63c0Da2809B399DBBDC0",
        symbol: "SolvBTC",
        name: "Solv BTC",
        logos: {
          coinMarketCap: {
            small:
              "https://s2.coinmarketcap.com/static/img/coins/64x64/33312.png",
            large:
              "https://s2.coinmarketcap.com/static/img/coins/128x128/33312.png",
          },
        },
        decimals: 18,
        priceUsd: "101610751946",
        maxLtv: "900000000000000000",
        lt: "950000000000000000",
        oracle: {
          address: "0x0000000000000000000000000000000000000000",
          oracleKey: "none",
        },
        collateralBaseApr: "0",
        debtBaseApr: "0",
        liquidity: "0",
        tvl: "0",
      },
      silo1: {
        tokenAddress: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
        symbol: "WBTC",
        name: "Wrapped BTC",
        logos: {
          coinMarketCap: {
            small:
              "https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png",
            large:
              "https://s2.coinmarketcap.com/static/img/coins/128x128/3717.png",
          },
        },
        decimals: 18,
        priceUsd: "101605485391",
        maxLtv: "900000000000000000",
        lt: "950000000000000000",
        oracle: {
          address: "0x562805DA32d8212926ED59c6ebA19251c59019f8",
          oracleKey: "chainlinkV3",
        },
        collateralBaseApr: "0",
        debtBaseApr: "0",
        liquidity: "0",
        tvl: "0",
      },
    },
    {
      network: "arbitrum",
      id: "8",
      isVerified: true,
      configAddress: "0x02ED2727D2Dc29b24E5AC9A7d64f2597CFb74bAB",
      silo0: {
        tokenAddress: "0x5979D7b546E38E414F7E9822514be443A4800529",
        symbol: "wstETH",
        name: "Wrapped liquid staked Ether 2.0",
        logos: {
          coinMarketCap: {
            small:
              "https://s2.coinmarketcap.com/static/img/coins/64x64/12409.png",
            large:
              "https://s2.coinmarketcap.com/static/img/coins/128x128/12409.png",
          },
        },
        decimals: 18,
        priceUsd: "4386687686",
        maxLtv: "920000000000000000",
        lt: "960000000000000000",
        oracle: {
          address: "0xD468e35D5B63Dbc74d5FfABBBeb29e1e4C84413c",
          oracleKey: "chainlinkV3",
        },
        collateralBaseApr: "0",
        debtBaseApr: "0",
        liquidity: "25888517977804980",
        tvl: "46462864994929158",
      },
      silo1: {
        tokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        symbol: "ETH",
        name: "Ether",
        logos: {
          coinMarketCap: {
            small:
              "https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png",
            large:
              "https://s2.coinmarketcap.com/static/img/coins/128x128/2396.png",
          },
        },
        decimals: 18,
        priceUsd: "3690332924",
        maxLtv: "920000000000000000",
        lt: "960000000000000000",
        oracle: {
          address: "0x0000000000000000000000000000000000000000",
          oracleKey: "none",
        },
        collateralBaseApr: "0",
        debtBaseApr: "0",
        liquidity: "662691000000000000",
        tvl: "723234500000000000",
      },
    },
  ]);
}
