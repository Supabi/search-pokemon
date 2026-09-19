import ApolloProvider from "@/components/ApolloProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Search Pokemon",
  description: "Search Pokemon using GraphQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}