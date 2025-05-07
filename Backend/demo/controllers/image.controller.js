const uploadImageToCloudinary = require('../utils/cloudinary');
const path = require('path');

const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const imagePath = path.join(__dirname, '..', 'uploads', req.file.filename);
        console.log('Uploading image from path:', imagePath);

        const uploadedImageUrl = await uploadImageToCloudinary(imagePath);

        return res.status(200).json({ imageUrl: uploadedImageUrl });
    } catch (error) {
        console.error('Error in uploadImage controller:', error.message);
        return res.status(500).json({ message: 'Failed to upload image' });
    }
};

module.exports = {
    uploadImage
};
