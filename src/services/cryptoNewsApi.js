import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// https://rapidapi.com/MatcherLabs/api/news-api14

// RAPID API

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "ec36c69e06msh906fe2fdc7a28f3p109687jsn539ca43c9c84",
  "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
};

const baseUrl = "https://news-api14.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // get cryptocurrencies

    // ENDPOINT
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/search?q=${newsCategory}&country=us&language=en&pageSize=${count}&publisher=cnn.com%2Cbbc.com`
        ),
    }),
  }),
});

// Export Crypto API
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
