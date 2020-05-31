const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => res.send("Hello World! IGTI FULL STACK"));

app.listen(port, () => {
    console.log(`App listener running on port ${port}`);
} )
