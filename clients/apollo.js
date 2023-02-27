import { ApolloClient, InMemoryCache } from "@apollo/client";

const APClient = new ApolloClient({
	uri: "https://api.lens.dev",
	cache: new InMemoryCache(),
});
export default APClient;
