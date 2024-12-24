const express = require("express");

const app = express();

app.use(express.json());

app.use("/api", require("./routes/api"));

app.listen(8989, () => {
    console.log("Server is running on port 8989");
});