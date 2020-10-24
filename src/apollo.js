import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/", // My API Server Connect
});

export default client;
