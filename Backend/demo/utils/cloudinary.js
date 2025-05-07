const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    timeout: 15000,
});

console.log('Cloudinary Config:', cloudinary.config());

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'mental-health-uploads',
        allowed_formats: ['jpg', 'png', 'jpeg'],
        timeout: 15000,
    },
});

module.exports = { storage };

