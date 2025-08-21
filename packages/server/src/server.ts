import express, { Request, Response } from "express";
import { env } from "./config/env";
import { APIResponse } from "./utils/index";

const app = express();
const { PORT, FRONTEND_URL } = env;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    const data = { message: "Hello world!", frontend: FRONTEND_URL };

    APIResponse(res, data);

});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
})