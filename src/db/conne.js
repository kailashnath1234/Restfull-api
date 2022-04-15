const mongoose = require("mongoose");
const DB = "mongodb+srv://kailash:7500813733@cluster0.6bjxi.mongodb.net/mernstack?retryWrites=true&w=majority"
mongoose.connect(DB).then(() => {
    console.log("connection is successful");
}).catch((error) => {
    console.log(error)
})


// "mongodb+srv://corbett:zpTiC0denyk3iesn@cluster0.ll84g.mongodb.net/test"
