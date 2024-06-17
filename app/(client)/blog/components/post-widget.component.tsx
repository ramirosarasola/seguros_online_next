'use client';
import { getRecentPosts, getSimilarPosts } from "@/services";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type PostWidgetProps = {
  categories?: string[];
  slug?: string;
}

const PostWidget = ({ categories, slug }: PostWidgetProps) => {

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => {
          setRelatedPosts(result)
        })
    } else {
      getRecentPosts()
        .then((result) => {
          setRelatedPosts(result)
        })
    }
  },[slug])

  console.log(categories)

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>

      {relatedPosts.map((post: any, index: number) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height="60"
              width="60"
              className="w-auto h-auto align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/blog/post/${post.slug}`} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget;