import config from '../index.js'
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
  host: config.mail.host,
  port: config.mail.port,
  auth: {
    user: config.mail.user,
    pass: config.mail.pass
  }
})
export default transporter
