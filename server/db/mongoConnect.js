const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

const mongoConnect = () => {
    
    mongoose.connect(MONGODB_URI)

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    })

    mongoose.connection.on('error', (err) => {
        console.log('Error while connecting to MongoDB:', err);
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    })

}

module.exports = mongoConnect;