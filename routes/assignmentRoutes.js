// routes/assignmentRoutes.js
const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const { authenticate, authorizeRoles } = require('../middlewares/authMiddleware');
const multer = require('multer');

// Configure multer for file uploads, storing files in the "uploads/" folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Generate a unique filename using timestamp and original name
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Student routes
router.post('/', authenticate, authorizeRoles('student'), upload.single('assignment'), assignmentController.uploadAssignment);
router.get('/my', authenticate, authorizeRoles('student'), assignmentController.getStudentAssignments);

// Admin routes
router.get('/', authenticate, authorizeRoles('admin'), assignmentController.getAllAssignments);
router.patch('/:id', authenticate, authorizeRoles('admin'), assignmentController.updateAssignment);

module.exports = router;
