//Apollo ตัวที่จัดการการติดต่อกับ GraphQL API
//HttpLink  บอก Apollo ว่า API อยู่ที่ไหน
//InMemoryCache ระบบ Cache ของ Apollo 

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://graphql-pokemon2.vercel.app/",
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});