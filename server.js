require("dotenv").config();
const express = require('express');
const app = express();
app.use(express.json());
//////MIDDLEWARE ENDS


//HOMEPAGE
app.get('/', (req, res) => {
    res.json({ message: "Hi Chris,express api app is working" });
});


app.use("/schools", require("./controllers/schoolsController.js"));
app.listen(process.env.PORT, () => {
    console.log('Chris, Nodemon is listening');
})