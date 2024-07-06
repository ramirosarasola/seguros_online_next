import React from "react";
import moment from "moment";
import Image from "next/image";

type PostDetailProps = {
  post: any;
};

const PostDetail = ({ post }: PostDetailProps) => {
  const getContentFragment = (
    index: number,
    text: any,
    obj: any,
    type?: any
  ) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 md:p-8 pb-12">
      <div className="relative overflow-hidden shadow-md mb-6">
        <Image
          src={post?.featuredImage?.url}
          alt={post.title}
          className="object-center w-full object-cover shadow-lg rounded-t-lg md:rounded-lg"
          width={200}
          height={80}
        />
      </div>

      <div className="px-4 md:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 md:mb-0 w-full md:w-auto mr-8">
            <Image
              alt={"seguros online"}
              height="30"
              width="30"
              className="align-middle rounded-full w-auto h-auto"
              src={"/logo-op.webp"}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              {"seguros online"}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            {/* Calendar */}
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
        <h1 className="mb-8 text-xl md:text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj: any, index: number) => {
          const children = typeObj.children.map((item: any, itemIndex: any) =>
            getContentFragment(itemIndex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
