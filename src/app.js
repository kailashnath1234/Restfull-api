const express = require("express");
// const res = require("express/lib/response");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/students");
require("./db/conne");
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/getStudentDetails", (req, res) => {
    User.find()
        .then(result => {
            res.status(200).json({ studentData: result });
        }).catch(err => {
            res.status(500).json({ error: err })
        })
})

app.post("/students/add", (req, res) => {

    const { studentFirstName, collegeName, location } = req.body;
    const user = new User({ studentFirstName, collegeName, location })
    user.save().then(() => {
        res.json({ message: "user registered successfuly" })
    }).catch((err) => res.json({ error: "Faild to registered" }));
})


app.listen(port, () => {
    console.log(`connection is setup at ${port}`)
});


