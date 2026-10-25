require('dotenv').config();
const app = require('./src/app.js');
const connectDB = require('./config/database.js');

// Connect to the database
connectDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});