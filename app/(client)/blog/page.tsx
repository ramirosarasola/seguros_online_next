// Importaciones necesarias
import { Spinner } from "@/components/ui/spinner.component";
import { getAllPosts, getCategories } from "@/services";
import { Metadata } from "next";
import { Suspense, lazy } from "react";
import { Categories, PostCard } from "./components";
import Script from "next/script";
import { PageWrapper } from "../../../components/ui/page-wrapper";
const PostWidget = lazy(() => import("./components/post-widget.component"));

// Metadatos de la página
export const metadata: Metadata = {
  metadataBase: new URL("https://www.segurosonline.com.ar"),
  title: "Seguros Online | Blog de seguros",
  description:
    "Seguros Online. Blog. Cotización. Seguro. Vida. Auto. Todo en un solo lugar.",
  openGraph: {
    title: "Seguros Online | Blog de seguros",
    description:
      "Seguros Online. Blog. Cotización. Seguro. Vida. Auto. Todo en un solo lugar.",
    url: "https://www.segurosonline.com.ar/blog",
    siteName: "Seguros Online Blog",
    images: [
      {
        url: "https://www.segurosonline.com.ar/cotizador-seguros-online.jpeg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title: "Seguros Online | Blog de seguros",
    description:
      "Seguros Online. Blog. Cotización. Seguro. Vida. Auto. Todo en un solo lugar.",
    images: ["https://www.segurosonline.com.ar/cotizador-seguros-online.jpeg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

// Componente de la página

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getCategories();
  return (
    <>
      <Script
        id="schema-blog"
        // strategy=""
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "Seguros Online",
            alternateName: "Cotizador de Seguros Online",
            url: "https://www.segurosonline.com.ar/blog",
            logo: "https://www.segurosonline.com.ar/cotizador-seguros-online.jpeg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+54 9 11 6423-5002",
              contactType: "sales",
              contactOptions: "TollFree",
              areaServed: "AR",
              avaliableLanguage: "es",
            },
          }),
        }}
      />
      <PageWrapper>
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
      </PageWrapper>
    </>
  );
}
