import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ukkucr10mg01uk37zz0rt7/master',
  cache: new InMemoryCache()
});