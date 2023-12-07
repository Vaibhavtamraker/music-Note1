const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose')
const cors = require('cors');

const multer = require('multer');
const path = require('path');
const app = express();
const router = require('../backend/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
console.log("djdjdjjddjj12345")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let destinationFolder = 'uploads/';
        console.log(file);

        if (file.mimetype.startsWith('audio/')) {
            destinationFolder += 'audio/';
        } else if (file.mimetype.startsWith('video/')) {
            destinationFolder += 'video/';
        } else if (file.mimetype.startsWith('image/')) {
            destinationFolder += 'image/';
        } else {
            return cb(new Error('Unsupported file type'), null);
        }

        console.log(destinationFolder);
        cb(null, destinationFolder);
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        console.log(file);
        cb(null, true);
    },
    limits: {
        fileSize: 1024 * 1024 * 50, // Example: limit to 50 MB
    },
}).any();

// Apply the multer middleware
app.use(upload);

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use the router
app.use('/', router);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/your-database-name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err));

// Start the server
app.listen(process.env.PORT || 6000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000));
});

// Export the Multer instance for use in other files
module.exports = { upload };
