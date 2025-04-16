import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';

const app = express();
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use('/api/auth',authRoute)
app.listen(PORT, () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
  console.log(`Auth service is running yoon port http://localhost:${PORT}`);
} );
