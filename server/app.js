const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
// khi request tu client toi thi tu dong phan tich thanh obj
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(productRoutes);

app.listen(5000);
