"use client";

import { apolloClient } from "@/lib/apollo-client";
import { ApolloProvider as Provider } from "@apollo/client/react";

export default function ApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider client={apolloClient}>
      {children}
    </Provider>
  );
}
//ทุก Component ที่อยู่ข้างในนี้ สามารถใช้ Apollo Client ตัวนี้เพื่อเรียก GraphQL ได้