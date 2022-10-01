import config from '../config/index.js'
import transporter from '../config/mail/transporter.js'
const sendEmail = async (
  options = {
    email: '',
    subject: '',
    message: '',
    html: ''
  }
) => {
  try {
    const mailOptions = {
      from: 'Test <' + config.mail.user + '>',
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html
    }
    console.log(mailOptions)
    const info = await transporter.sendMail(mailOptions)
    console.log('Message sent: %s', info.messageId)
    return info
  } catch (error) {
    console.log(error.message)
  }
}

export default sendEmail
