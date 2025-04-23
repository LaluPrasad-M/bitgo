const express = require('express');
const app = express();
const router = express.Router();

const PORT = env.PORT;

router.get('/', (req, res) => {
    res.send('Hello World');
});


const expressManager = require('./config/express');
const mongoDbManager = require('./config/mongo');

const env = require('./config/env');

expressManager.setExpressConfig(app);

app.use('/', router);

expressManager.ErrorHandler(app);

mongoDbManager.connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

