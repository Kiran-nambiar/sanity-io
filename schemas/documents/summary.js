export default {
  name: "summary",
  title: "Summary",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
