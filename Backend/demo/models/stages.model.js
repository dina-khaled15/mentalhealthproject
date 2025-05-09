// models/User.model.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    avatar: { 
        type: String,
        default: 'default-avatar.png'
    },
    userName: { 
        type: String, 
        required: [true, 'الرجاء إدخال اسم المستخدم'],
        trim: true
    },
    fullName: { 
        type: String, 
        required: [true, 'الرجاء إدخال الاسم الكامل'],
        trim: true
    },
    email: { 
        type: String, 
        required: [true, 'الرجاء إدخال البريد الإلكتروني'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'الرجاء إدخال بريد إلكتروني صحيح'
        ],
        lowercase: true,
        trim: true
    },
    password: { 
        type: String, 
        required: [true],
        minlength: [6],
        select: false // لن يتم إرجاع كلمة المرور في استعلامات قاعدة البيانات
    },
    phone: { 
        type: String,
        trim: true
    },
    location: { 
        type: String,
        trim: true
    },
    postalCode: { 
        type: String,
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, 
{ 
    timestamps: true 
});

// تشفير كلمة المرور قبل الحفظ
userSchema.pre('save', async function(next) {
    // إذا لم يتم تعديل كلمة المرور، استمر
    if (!this.isModified('password')) {
        return next();
    }
    
    try {
        // إنشاء salt وتشفير كلمة المرور
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

// مقارنة كلمة المرور المدخلة مع كلمة المرور المخزنة
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// إنشاء وتوقيع JWT token
userSchema.methods.getSignedJwtToken = function() {
    return jwt.sign(
        { 
            id: this._id,
            name: this.fullName,
            email: this.email,
            role: this.role
        }, 
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE || '30d'
        }
    );
};

module.exports = mongoose.model('User', userSchema);