import express, { Request, Response } from "express";
import { fetchURLMeta } from "./modules/parsers";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).send("Hello World!");
  } catch (error) {
    res.status(500).send({ ERROR: error });
  }
});

app.get("/scrapper", async (req: Request, res: Response) => {
  const url = req.query.url as string;

  try {
    await res.status(200);

    await fetchURLMeta(url).then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

app.listen();
