const express = require('express');
const app = express();

const expressManager = require('./config/express');
const mongoDbManager = require('./config/mongo');

const env = require('./config/env');

expressManager.setExpressConfig(app);

const PORT = env.PORT;

expressManager.ErrorHandler(app);

mongoDbManager.connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});
