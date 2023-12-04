const express = require("express")
const cors = require("cors");
import userRoutes from "./routes/users.js"

const app = express();

app.use(express.json());
app.use(cors());



app.listen(8800);

