const express = require('express');
const router = express.Router();
const { createIssues, getAllIssues, deleteIssues, getIssuesById } = require('../controllers/Issuesdb.controller');

// لعرض جميع المشاكل
router.get('/', getAllIssues);

// لإنشاء مشكلة جديدة
router.post('/', createIssues);

// لحذف مشكلة باستخدام الـ ID
router.delete('/:id', deleteIssues);

// لعرض مشكلة واحدة باستخدام الـ ID
router.get('/:id', getIssuesById);

module.exports = router;
