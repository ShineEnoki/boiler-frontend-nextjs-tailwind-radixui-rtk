import { NextRequest } from 'next/server';
import { z } from 'zod';

export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data?: T;
  errors?: string[];
}

export type RouteHandler = (
  req: NextRequest,
  params?: { params: { [key: string]: string } }
) => Promise<Response>;


export const otpSchema = z.object({
  email: z.string().email("Invalid email format"),
  otpCode: z.string().length(6, "OTP must be 6 digits"),
});

export type OtpRequest = z.infer<typeof otpSchema>;
