import { z } from 'zod'
import { todoSchema } from '../schemas'

export type Todo = z.infer<typeof todoSchema>
