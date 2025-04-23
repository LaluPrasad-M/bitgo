const mongoose = require('mongoose');
const env = require('./env');

const MONGODB_URI = env.MONGODB_URI;


exports.connectDB = async () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(MONGODB_URI)
        .then(() => {
            console.log('Connected to MongoDB');
            resolve();
        })
        .catch((err) => {
            console.log('Error connecting to MongoDB', err);
            reject(err);
        });
    });
}