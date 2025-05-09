const mongoose = require('mongoose');

// تعريف schema للطبيب
const doctortableSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true, // إضافة شرط أنه يجب إدخال الاسم
    trim: true, // حذف الفراغات الزائدة
  },
  age: {
    type: Number,
    required: true, // إضافة شرط أنه يجب إدخال العمر
  },
  phone: {
    type: String,
    required: true, // إضافة شرط أنه يجب إدخال رقم الهاتف
    trim: true, // حذف الفراغات الزائدة
  },
  email: {
    type: String,
    required: true, // إضافة شرط أنه يجب إدخال البريد الإلكتروني
    trim: true, // حذف الفراغات الزائدة
  },
  address: {
    type: String,
    required: true, // إضافة شرط أنه يجب إدخال العنوان
  },
  city: {
    type: String,
    required: true, // إضافة شرط أنه يجب إدخال المدينة
  },
  zipCode: {
    type: String,
    required: true, // إضافة شرط أنه يجب إدخال الرمز البريدي
  },
  rating: {
    type: Number,
    default: 0, // قيمة افتراضية للتقييم
  },
});

// تعريف موديل Doctor باستخدام السكيمة
const Doctor = mongoose.model('Doctor', doctortableSchema );

// تصدير الموديل
module.exports = Doctor;
