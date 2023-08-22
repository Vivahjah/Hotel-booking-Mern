import "express-async-errors"
import mongoose from "mongoose";
import cors from "cors"
import express from "express"
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";


//error-handler

import notFoundMiddleware from "./middleware/not-found.js"
import errorHandlerMiddleware from "./middleware/error-handler.js"


const app = express()
dotenv.config();



app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));




//routes

// app.use('/api/v1/auth', authRouter)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);








const port = process.env.PORT || 5500;


const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB...");
    } catch (error) {
        console.log(error);
    }
}

app.listen(port, () => {
    connect();
})

// const start = async() => {
//     try {
//         await connectDB(process.env.MONGO_URI)
//         app.listen(port, () =>
//             console.log("Connect to DB...")
//         );
//     } catch (error) {
//         console.log(error);
//     }
// };

// start();