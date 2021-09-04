import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const initializeClient = () =>
  new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });

export const getLaunchesQuery = gql`
  query Launches {
    launches(limit: 14) {
      id
      details
      launch_date_unix
      mission_name
      links {
        flickr_images
      }
      ships {
        id
        image
        name
      }
    }
  }
`;

export const getLaunchQuery = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      id
      details
      launch_date_unix
      mission_name
      links {
        flickr_images
      }
      ships {
        id
        image
        name
      }
    }
  }
`;
