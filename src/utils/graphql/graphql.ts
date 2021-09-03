import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const initializeClient = () =>
  new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });

export const getLaunchesQuery = gql`
  query Launches {
    launches(limit: 30) {
      id
      details
      launch_date_utc
      mission_name
    }
  }
`;
