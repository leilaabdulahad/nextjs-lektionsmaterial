import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const submitContactForm = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, { name, email, message }) => {
    await ctx.db.insert("contactMessages", {
      name,
      email,
      message,
      createdAt: Date.now(),
    });
  },
});

export const getAllMessages = query({
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db.query("contactMessages").collect();
    return messages;
  },
});
