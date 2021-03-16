require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
//////MIDDLEWARE ENDS

//app.use(cors());
app.use(cors({"origin": "http://localhost:3000"}));

//HOMEPAGE
app.get('/', (req, res) => {
    res.json({ message: "Hi Chris,express api app is working" });
});


app.use("/schools", require("./controllers/schoolsController.js"));
app.listen(process.env.PORT, () => {
    console.log('Chris, Nodemon is listening');
})