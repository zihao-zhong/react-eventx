export interface AssetsFilter {
  search?: string;
  ids?: string;
  limit?: number;
  offset?: number;
}

export interface AssetsResponse {
  id: string;
  name: string;
  rank: string;
  supply: string;
  symbol: string;
  explorer: string;
  priceUsd: string;
  vwap24Hr: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  maxSupply: string | null;
  changePercent24Hr: string;
}