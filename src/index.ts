import express, { Request, Response } from "express";
import { fetchURLMeta } from "./modules/parsers";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).send("Hello World!");
  } catch (error) {
    console.error(error);
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
    res.status(500).send({ ERROR: error });
  }
});

app.listen(() => {
  console.log(`Server is running on port ${PORT}`);
});
