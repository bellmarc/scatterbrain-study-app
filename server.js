const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000
const MONGO_USER = process.env.MONGO_USER
const MONGO_PASS = process.env.MONGO_PASS
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_DB = process.env.MONGO_DB



app.use(express.json());
app.use(morgan('dev'));

//DB
mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false,
    useUnifiedTopology: true
}, () => console.log(`Connected to DB`))

//Routes
app.use("/topics", require("./routes/topicRouter.js"))
app.use("/users", require("./routes/userRouter.js"))

//Error Handling
app.use((err, req, res, next)=> {
    console.error(err)
    return res.send( {
        errorMessage: error.message
    })
})


//listen
app.listen(PORT, () => console.log(`Server running on ${PORT}`))


