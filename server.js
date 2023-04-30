import express from "express";
import { router as api } from "./router/api.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
app.set("port", 4420);

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/api", api);

app.listen(app.get("port"), () => console.log("Servidor encendido"));
