import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  admins: defineTable({
    email: v.string(),
    userId: v.string(),
  }),
  lessons: defineTable({
    title: v.string(),
    description: v.string(),
    pdfId: v.id("_storage"),
    subject: v.string(),
    grade: v.number(),
  }),
});
