import { z } from 'zod';

const activity = z
  .object({
    description: z.string(),
    timeSpent: z.string().regex(/^(\d{1,}|[1-5]\d{2,})m$/),
  })
  .strict();

const user = z
  .object({
    name: z.string(),
    age: z.number().min(10),
    contact: z.string(),
  })
  .strict();

const formData = z
  .object({
    user: user,
    activities: z.array(activity),
  })
  .strict();

export type FormData = z.infer<typeof formData>;
