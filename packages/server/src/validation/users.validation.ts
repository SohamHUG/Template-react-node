import { z } from "zod";

export const userValidation = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters long" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "Password must contain at least one symbol" }),
    email: z.email({ message: "Invalid email address" })
    /* .refine(async (email): boolean => {

    }) */
});