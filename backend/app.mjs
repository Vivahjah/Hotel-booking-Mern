import "express-async-errors"
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

//connect to DB
import connectDB from "./db/connect.js";

//routes

app.use('/api/v1/auth', authRouter)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);








const port = process.env.PORT || 5500;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>
            console.log(`Connect to DB || running on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();