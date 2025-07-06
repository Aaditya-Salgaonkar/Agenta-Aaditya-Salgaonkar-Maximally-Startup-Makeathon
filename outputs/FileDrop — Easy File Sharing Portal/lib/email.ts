typescript
// email-utils.ts

import { nanoid } from 'nanoid';
import nodemailer from 'nodemailer';
import Resend from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailProps {
  to: string;
  subject: string;
  html: string;
}

const sendEmailWithResend = async ({ to, subject, html }: EmailProps) => {
  try {
    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to,
      subject,
      html,
    });
    return response;
  } catch (error) {
    console.error('Error sending email with Resend:', error);
    throw error;
  }
};

const sendEmailWithNodemailer = async ({ to, subject, html }: EmailProps) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT),
      secure: Boolean(process.env.NODEMAILER_SECURE),
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.NODEMAILER_FROM_EMAIL,
      to,
      subject,
      html,
    });

    return info;
  } catch (error) {
    console.error('Error sending email with Nodemailer:', error);
    throw error;
  }
};

interface ShareFileEmailProps {
  fileName: string;
  downloadLink: string;
  expirationTime: Date;
  userEmail: string;
}

export const sendShareFileEmail = ({
  fileName,
  downloadLink,
  expirationTime,
  userEmail,
}: ShareFileEmailProps) => {
  const subject = `Your file '${fileName}' is ready for download`;
  const html = `
    <h1>Hello!</h1>
    <p>Your file '${fileName}' is ready for download.</p>
    <p>Download link: <a href='${downloadLink}'>${downloadLink}</a></p>
    <p>Expires at: ${expirationTime.toLocaleString()}</p>
    <p>Best regards,</p>
    <p>File Sharing Team</p>
  `;

  const emailProps: EmailProps = { to: userEmail, subject, html };

  // Uncomment the desired method to use for sending emails.
  // return sendEmailWithResend(emailProps);
  return sendEmailWithNodemailer(emailProps);
};

// Generate unique ID for download links
export const generateDownloadLinkId = () => nanoid(10);