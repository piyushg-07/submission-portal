// models/Notification.js
const pool = require('../config/db');

const createNotification = async ({ userId, assignmentId, message }) => {
  const [result] = await pool.query(
    'INSERT INTO notifications (user_id, assignment_id, message) VALUES (?, ?, ?)',
    [userId, assignmentId, message]
  );
  return result;
};

const getNotificationsByUser = async (userId) => {
  const [rows] = await pool.query(
    'SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC',
    [userId]
  );
  return rows;
};

module.exports = { createNotification, getNotificationsByUser };
