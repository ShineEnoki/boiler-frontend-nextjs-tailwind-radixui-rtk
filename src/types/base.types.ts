import { z } from "zod";

// Options Schema
export const optionsSchema = z.object({
  label: z.union([z.string(), z.any()]),
  value: z.string(),
});
export type IOptions = z.infer<typeof optionsSchema>;

// Pagination Schema
export const paginationSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
  pageCount: z.number().optional(),
});
export type PaginationTypes = z.infer<typeof paginationSchema>;

export interface APIResponse<T> {
  isSuccess: boolean;
  message: string;
  currentPage?: number;
  totalPages?: number;
  itemsPerPage?: number;
  totalCounts?: number;
  data?: T;
}

// Menu Schema
export const menuSchema = z.object({
  name: z.string(),
  path: z.string(),
  icon: z.any(),
});
export type Menu = z.infer<typeof menuSchema>;

// Image Schema
export const imageSchema = z.object({
  id: z.string(),
  url: z.string(),
  status: z.string(),
  createdById: z.string(),
  updatedById: z.string().nullable(),
  createdByPlayerId: z.string().nullable(),
  updatedByPlayerId: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type Image = z.infer<typeof imageSchema>;

