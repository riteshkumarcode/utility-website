import { z } from "zod";

// UK phone format regex (accepts 07..., 01..., 02..., +44...)
const ukPhoneRegex = /^(?:(?:\+44\s?|0)[123789]\d{1,4}\s?\d{3,4}\s?\d{3,4}|\+?44\d{10}|0\d{10})$/;

// UK postcode regex
const ukPostcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;

export const enquirySchema = z.object({
  services: z
    .array(z.string())
    .min(1, "Please select at least one service you'd like looked at."),
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be under 80 characters."),
  businessName: z
    .string()
    .trim()
    .min(2, "Please enter your registered or trading business name.")
    .max(100, "Business name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid business email address."),
  phone: z
    .string()
    .trim()
    .regex(ukPhoneRegex, "Please enter a valid UK phone number (e.g. 07... or 01... or +44)."),
  postcode: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || ukPostcodeRegex.test(val), {
      message: "Please enter a valid UK postcode (e.g. SW1A 1AA).",
    }),
  contractEnds: z.string().optional(),
  message: z
    .string()
    .max(2000, "Message must be under 2,000 characters.")
    .optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must confirm you are happy for us to contact you." }),
  }),
  companyWebsite: z.string().optional(), // Honeypot field (must be empty)
  turnstileToken: z.string().optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
