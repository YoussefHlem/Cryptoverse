import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    "X-RapidAPI-Key": "ddb6f841c7msh0fe50938580ead8p15cae8jsnf1ee0409bc94",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

// Helper Function to get endpoint
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`./coins?limit=${count || 10}`),
        }),
    }),
});

export const { useGetCryptosQuery } = cryptoApi;
