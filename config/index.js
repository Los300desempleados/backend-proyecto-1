import dotenv from 'dotenv';

dotenv.config();

const config = {
    server: {
        port: 3000,
    },
    database: {
        uri: process.env.BD_URI,
    },
    tokens: {
        secret: process.env.TOKEN_SECRET,
    },
};

export default config;