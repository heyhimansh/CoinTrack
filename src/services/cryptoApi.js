import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Crypto API Headers OBJECT
const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'fd7558aa61mshcfffaab64eda177p1253c0jsnbb6b43beda6d',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  
    
   };
// Base URL
const baseUrl = "https://api.coinranking.com/v2";

// Make API Request
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// Crypto API Redux Logic
export const cryptoApi = createApi({

  reducerPath: "cryptoApi",

  // function that except a object base url
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // get cryptocurrencies
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
    getCryptoSearch: builder.query({
      query: (searchedTerm) =>
        createRequest(`search-suggestions?query=${searchedTerm}`),
    }),
    // getExchanges: builder.query({
    //     query: () => createRequest('/exchanges'),
    //   }),
  }),
});

// Export Crypto API
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetCryptoSearchQuery,
} = cryptoApi;


// "X-RapidAPI-Key": 'coinrankingfd7558aa61mshcfffaab64eda177p1253c0jsnbb6b43beda6d',
  // "X-RapidAPI-Host": "https://api.coinranking.com/v2",
  // 'x-access-token': 'coinrankingfd7558aa61mshcfffaab64eda177p1253c0jsnbb6b43beda6d'