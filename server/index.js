import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import OpenAI from 'openai';
import openAiRoutes from "./routes/openai.js";

// CONFIGURATION

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb" , extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// OPENAI CONFIGURATION
export const openai = new OpenAI({
  apiKey:"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", // This is the default and can be omitted
});

// ROUTES SETUP
app.use("/openai", openAiRoutes);

// SERVER SETUP
const PORT = 1337 || 9000;
app.listen(PORT, ()=>{
    console.log(`Example app listening at http://localhost:${PORT}`);
})