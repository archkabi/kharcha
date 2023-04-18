const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const userRoute = require('./routes/users/user');
const {errorHandler,notFound} = require('./middlewares/errorMiddleware');

const app = express();

//env
dotenv.config();
// Connect to database
dbConnect();

//middleware

app.use(express.json());

//routes
app.use("/api/users",userRoute);

//errors
app.use(notFound);
app.use(errorHandler);

module.exports = app;
