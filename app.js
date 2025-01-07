const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");


const PORT = 2000;

app.set("view engine", "ejs");


app.use(express.urlencoded({extended:false}));
app.use(express.json());


//using route
app.use('/user', userRouter);



app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`);
})


