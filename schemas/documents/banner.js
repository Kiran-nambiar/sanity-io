export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "bannerImage",
    },
  },
};
