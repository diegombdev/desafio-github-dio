import express from "express";
import cors from "cors";
import { routes } from "./routes";

const server = express();

server.use(cors())
server.use(routes);

server.listen(3001, () => console.log("Server is running on PORT 3001"));