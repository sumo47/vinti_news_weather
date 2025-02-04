
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route=require("./routes/route")
const cors=require("cors")

app.use(cors())
app.use("/",route)

mongoose
  .connect(
    "mongodb+srv://vintiray:7091201680@cluster0.ahtxrqr.mongodb.net/newsCollection",
    {
      useNewUrlParser: true,
    }
  )

  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 3006, () => {
  console.log("Express app running on port " + 3006);
});
