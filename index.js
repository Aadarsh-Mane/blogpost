import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import quotes from './quotes.json' assert { type: "json" }
import userRouter from './routes/userRoutes.js'
import noteRouter from './routes/noteRoutes.js'
import specificRoute from './routes/specifcRoutes.js';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5000; // Use PORT environment variable or default to 5000
const DATABASE_URL = process.env.DATABASE_URL
const app = express()
app.use(express.json());
app.use('/users',userRouter)
app.use('/note',noteRouter)
app.use('/allTags',specificRoute)
app.get('/', (req, res) => {
    res.send("he rec")
    // res.send(quotes)
    // res.send("hello")
});
app.get('/random', (req, res) => {
    let index=Math.floor(Math.random()*quotes.length)
    let quote=quotes[index]
    res.send(quote)
    // res.send("hello")
});
mongoose.connect(DATABASE_URL).then(()=>{
        app.listen(PORT, ()=>{
            console.log("listening on port",PORT)
        
        });
    })

