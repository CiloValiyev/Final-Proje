const express = require("express");
const mongoose = require("mongoose");
const app = express();
const categoriesRoute = require("./routes/Categories")
const messageRoute = require("./routes/Message")
app.use("/categories",categoriesRoute);
app.use("/message",messageRoute);
// mongoose connected

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(DB, (err) => {
    if (!err) {
        console.log("DB CONNECT");
        app.listen(PORT, () => {
            console.log(`PORT ${PORT}`);
        })
    }
})