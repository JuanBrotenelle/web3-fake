import express from "express";

const app = express();
const port = 3001;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
