import { list } from "@keystone-6/core";
import { text, relationship, timestamp } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { document } from "@keystone-6/fields-document";

export const Post = list({
  access: {
    operation: {
   
       create: ({  session }) => {
        if (!session) return false;
        if (session.data.id) return true;
      },
      update: ({ authentication: { item } }) => !!item,
      delete: ({ authentication: { item } }) => !!item,
    },
  },
  fields: {
    title: text({ validation: { isRequired: true } }),
    description: document(),
    updatedAt: timestamp(),
    author: relationship({ ref: "User.post", many: false }),
    slug: text({ validation: { isRequired: true } }),
  },
});
