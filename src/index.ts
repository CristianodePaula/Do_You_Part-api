import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./config";

const PORT = config.port || 5172;

const app: Application = express();

app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World 🌍',
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

export default app;
