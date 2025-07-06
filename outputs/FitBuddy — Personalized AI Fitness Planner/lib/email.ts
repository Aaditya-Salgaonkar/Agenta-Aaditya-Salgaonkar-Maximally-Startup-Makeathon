typescript
// email-utils.ts

import nodemailer from 'nodemailer';
import { ResendClient } from 'resend';

interface EmailProps {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

const sendEmail = async (emailProps: EmailProps, transporter: nodemailer.Transporter) => {
  const message = {
    from: process.env.EMAIL_FROM,
    to: emailProps.to,
    subject: emailProps.subject,
    text: emailProps.text,
    html: emailProps.html,
  };

  return transporter.sendMail(message);
};

const sendEmailWithResend = async (emailProps: EmailProps, resendClient: ResendClient) => {
  return resendClient.emails.send({
    from: process.env.EMAIL_FROM,
    to: emailProps.to,
    subject: emailProps.subject,
    text: emailProps.text,
    html: emailProps.html,
  });
};

export { sendEmail, sendEmailWithResend };