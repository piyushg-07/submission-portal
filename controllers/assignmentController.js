// controllers/assignmentController.js
const Assignment = require('../models/Assignment');

const uploadAssignment = async (req, res, next) => {
  try {
    // Multer stores the file info in req.file
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const studentId = req.user.id;
    const filePath = req.file.path;
    await Assignment.createAssignment({ studentId, filePath });
    return res.status(201).json({ message: 'Assignment uploaded successfully' });
  } catch (err) {
    next(err);
  }
};

const getStudentAssignments = async (req, res, next) => {
  try {
    const studentId = req.user.id;
    const assignments = await Assignment.getAssignmentsByStudent(studentId);
    return res.status(200).json(assignments);
  } catch (err) {
    next(err);
  }
};

const getAllAssignments = async (req, res, next) => {
  try {
    const { status } = req.query; // Optional filter (Pending, Approved, Rejected)
    const assignments = await Assignment.getAllAssignments(status);
    return res.status(200).json(assignments);
  } catch (err) {
    next(err);
  }
};

const updateAssignment = async (req, res, next) => {
  try {
    const assignmentId = req.params.id;
    const { status, feedback } = req.body;
    if (!status || !['Approved', 'Rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status. Must be Approved or Rejected.' });
    }
    await Assignment.updateAssignmentStatus(assignmentId, status, feedback);
    return res.status(200).json({ message: 'Assignment updated successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  uploadAssignment,
  getStudentAssignments,
  getAllAssignments,
  updateAssignment
};
