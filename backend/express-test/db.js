const mongoose = require('mongoose');

// Connect to the MongoDB database
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

// Card Schema
const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  }
});

const Card = mongoose.model('Card', cardSchema);

// User Schema
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
});

const User = mongoose.model('User', userSchema);


const contentItemSchema = new mongoose.Schema({
  maintitle:{
     type: String,
     required:true,
  },
  title: {
    type: [String],
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  image: {
    type: [String],
    required: false, 
  }
}, { _id: false });

const contentSchema = new mongoose.Schema({
  length: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: [contentItemSchema],
    required: true,
  }
});

const Content = mongoose.model('Content', contentSchema);

module.exports = {
  User,
  Card,
  Content,
};
