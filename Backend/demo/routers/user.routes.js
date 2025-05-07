const express = require('express');
const router = express.Router();
const { getUser, updateUser, createUser } = require('../controllers/userController.controller');
const multer = require('multer');
const { storage } = require('../utils/cloudinary');
const upload = multer({ storage });


router.post('/', upload.single('avatar'), createUser);
router.get('/:id', getUser);
router.put('/:id', upload.single('avatar'), updateUser);

module.exports = router;


