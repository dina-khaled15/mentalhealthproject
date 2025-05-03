const Feedback = require('../models/feedback.model');

// الحصول على كل التعليقات
module.exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.send(feedbacks);
    } catch (error) {
        res.send(error);
    }
}

// إضافة تعليق جديد
module.exports.createFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.create(req.body);
        res.send(feedback);
    } catch (error) {
        console.log("Error:", error);
        res.send(error);
       
    }
}

// تعديل تعليق
module.exports.updateFeedback = async (req, res) => {
    try {
        const id = req.params.id;
        const feedback = await Feedback.findByIdAndUpdate(id, req.body, { new: true });
        res.send(feedback);
    } catch (error) {
        res.send(error);
    }
}

// حذف تعليق
module.exports.deleteFeedback = async (req, res) => {
    try {
        const id = req.params.id;
        await Feedback.findByIdAndDelete(id);
        res.send("Feedback deleted");
    } catch (error) {
        res.send(error);
    }
}

module.exports.searchFeedback = async (req, res) => {
    try {
        const { name, age } = req.query;
        const feedbacks = await Feedback.find({ name, age });
        res.send(feedbacks);
    } catch (error) {
        res.send(error);
    }
}
