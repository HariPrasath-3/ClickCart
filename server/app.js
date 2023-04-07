const express = require('express');
const env = require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const userRoute = require('./routes/userRoute');
const itemRoute = require('./routes/itemRoute');
const addressRoute = require('./routes/addressRoute');
const cartRoute = require('./routes/cartRoute');
const wishlistRoute = require('./routes/wishlistRoute');
const orderRoute = require('./routes/orderRoute');

const dotenv = require('dotenv');
dotenv.config();


app.use(cors()); // for corss platform use of api
app.use(express.json()) // for paresing the body parameters.
app.use(cookieParser()) // cookie parser middleware

app.use('/api/v1/user', userRoute);
app.use('/api/v1/item', itemRoute);
app.use('/api/v1/address', addressRoute)
app.use('/api/v1/cart', cartRoute);
app.use('/api/v1/wishlist', wishlistRoute);
app.use('/api/v1/order', orderRoute);

const PORT = process.env.PORT;
const server = app.listen(PORT, ()=>{
    console.log(`Server Listing on port ${PORT}`);
})