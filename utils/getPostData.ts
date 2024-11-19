import { allPosts, Post } from "contentlayer/generated";
import { serialize } from "next-mdx-remote/serialize";

export interface PostData {
  title: string;
  publishedDate: string;
  tags: string[];
  mdxSource: any;
}

export async function getPostData(slug: string[]): Promise<PostData> {
  const post = allPosts.find(
    (post) => post.url === `/posts/${slug.join("/")}`,
  ) as Post;

  if (!post) {
    throw new Error("Post not found");
  }

  const mdxSource = await serialize(post.body.raw); // Use raw for serialization

  if (!post.tags) {
    throw new Error("Tags are missing for this post");
  }

  return {
    title: post.title,
    publishedDate: post.publishedDate,
    tags: post.tags,
    mdxSource,
  };
}
