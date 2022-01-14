const express = require('express')
const employee = require('./routes/employee')
require('dotenv').config()
const connectDB = require('./db/connect');


app = express();
app.use(express.json())

app.use(employee);

const port = 3000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
      console.log(error)
    }
  }

start();