const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const newsRoutes=require('./routes/newsRoutes');
const app=express();
app.use(cors());
app.use(express.json());
app.use('/news',newsRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});