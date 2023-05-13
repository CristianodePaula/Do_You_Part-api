import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import config from "./config";

const PORT = config.port || 5172;

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan("common"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10000,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Multiple IP requests. Try again in an hour.",
  })
);

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World 🌍',
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

export default app;
