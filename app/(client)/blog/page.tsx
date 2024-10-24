// Importaciones necesarias
import { Spinner } from "@/components/ui/spinner.component";
import { getAllPosts, getCategories } from "@/services";
import { Metadata } from "next";
import Script from "next/script";
import { Suspense, lazy } from "react";
import { PageWrapper } from "../../../components/ui/page-wrapper";
import { Categories, PostCard } from "./components";
import Breadcrumbs from "./components/breadcrumb.component";
import { SectionTitleComponent } from "../../../components/ui/section-title.component";
const PostWidget = lazy(() => import("./components/post-widget.component"));

// Metadatos de la página
export const metadata: Metadata = {
  metadataBase: new URL("https://segurosonline.com.ar"),
  alternates: {
    canonical: "/blog",
  },
  title: "Seguros Online | Blog de seguros",
  description:
    "Seguros Online. Blog. Cotización. Seguro. Vida. Auto. Todo en un solo lugar.",
  openGraph: {
    title: "Seguros Online | Blog de seguros",
    description:
      "Seguros Online. Blog. Cotización. Seguro. Vida. Auto. Todo en un solo lugar.",
    url: "https://segurosonline.com.ar/blog",
    siteName: "Seguros Online Blog",
    images: [
      {
        url: "https://segurosonline.com.ar/cotizador-seguros-online.jpeg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title: "Seguros Online | Blog de seguros",
    description:
      "Seguros Online. Blog. Cotización. Seguro. Vida. Auto. Todo en un solo lugar.",
    images: ["https://segurosonline.com.ar/cotizador-seguros-online.jpeg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getCategories();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Seguros Online | Blog de seguros",
    url: "https://segurosonline.com.ar/blog",
    description:
      "Seguros Online. Blog. Cotización. Seguro. Vida. Auto. Todo en un solo lugar.",
    publisher: {
      "@type": "Organization",
      name: "Seguros Online",
      logo: {
        "@type": "ImageObject",
        url: "https://segurosonline.com.ar/logo.png", // Cambia esto a la URL del logo de tu empresa
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://segurosonline.com.ar/blog",
    },
  };

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageWrapper>
        <section className="px-4 md:px-16 py-10 min-h-[calc(100vh-96px)]">
          <div className="w-full flex items-center justify-center">
            <SectionTitleComponent title="Blog Seguros Online" heading="h1" />
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:col-span-8 col-span-1 grid gap-8">
              <PostCard post={posts[0].node} />

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {posts.map((post: any, index: number) => {
                  if (index !== 0)
                    return <PostCard key={index} post={post.node} />;
                })}
              </div>
            </div>
            <div className="md:col-span-4 md:min-w-[400px] col-span-1">
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
