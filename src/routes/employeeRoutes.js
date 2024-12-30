const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.get('/', employeeController.getAllEmployees);
router.post('/', employeeController.addEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
