const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://ayush2002agarwal:UMF4kS6kfDyZA3WU@cluster0.dve92tv.mongodb.net/',
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
