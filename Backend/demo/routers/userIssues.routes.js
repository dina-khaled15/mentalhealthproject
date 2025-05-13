const express = require('express');
const router = express.Router();
const { createIssues, getAllIssues, deleteIssues, getIssuesById } = require('../controllers/Issuesdb.controller');

router.get('/', getAllIssues);

router.post('/', createIssues);

router.delete('/:id', deleteIssues);

router.get('/:id', getIssuesById);

module.exports = router;
