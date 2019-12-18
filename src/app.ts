import express, { Request, Response } from "express";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.set("env", process.env.NODE_ENV || "development");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

export default app;
