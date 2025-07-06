typescript
// emailSender.ts

import nodemailer from 'nodemailer';
import { Resend } from 'resend';

interface EmailProps {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async ({ to, subject, html }: EmailProps) => {
  // Nodemailer configuration
  const nodemailerTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  // Resend configuration
  const resendTransporter = new Resend(process.env.RESEND_API_KEY);

  // Send email using Nodemailer
  await nodemailerTransporter.sendMail({
    from: process.env.NODEMAILER_EMAIL,
    to,
    subject,
    html,
  });

  // Send email using Resend
  await resendTransporter.sendEmail({
    to,
    subject,
    text: 'Your AI-screened shortlist is here!',
    html,
  });
};