import express from 'express';
// import {createClient} from '@supabase/supabase-js'
import bodyParser from "body-parser";
import { Request, Response, NextFunction} from "express";
import foodRoutes from "./routes/foodRecipes";

require('dotenv').config();

const app = express();
const defaultPort = 8080;
const PORT = process.env.PORT || defaultPort;

const logger = (req:Request, res:Response, next:NextFunction) => {
  console.log(req.method, req.url, res.statusCode)
  next()
}

app.use([logger]) // todo add auth here later
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to foodbaby." });
});

app.use('/api/food', foodRoutes)

app.listen(PORT, () => {
  console.log(`> Ready on http://localhost:${PORT}`);
});
