import type { Metadata } from "next";


// Por cada pagina podemos agregar sus metadatos
export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog generated with love by Ramiro 💖',
  keywords: ['blog', 'ramiro', 'ramirodev', 'ramirodev.com'],
};

export default function BlogPage() {
  return <h1>Blog</h1>;
}