import { ConvexError, v } from "convex/values"
import { mutation, query, action, internalMutation } from "./_generated/server"
import { api, internal } from "./_generated/api"

export const createLesson = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    subject: v.string(),
    pdfId: v.id("_storage"),
    grade: v.string(),
  },
  handler: async (ctx, { title, description, subject, grade, pdfId }) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new ConvexError("Unauthenticated")

    await ctx.db.insert("lessons", {
      pdfId,
      title,
      description,
      subject,
      grade,
    })
  },
})

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const lessons = await ctx.db.query("lessons").collect()

    const lessonsWithUrls = await Promise.all(
      lessons.map(async (lesson) => {
        let pdfUrl = null
        try {
          pdfUrl = await ctx.storage.getUrl(lesson.pdfId)
        } catch (error) {
          console.error(`Failed to get PDF URL for pdfId ${lesson.pdfId}: ${error}`)
        }
        return { ...lesson, pdf: pdfUrl }
      })
    );

    return lessonsWithUrls;
  },
})

export const getById = query({
  args: {
    lessonId: v.id("lessons"),
    userId: v.optional(v.string()),
  },
  handler: async (ctx, { lessonId }) => {
    const lesson = await ctx.db.get(lessonId);
    if (!lesson) throw new ConvexError("Lesson not found")

    const pdfUrl = lesson.pdfId ? await ctx.storage.getUrl(lesson.pdfId) : null

    return { ...lesson, pdf: pdfUrl }
  },
})

export const updateLesson = mutation({
  args: {
    id: v.id("lessons"),
    title: v.string(),
    description: v.string(),
    subject: v.string(),
    grade: v.string(),
    pdfId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new ConvexError("Unauthorized")

    return await ctx.db.patch(args.id, {
      title: args.title,
      description: args.description,
      subject: args.subject,
      grade: args.grade,
      pdfId: args.pdfId ? args.pdfId : undefined,
    })
  },
})

export const deleteLesson = action({
  args: {
    id: v.id("lessons"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new ConvexError("Unauthorized")

    const lesson = await ctx.runQuery(api.lessons.getById, { lessonId: args.id })

    await ctx.runMutation(internal.lessons.deleteForReal, { lessonId: lesson._id, pdfId: lesson.pdfId })
  }
})

export const deleteForReal = internalMutation({
  args: {
    lessonId: v.id("lessons"),
    pdfId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.lessonId)
    await ctx.storage.delete(args.pdfId)
  }
})
