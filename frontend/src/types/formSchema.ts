import { z } from "zod";

export const PhoneVerifySchema = z.object({
    code: z.string().max(6, "Verification code is required").regex(/^\d+$/, "Wrong verification code. Try again"),
})

export const PhoneLoginSchema = z.object({
    phoneNumber: z.string().min(1, "Phone number is required").regex(/^\d+$/, "Wrong phone number. Try again"),
})