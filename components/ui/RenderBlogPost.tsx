import { allPosts } from "contentlayer/generated";
import Link from "next/link";

const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

const RenderBlogPost = () => {
  const posts = allPosts.sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  );

  return (
    <div className="mt-4 flex flex-col space-y-4 items-center">
      <h2 className="mx-4 text-2xl font-bold text-center">Recent Posts</h2>

      {posts.map((post) => (
        <div
          key={post.url}
          className="mx-4 bg-white-200 w-4/5 max-w-md md:w-1/2 p-4 border-solid border-white border-2 rounded-xl"
        >
          <Link href={post.url}>
            <h2 className="text-lg font-bold">{post.title}</h2>
            <time
              dateTime={post.publishedDate}
              className="block text-sm text-zinc-600"
            >
              {formatDate(post.publishedDate)}
            </time>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RenderBlogPost;
