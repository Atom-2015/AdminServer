 

require('dotenv').config();
const mongoose = require('mongoose');

(async () => {
  try {
    const response = await mongoose.connect('mongodb+srv://adityapandey1986ad:ApKUdz5GGzanAi7s@cluster0.zf1fr.mongodb.net/FutureLand');
    console.log("***************connected to database***************", response.connection.host);
  } catch (error) {
    console.error("*************error in connecting to database********************", error);
  }
})();