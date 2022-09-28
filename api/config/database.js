import mongoose from "mongoose";
import config from './index.js'

const db = mongoose.connection;

db.on('conecting', () => {
    console.info('Starting connection to database 🟡')
});

db.on('conected', () => {
    console.log('Connected to the database 🟢')
});

db.on('disconnect', () => {
    console.error('Offline database 🔴')
});

const init = () => {
    mongoose.connect(config.database.uri)
};

export default init;