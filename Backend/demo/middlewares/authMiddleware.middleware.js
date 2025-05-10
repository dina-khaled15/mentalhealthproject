// middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

// حماية المسارات
exports.protect = async (req, res, next) => {
    let token;
    
    // التحقق من وجود التوكن في الهيدر أو الكوكيز
    if (
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ) {
        // استخراج التوكن من الهيدر
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.token) {
        // استخراج التوكن من الكوكيز
        token = req.cookies.token;
    }
    
    // التحقق من وجود التوكن
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'غير مصرح لك بالوصول إلى هذه الصفحة'
        });
    }
    
    try {
        // التحقق من صحة التوكن
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // وضع بيانات المستخدم في الطلب
        req.user = await User.findById(decoded.id);
        
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'غير مصرح لك بالوصول إلى هذه الصفحة'
        });
    }
};

// التحقق من صلاحيات المستخدم
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: 'لا تملك الصلاحيات الكافية للوصول إلى هذه الصفحة'
            });
        }
        next();
    };
};