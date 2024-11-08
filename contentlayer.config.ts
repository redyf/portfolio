import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "Title of the post",
      required: true,
    },
    publishedDate: {
      type: "date",
      description: "Date that the post was published",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm], // Optional
  },
});
