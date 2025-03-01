// models/Assignment.js
const pool = require('../config/db');

const createAssignment = async ({ studentId, filePath, status = 'Pending' }) => {
  const [result] = await pool.query(
    'INSERT INTO assignments (student_id, file_path, status) VALUES (?, ?, ?)',
    [studentId, filePath, status]
  );
  return result;
};

const getAssignmentsByStudent = async (studentId) => {
  const [rows] = await pool.query('SELECT * FROM assignments WHERE student_id = ?', [studentId]);
  return rows;
};

const getAllAssignments = async (filterStatus) => {
  let query = 'SELECT a.*, u.name AS student_name, u.email FROM assignments a JOIN users u ON a.student_id = u.id';
  let params = [];
  if (filterStatus) {
    query += ' WHERE a.status = ?';
    params.push(filterStatus);
  }
  const [rows] = await pool.query(query, params);
  return rows;
};

const updateAssignmentStatus = async (assignmentId, status, feedback = null) => {
  const [result] = await pool.query(
    'UPDATE assignments SET status = ?, feedback = ? WHERE id = ?',
    [status, feedback, assignmentId]
  );
  return result;
};

// Instead of hard delete, create a soft delete function:
const softDeleteAssignment = async (assignmentId) => {
    const [result] = await pool.query(
      'UPDATE assignments SET is_deleted = TRUE WHERE id = ?',
      [assignmentId]
    );
    return result;
  };

  

module.exports = {
  createAssignment,
  getAssignmentsByStudent,
  getAllAssignments,
  updateAssignmentStatus,
  softDeleteAssignment
};
