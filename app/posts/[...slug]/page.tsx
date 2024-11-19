"use client";

import { MDXRemote } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";
import { getPostData, PostData } from "@/utils/getPostData";
import { mdxComponents } from "@/mdx-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: {
    slug: string[];
  };
};

export default function Page({ params }: Props) {
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getPostData(params.slug);
        setPost(postData);
      } catch (error) {
        notFound();
      }
    };

    fetchData();
  }, [params.slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const fixedComponents = {
    ...mdxComponents,
    img: ({
      src = "",
      alt = "Image",
      width,
      height,
      ...props
    }: JSX.IntrinsicElements["img"]) => (
      <Image
        src={src}
        alt={alt}
        width={typeof width === "string" ? parseInt(width) : width || 800}
        height={typeof height === "string" ? parseInt(height) : height || 600}
        {...props}
      />
    ),
  };

  return (
    <MDXProvider components={fixedComponents}>
      <div className="bg-black min-h-screen py-10">
        <article className="mx-auto max-w-3xl bg-white shadow-lg rounded-lg p-6 text-black">
          <header className="mb-6">
            <Link
              href="/"
              className="text-indigo-500 hover:text-indigo-700 font-medium"
            >
              &larr; Back to Home
            </Link>
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900">
              {post.title}
            </h1>
            <time
              dateTime={post.publishedDate}
              className="block mt-2 text-sm text-gray-600"
            >
              Published on{" "}
              {new Date(post.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          <div className="prose prose-lg max-w-none">
            <MDXRemote {...post.mdxSource} />
          </div>
          <footer className="mt-8 border-t pt-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} My Blog. All rights reserved.
            </p>
          </footer>
        </article>
      </div>
    </MDXProvider>
  );
}
