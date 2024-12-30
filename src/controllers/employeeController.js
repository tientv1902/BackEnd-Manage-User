const Employee = require('../models/employeeModel');

// Lấy danh sách nhân viên
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees', error });
    }
};

// Thêm nhân viên mới
exports.addEmployee = async (req, res) => {
    try {
        const { name, position, salary } = req.body;
        const newEmployee = await Employee.create({ name, position, salary });
        res.status(201).json({ message: 'Employee added', employee: newEmployee });
    } catch (error) {
        res.status(400).json({ message: 'Error adding employee', error });
    }
};

// Cập nhật thông tin nhân viên
exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ message: 'Employee updated', employee: updatedEmployee });
    } catch (error) {
        res.status(400).json({ message: 'Error updating employee', error });
    }
};

// Xóa nhân viên
exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if (!deletedEmployee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ message: 'Employee deleted', employee: deletedEmployee });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting employee', error });
    }
};
