import { request, gql } from 'graphql-request';
import { arbitrum, optimism } from 'viem/chains';

const ARB_GRAPH_URL =
  'https://api.studio.thegraph.com/query/22219/test-silo-finance-v2-arbitrum/0.8.2';


export function getEndpoint(chainId: number) {
  if (chainId === arbitrum.id) return ARB_GRAPH_URL;
  throw new Error('Unsupported chain');
}


export type Token = {
  id: string;
  symbol: string;
  decimals: number;
};

export type Market = {
  id: string;
  name: string;
  inputToken: Token;
  sToken: Token;
  spToken: Token;
  dToken: Token;
};

export type Silo = {
  id: string;
  name: string;
  configAddress: string;
  siloId: string;
  daoFeeBp: number;
  deployerFeeBp: number;
  markets: Market[];
};


export type Markets = {
  markets: Market[];
};

export type SiloMarkets = {
  silos: Silo[];
};


const SILO_QUERY = gql`
  query SiloMarkets {
    silos(orderBy: siloId, orderDirection: asc) {
      id
      name
      configAddress
      siloId
      daoFee
      deployerFee
      markets {
        id
        name
        inputToken {
          id
          name
          symbol
          decimals
        }
        sToken {
          id
          name
          symbol
          decimals
        }
        spToken {
          id
          name
          symbol
          decimals
        }
        dToken {
          id
          name
          symbol
          decimals
        }
        flashLoanFee
        liquidationFee
        liquidationTargetLtv
        solvencyOracle
        maxLtvOracle
        interestRateModel
        maxLtv
        lt
      }
    }
  }
`;


export async function fetchSilos(endpoint: string) {
  const result = (await graphFetch(endpoint, SILO_QUERY)) as SiloMarkets;
  if (!result) return [];
  return result.silos ? (result.silos as Silo[]) : [];
}

export async function graphFetch(endpoint: string, query: string) {
  return await request(endpoint, query);
}
