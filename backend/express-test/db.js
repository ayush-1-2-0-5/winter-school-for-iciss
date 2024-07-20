const mongoose = require('mongoose');
require('dotenv').config(); 
console.log('MongoDB URI:', process.env.MONGODB_URL);
mongoose.connect(

  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log('Successfully connected to the database');
}).catch((err) => {
  console.error('Database connection error:', err);
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
},{ timestamps: true });


const User = mongoose.model('User', userSchema);
module.exports = {
  User
};
