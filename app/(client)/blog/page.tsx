// Importaciones necesarias
import { Metadata } from "next";
import { Categories, PostCard } from "./components";
import { getAllPosts, getCategories, getSimilarPosts } from "@/services";
import { Suspense, lazy } from "react";
import { Spinner } from "@/components/ui/spinner.component";
const PostWidget = lazy(() => import("./components/post-widget.component"));

// Metadatos de la página
export const metadata: Metadata = {
  title: "Blog",
  description: "Blog generado con amor por Ramiro 💖",
  keywords: ["blog", "ramiro", "ramirodev", "ramirodev.com"],
};

// Componente de la página
export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getCategories();
  console.log(posts);
  return (
    <section className="px-4 md:px-16 py-10 min-h-[calc(100vh-96px)]">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:col-span-8 col-span-1 grid gap-8">
          {posts.map((post: any, index: number) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="md:col-span-4 col-span-1">
          <div className="md:sticky relative top-8">
            <Suspense fallback={<Spinner />}>
              <PostWidget />
            </Suspense>
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </section>
  );
}
