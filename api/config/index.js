import dotenv from 'dotenv'

dotenv.config()

const config = {
  app: {
    url: process.env.APP_URL
  },
  server: {
    port: 3000
  },
  database: {
    uri: process.env.DB_URI
  },
  tokens: {
    secret: process.env.TOKEN_SECRET
  },
  mail: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
}

export default config
