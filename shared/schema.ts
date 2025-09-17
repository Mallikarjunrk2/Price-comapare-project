import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Product search query schema
export const searchQuerySchema = z.object({
  q: z.string().min(1, "Search query is required"),
});

// Store offer schema
export const storeOfferSchema = z.object({
  store: z.string(),
  price: z.number(),
  link: z.string().url(),
  delivery: z.string(),
  discount: z.number().optional(),
});

// Price statistics schema
export const priceStatsSchema = z.object({
  highest: z.number(),
  average: z.number(),
  lowest: z.number(),
  lastSale: z.number(),
});

// Product schema
export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  short: z.string(),
  lowestPrice: z.number(),
  stores: z.array(storeOfferSchema),
  priceStats: priceStatsSchema,
  dealScore: z.number().min(0).max(100),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type SearchQuery = z.infer<typeof searchQuerySchema>;
export type StoreOffer = z.infer<typeof storeOfferSchema>;
export type PriceStats = z.infer<typeof priceStatsSchema>;
export type Product = z.infer<typeof productSchema>;
