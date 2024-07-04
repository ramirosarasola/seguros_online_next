import Link from "next/link";
type categoriesProps = {
  categories: [];
};

const Categories = ({ categories }: categoriesProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories?.map((category: any, index: number) => (
        <Link
          key={index}
          href={`/blog/category/${category.slug}`}
          className="block w-full mb-3"
        >
          <span className="cursor-pointer block pb-3 mb-3 hover:text-pink-600 text-lg">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
