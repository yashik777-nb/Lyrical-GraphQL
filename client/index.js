import React from "react";
import { createRoot } from "react-dom/client";

import SongList from "./components/SongList";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Root />);
