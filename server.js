require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoute');
const blogRoutes = require('./routes/blogRoute');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(cors())
app.use('/api/auth/', authRoutes);
app.use('/api/blogs', blogRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
    });
  })
  .catch(err => console.log(err));
