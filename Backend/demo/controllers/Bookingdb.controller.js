const ServiceBooking = require('../models/Booking.model');

// الحصول على كل الحجوزات
module.exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await ServiceBooking.find();
    res.send(bookings);
  } catch (error) {
    res.send(error);
  }
};

// إضافة حجز جديد
module.exports.createBooking = async (req, res) => {
  try {
    const booking = await ServiceBooking.create(req.body);
    res.send(booking);
  } catch (error) {
    console.log("Error:", error);
    res.send(error);
  }
};

// تعديل حجز
module.exports.updateBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const booking = await ServiceBooking.findByIdAndUpdate(id, req.body, { new: true });
    res.send(booking);
  } catch (error) {
    res.send(error);
  }
};

// حذف حجز
module.exports.deleteBooking = async (req, res) => {
  try {
    const id = req.params.id;
    await ServiceBooking.findByIdAndDelete(id);
    res.send("Booking deleted");
  } catch (error) {
    res.send(error);
  }
};

// البحث عن حجز
module.exports.searchBooking = async (req, res) => {
  try {
    const { doctor, service, session } = req.query;
    const bookings = await ServiceBooking.find({ doctor, service, session });
    res.send(bookings);
  } catch (error) {
    res.send(error);
  }
};
