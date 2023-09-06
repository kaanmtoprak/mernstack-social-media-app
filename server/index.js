import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './src/db/index.js';
import routes from './src/routes/index.js';

dotenv.config({
    path:"./src/config/.env"
});


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)
connectDatabase();


app.listen(3070, ()=>{
    console.log("server is up!!")

})

