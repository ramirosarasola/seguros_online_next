import {
  getPostsByCategory,
  getCategories,
  getCategoryBySlug,
} from "@/services";
import { notFound } from "next/navigation";
import { Categories, PostCard } from "../../components";
import { GoBackButton } from "../../components/go-back-button.componen";
import { PageWrapper } from "@/components/ui/page-wrapper";
import Script from "next/script";
import { url } from "inspector";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const category = await getCategoryBySlug(params.slug);
  if (!category) {
    return {};
  }

  const formattedSlug = category.name;

  return {
    metadataBase: new URL("https://segurosonline.com.ar"),
    alternates: {
      canonical: `blog/category/${params.slug}`,
    },
    title: `Categoría - ${formattedSlug}`,
    description: `Explora artículos relacionados con ${formattedSlug} en Seguros Online.`,
    robots: "index, follow",
    author: "Seguros Online",
    publisher: "Seguros Online",
    keywords: `seguros, ${params.slug}, cotizaciones, seguros online`,
    openGraph: {
      title: `Categoría - ${formattedSlug}`,
      description: `Explora artículos sobre ${formattedSlug} en Seguros Online.`,
      type: "website",
      siteName: "Seguros Online",
      url: `https://segurosonline.com.ar/blog/category/${params.slug}`,
      images: [
        {
          url: "/default-image.jpg", // Usa una imagen por defecto o agrega una lógica para las imágenes de categorías.
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category: any) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: any) {
  const posts = await getPostsByCategory(params.slug);
  const categories = await getCategories();

  if (!posts || posts.length === 0) {
    return notFound();
  }

  const formatSlug = (slug: string) => {
    // capitalize every word in the slug
    const formattedSlug = slug.replace(/-/g, " ");
    return formattedSlug
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Seguros sobre ${formatSlug(params.slug)}`,
    description: `Lista de Seguros relacionados con ${formatSlug(
      params.slug
    )} en Seguros Online.`,
    itemListElement: posts.map((post: any, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: post.title,
        url: `https://segurosonline.com.ar/blog/${post.slug}`, // Asegúrate de que `post.slug` esté disponible
        image: post.featuredImage?.url, // URL de la imagen destacada
        datePublished: post.date, // Fecha de publicación
        author: {
          "@type": "Person",
          url: "https://segurosonline.com.ar/",
          name: post.author?.name || "Seguros Online", // Cambia esto si tienes el nombre del autor
        },
      },
    })),
  };

  return (
    <PageWrapper>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="px-4 md:px-16 py-10 min-h-[calc(100vh-96px)]">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:col-span-8 col-span-1 grid gap-8">
            <div className="w-full flex justify-start items-center gap-4">
              <GoBackButton />
              <h1 className="text-3xl font-semibold my-8">{`${formatSlug(
                params.slug
              )}`}</h1>
            </div>
            <PostCard post={posts[0]} />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {posts.map((post: any, index: number) => {
                if (index !== 0) return <PostCard key={index} post={post} />;
              })}
            </div>
          </div>
          <div className="md:col-span-4 col-span-1">
            <div className="md:sticky relative top-8">
              {/* <Suspense fallback={<Spinner />}>
                  <PostWidget />
                </Suspense> */}
              <Categories categories={categories} />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
