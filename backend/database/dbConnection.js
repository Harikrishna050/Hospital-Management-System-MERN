import mongoose from "mongoose";

const MONGO_URI="mongodb+srv://harikrishna050code:hari050@hari.dzogve1.mongodb.net/mernapp?retryWrites=true&w=majority"
export const dbConnection = () => {
  mongoose
    .connect(MONGO_URI, {
      dbName: "HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};


// const mongoose = require('mongoose')
// const colors = require('colors');
// const dotenv = require('dotenv').config();

// const MONGO_URI="mongodb+srv://harikrishna050code:hari050@hari.dzogve1.mongodb.net/mernapp?retryWrites=true&w=majority"
// export const dbConnection = async () => {
//   try {
//     const conn = await mongoose.connect(MONGO_URI,{
//       dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
//     })

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
//   } catch (error) {
//     console.log(error)
//     process.exit(1)
//   }
// }

// module.exports = dbConnection

