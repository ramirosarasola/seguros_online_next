import { request, gql } from "graphql-request";
const graphqlAPI = process.env.HYGRAPH_ENDPOINT;

// Get all artists query function
export async function getAllPosts() {
  const response = await fetch(
    "https://sa-east-1.cdn.hygraph.com/content/clxfkfm4a01ma07w8iz2zyew4/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query MyQuery {
                postsConnection {
                  edges {
                    node {
                      author {
                        bio
                        name
                        id
                        photo {
                          url
                        }
                      }
                      createdAt
                      slug
                      title
                      excerpt
                      featuredImage {
                        url
                      }
                      categories {
                        name
                        slug
                      }
                    }
                  }
                }
              }
              `,
      }),
    }
  );
  const json = await response.json();
  return json.data.postsConnection.edges;
}

export async function getRecentPosts() {
  const response = await fetch(
    "https://sa-east-1.cdn.hygraph.com/content/clxfkfm4a01ma07w8iz2zyew4/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query MyQuery {
                posts(
                  orderBy: createdAt_DESC
                  last: 3
                ) {
                  title
                  featuredImage {
                    url
                  }
                  createdAt
                  slug
                }
              } 
              `,
      }),
    }
  );
  const json = await response.json();
  return json.data.posts;
}

export async function getSimilarPosts(categories?: string[], slug?: string) {
  const response = await fetch(
    "https://sa-east-1.cdn.hygraph.com/content/clxfkfm4a01ma07w8iz2zyew4/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query MyQuery($slug: String!, $categories: [String!]) {
                posts(
                  where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
                  orderBy: createdAt_DESC
                  last: 3
                ) {
                  title
                  featuredImage {
                    url
                  }
                  createdAt
                  slug
                }
              }
              `,
        variables: {
          slug,
          categories,
        },
      }),
    }
  );
  const json = await response.json();
  return json.data.posts;
}

export async function getCategories() {
  const response = await fetch(
    "https://sa-east-1.cdn.hygraph.com/content/clxfkfm4a01ma07w8iz2zyew4/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query MyQuery {
                categories {
                  name
                  slug
                }
              }
              `,
      }),
    }
  );
  const json = await response.json();
  return json.data.categories;
}

export async function getPostDetails(slug: string) {
  const response = await fetch(
    "https://sa-east-1.cdn.hygraph.com/content/clxfkfm4a01ma07w8iz2zyew4/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query MyQuery($slug: String!) {
                post(where: {slug: $slug}) {
                  title
                  excerpt
                  featuredImage {
                    url
                  }
                  author {
                    name
                    bio
                    photo {
                      url
                    }
                  }
                  createdAt
                  slug
                  content {
                    raw
                  }
                  categories {
                    name
                    slug
                  }
                }
              }
              `,
        variables: {
          slug,
        },
      }),
    }
  );
  const json = await response.json();
  return json.data.post;
}
