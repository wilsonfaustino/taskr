import { z } from 'zod'

export const todoSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, { message: 'Título é obrigatório' }),
  completed: z.boolean().default(false),
  createdAt: z
    .date()
    .default(() => new Date())
    .optional(),
  updatedAt: z
    .date()
    .default(() => new Date())
    .optional(),
  userId: z.string().uuid(),
})
