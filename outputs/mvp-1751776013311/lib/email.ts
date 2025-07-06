import { NextPage } from 'next'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'username',
    pass: 'password'
  }
})

const UtilityPage: NextPage = () => {
  const sendEmail = async (to: string, subject: string, text: string) => {
    try {
      await transporter.sendMail({
        from: '"SnapStats" <noreply@snapstats.com>',
        to,
        subject,
        text
      })
      console.log('Email sent successfully')
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <div>
      <h1>Utility Page</h1>
      <button onClick={() => sendEmail('user@example.com', 'Test Subject', 'Test email body')}>
        Send Test Email
      </button>
    </div>
  )
}

export default UtilityPage