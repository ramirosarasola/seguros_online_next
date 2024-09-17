const graphqlAPI = process.env.HYGRAPH_ENDPOINT;

//* Blog Posts
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
  // console.log(json.data.post);
  return json.data.post;
}

export async function getPostsByCategory(categorySlug: string) {
  const response = await fetch(
    "https://sa-east-1.cdn.hygraph.com/content/clxfkfm4a01ma07w8iz2zyew4/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetPostsByCategory($categorySlug: String!) {
            posts(where: {categories_some: {slug: $categorySlug}}) {
              id
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
          categorySlug,
        },
      }),
    }
  );
  const json = await response.json();
  return json.data.posts;
}

//* Brands

export async function getBrandData(
  slug: string,
  p0: { next: { revalidate: number } }
) {
  // Validación previa para asegurarse de que 'slug' está definido
  if (!slug) {
    throw new Error("El parámetro 'slug' debe estar definido.");
  }

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
            brands(where: { slug: $slug }) {
              id
              title
              slug
              image {
                url
              }
              content {
                html
              }
            }
          }
        `,
        variables: {
          slug: slug, // Asegura que la variable 'slug' se pase correctamente
        },
      }),
    }
  );

  const json = await response.json();

  // Manejo de errores para solicitudes fallidas
  if (!response.ok) {
    console.error("Error fetching data:", json.errors);
    throw new Error(json.errors[0].message || "An unknown error occurred.");
  }
  // console.log(json?.data?.brands[0]);
  return json?.data?.brands[0];
}

export async function getAllBrands() {
  const response = await fetch(
    "https://sa-east-1.cdn.hygraph.com/content/clxfkfm4a01ma07w8iz2zyew4/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetAllBrands {
            brands {
              id
              title
              slug
              image {
                url
              }
              content {
                html
              }
            }
          }
        `,
      }),
    }
  );

  const json = await response.json();

  // Manejo de errores para solicitudes fallidas
  if (!response.ok) {
    console.error("Error fetching data:", json.errors);
    throw new Error(json.errors[0].message || "An unknown error occurred.");
  }

  return json?.data?.brands || [];
}

//* Aseguradoras

export async function getCompanyData(
  slug: string,
  p0: { next: { revalidate: number } }
) {
  // Validación previa para asegurarse de que 'slug' está definido
  if (!slug) {
    throw new Error("El parámetro 'slug' debe estar definido.");
  }

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
            companies(where: { slug: $slug }) {
              id
              title
              slug
              image {
                url
              }
              content {
                html
              }
            }
          }
        `,
        variables: {
          slug: slug, // Asegura que la variable 'slug' se pase correctamente
        },
      }),
    }
  );

  const json = await response.json();

  // Manejo de errores para solicitudes fallidas
  if (!response.ok) {
    console.error("Error fetching data:", json.errors);
    throw new Error(json.errors[0].message || "An unknown error occurred.");
  }
  // console.log(json?.data?.companies[0]);
  return json?.data?.companies[0];
}

export async function getAllCompanies() {
  const response = await fetch(
    "https://sa-east-1.cdn.hygraph.com/content/clxfkfm4a01ma07w8iz2zyew4/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetAllCompanies {
            companies {
              id
              title
              slug
              image {
                url
              }
              content {
                html
              }
            }
          }
        `,
      }),
    }
  );

  const json = await response.json();

  // Manejo de errores para solicitudes fallidas
  if (!response.ok) {
    console.error("Error fetching data:", json.errors);
    throw new Error(json.errors[0].message || "An unknown error occurred.");
  }

  return json?.data?.companies || [];
}
