const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  // firstName: String (required)
  firstName: {
    type: String,
    required: true
  },
  // lastName: String (required)
  lastName: {
    type: String,
    required: true
  },
  // dateOfBirth: Date (required)
  dateOfBirth: {
    type: Date,
    required: true
  },
  // email: String (required, unique)
  email: {
    type: String,
    required: true,
    unique: true
  },
  // courses: Array of Course IDs
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  // grades: Array of Grade Objects
  grades: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Grades'
  }],
  // attendance: Array of Attendance Objects
  attendance: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Attendance'
  }]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
