import type { Metadata } from "next";

// Por cada pagina podemos agregar sus metadatos
export const metadata: Metadata = {
  title: "Blog",
  description: "Blog generated with love by Ramiro 💖",
  keywords: ["blog", "ramiro", "ramirodev", "ramirodev.com"],
};

export default function BlogPage() {
  return (
    <section className="h-[40%] px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-red-500">
      
    </section>
  );
}
