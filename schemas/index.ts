import * as z from "zod"

export const ApplicationSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required!"
    }),
    number: z.string().min(5),
    check:z.boolean()
})