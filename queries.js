import { gql } from "@apollo/client";
export const EXPLORE_POSTS = gql`
  query ($request: ExplorePublicationRequest!) {
    explorePublications(request: $request) {
      items {
        __typename
        ... on Post {
          ...PostFields
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
  fragment MediaFields on Media {
    url
    width
    height
    mimeType
  }
  fragment ProfileFields on Profile {
    id
    name
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
          ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
  }
  fragment PublicationStatsFields on PublicationStats {
    totalAmountOfMirrors
    totalUpvotes
    totalAmountOfCollects
    totalAmountOfComments
  }
  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }

  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
  }
`;
