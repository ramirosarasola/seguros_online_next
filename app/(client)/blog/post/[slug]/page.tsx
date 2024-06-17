import { getAllPosts, getPostDetails } from "@/services"
import { Author, Categories, Comments, CommentsForm, PostDetail, PostWidget } from "../../components";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const response = await getPostDetails(params.slug);
    if (response?.length === 0) {
      return {
        title: 'Post not found',
        description: 'Post not found',
      }
    } else {
      return {
        openGraph: {
          title: response?.[0]?.node?.title,
          description: response?.[0]?.node?.excerpt,
          images: [
            {
              url: response?.[0]?.node?.featuredImage?.url
            }
          ]
        }
      }
   }
  } catch (error) {
      console.error('Error:', error);
  }
}


export async function generateStaticParams() {
  
  try {
    const response = await getAllPosts();

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await response.json();

    if (!Array.isArray(posts)) {
      throw new Error('Invalid posts data');
    }

    if(posts.length === 0) {
      return [];
    }

    return posts.map((post: any) => ({
      slug: post.node.slug
    }));

  }catch(error) {
    console.error('Error:', error);
    return [];
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {

  const post = await getPostDetails(params.slug);

  return (
    <section className="mx-auto px-4 md:px-16 mb-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="col-span-1 md:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          {/* <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} /> */}
        </div>
        <div className="col-span-1 md:col-span-4">
          <div className="relative md:sticky top-8">
            <PostWidget slug={post.slug} categories={post.categories.map((category: any) => category.slug)} />
            <Categories />
          </div>
        </div>
      </div>
    </section>
  );
}
