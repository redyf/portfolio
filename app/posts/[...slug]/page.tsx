import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

type Props = {
  params: {
    slug: string[];
  };
};

// generate static paths for blog posts and renders a single blog post based on the URL slug
export async function generateStaticParams(): Promise<Props["params"][]> {
  return allPosts.map(({ url }) => ({
    slug: url.split("/").slice(1), // remove posts from the start of the url
  }));
}

export default function Page({ params }: Props) {
  const post = allPosts.find(
    (post) => post.url === `/posts/${params.slug.join("/")}`,
  );

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl py-8 px-4">
      <header className="mb-8">
        <Link
          href="/"
          className="text-center font-semibold text-indigo-500 hover:text-indigo-700"
        >
          Home
        </Link>
        <h1 className="mt-4 text-4xl font-extrabold text-white">
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
      </header>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      ></div>
    </article>
  );
}
