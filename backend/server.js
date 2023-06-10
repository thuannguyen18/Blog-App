const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require("helmet");

const connectDB = require('./config/dbConnection');

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(cookieParser());

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/auth", require("./routes/authRoute"));
app.use("/user", require("./routes/userRoute"));
app.use("/blog", require("./routes/blogRoute"));
app.use("/", require("./routes/publicRoute"));

app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server running on port ${process.env.PORT}`)
});