import { getAllPosts, getPostDetails } from "@/services"
import { Author, Categories, Comments, CommentsForm, PostDetail, PostWidget } from "../../components";



export default async function PostPage({ params }: { params: { slug: string } }) {

  const post = await getPostDetails(params.slug);

  return (
    <section className="mx-auto px-10 mb-8 py-10">
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
