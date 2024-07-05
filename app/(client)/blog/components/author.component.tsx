import Image from "next/image";
import { Post } from "../types/post";

type AuthorProps = {
  author: Post;
};

const Author = ({ author }: any) => {
  return (
    <div className="text-center mt-20 p-12 relative rounded-lg bg-primary bg-opacity-80">
      {/* center the image */}
      <div className="absolute left-[50%]  translate-x-[-50%] -top-[50px]">
        <Image
          src={author.photo.url}
          alt={"seguros online"}
          width={100}
          height={100}
          className="align-middle object-contain rounded-full h-[100px] w-[100px]"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
