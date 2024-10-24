import { getAllPosts, getPostDetails } from "@/services";
import { Author, Categories, PostDetail, PostWidget } from "../../components";
import { GoBackButton } from "../../components/go-back-button.componen";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { notFound } from "next/navigation";
import CotizarBanner from "@/app/(client)/(brands)/[slug]/components/cotizar-banner.component";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostDetails(params.slug);
  return {
    metadataBase: new URL("https://segurosonline.com.ar"),
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    title: `Blog - ${post?.title}`,
    description: post?.excerpt,
    robots: "index, follow",
    author: "Seguros Online",
    publisher: "Seguros Online",
    keywords: "seguros, online, cotizador, cotizacion, seguro, autos, vida",
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      type: "website",
      siteName: "Seguros Online",
      url: `https://segurosonline.com.ar/blog/${params.slug}`,
      images: [
        {
          url: post?.featuredImage?.url,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  try {
    const response = await getAllPosts();

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    if (!Array.isArray(posts)) {
      throw new Error("Invalid posts data");
    }

    if (posts.length === 0) {
      return [];
    }

    return posts.map((post: any) => ({
      slug: post.node.slug,
    }));
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export const revalidate = 60;
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostDetails(params.slug);

  if (!post) {
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
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://segurosonline.com.ar/blog/${params.slug}`,
    image: post.featuredImage?.url, // Asegúrate de que esto sea la URL de la imagen destacada
    author: {
      "@type": "Person",
      name: post.author?.name || "Seguros Online", // Cambia esto si tienes el nombre del autor
    },
    publisher: {
      "@type": "Organization",
      name: "Seguros Online",
      logo: {
        "@type": "ImageObject",
        url: "https://segurosonline.com.ar/logo.png", // Cambia esto a la URL del logo de tu empresa
      },
    },
    datePublished: post.date, // Asegúrate de que esto sea la fecha correcta
    dateModified: post.modifiedDate || post.date, // Usa la fecha modificada si está disponible
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://segurosonline.com.ar/blog/${params.slug}`,
    },
  };

  return (
    <PageWrapper>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto px-4 md:px-16 mb-8 py-10">
        <div className="w-full flex justify-start items-center gap-4">
          <GoBackButton />
          <h1 className="text-3xl font-semibold my-8">{`${formatSlug(
            params.slug
          )}`}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="col-span-1 md:col-span-8">
            <PostDetail post={post} />
            {/* <Author author={post.author} /> */}
            {/* <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} /> */}
          </div>
          <div className="col-span-1 md:col-span-4">
            <div className="relative md:sticky top-8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map(
                  (category: any) => category.slug
                )}
              />
              <Categories categories={post.categories} />
            </div>
          </div>
        </div>
      </section>
      <CotizarBanner
        title="Cotiza tu seguro con un 30% de descuento!"
        buttonLabel="Cotizar ahora!"
        redirect={true}
      />
    </PageWrapper>
  );
}
