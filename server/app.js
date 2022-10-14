const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const errorController = require("./controllers/error");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// khi request tu client toi thi tu dong phan tich thanh obj
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

app.listen(5000);
