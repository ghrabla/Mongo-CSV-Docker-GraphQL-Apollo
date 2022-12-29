const mongoose = require('mongoose');
mongoose.set('strictQuery', 0);
const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected"); 
};

module.exports = connectDB;
