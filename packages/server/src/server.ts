import express, { Request, Response } from "express";
import { env } from "./config/env";
import { APIResponse } from "./utils/index";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
const { PORT, FRONTEND_URL } = env;

app.use(cookieParser());

app.use(cors({
    origin: FRONTEND_URL, 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], 
    credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
    const data = { message: "Hello world!", frontend: FRONTEND_URL };
    APIResponse(res, data);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})