import express from "express";
import bodyParser from "body-parser";
import { dogToHumanYears } from "./calculate.js"
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const fileName = fileURLToPath(import.meta.url);

const directory = dirname(fileName);

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(directory + "/index.html")
})

app.post("/human-years", (req, res) => {
  res.send(`<h1>${dogToHumanYears(req.body.age)}</h1>`);
})

app.listen(3000, () => console.log('Server 3000 started running'));