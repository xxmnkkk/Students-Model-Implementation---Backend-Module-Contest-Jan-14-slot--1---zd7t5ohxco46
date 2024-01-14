const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  // studentId: ObjectId (required)
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  // courseId: ObjectId (required)
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  // grade: String (required, enum: ['A', 'B', 'C', 'D', 'F'])
  grade: {
    type: String,
    required: true,
    enum: ['A', 'B', 'C', 'D', 'F']
  }
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
