const express = require('express');
const env = require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const authRoute = require('./routes/authRoute');
const dotenv = require('dotenv');
dotenv.config();


app.use(cors()); // for corss platform use of api
app.use(express.json()) // for paresing the body parameters.
app.use(cookieParser()) // cookie parser middleware

app.use('/api/v1/auth', authRoute);

const PORT = process.env.PORT;
const server = app.listen(PORT, ()=>{
    console.log(`Server Listing on port ${PORT}`);
})