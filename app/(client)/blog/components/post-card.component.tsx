import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }: any) => {
  return (
    <article className="bg-white shadow-lg rounded-lg p-0 md:p-8 pb-12 max-h-[700px] flex flex-col items-center justify-between">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6 w-full">
        <Image
          src={post?.featuredImage?.url}
          alt={post?.title}
          className="object-center absolute h-80 w-full object-cover shadow-lg rounded-t-lg md:rounded-lg"
          width={200}
          height={80}
          priority
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursos-pointer hover:text-[#1570B1] text-xl md:text-xl font-semibold line-clamp-2">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h1>

      {/* PostCard Author + Calendar */}
      <div className="block md:flex text-center items-center justify-center mb-8 w-full">
        {/* PostCard Author */}
        <div className="flex items-center justify-center mb-4 md:mb-0 w-full md:w-auto mr-8">
          <Image
            alt={"seguros online"}
            height="30"
            width="30"
            className="align-middle rounded-full w-auto h-auto"
            src={"/logo-op.webp"}
          />
          <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
            {post.author.name}
          </p>
        </div>

        {/* PostCard Calendar */}
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="rgb(236 72 153 / var(--tw-text-opacity))"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>

          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>

      {/* PostCard Description */}
      <p className="text-center text-md text-gray-700 font-normal px-4 mb-8 line-clamp-2">
        {post.excerpt}
      </p>

      {/* PostCard Button */}
      <Link href={`/blog/${post.slug}`}>
        <button className="font-normal transition duration-500 transform hover:-translate-y-1 inline-block bg-[#1570B1] text-lg rounded-full text-white px-8 py-3 cursor-pointer">
          <p className="text-sm text-white">Continuar leyendo</p>
        </button>
      </Link>
    </article>
  );
};

export default PostCard;
