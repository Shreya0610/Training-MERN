import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
const express = require("express");
const app = express();
const HttpError = require("./Backend/utils/http-error");
const mongoose = require("mongoose");


//Route calls
const userRoutes = require("./Backend/routes/user-routes");
const adminRoutes = require("./Backend/routes/admin-routes");

app.use(bodyParser.json());

//Routing
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);


//Error handling
app.use((req, res, next) => {
  const error = new HttpError("Page not found", 404);
  throw error;
});
app.use((error, req, res, next) => {
  res.json({
    message: error.message || "Unknown Error occured",
    code: error.code,
  });
});

//Mongoose connect
mongoose
  .connect(
    "mongodb+srv://Shreya-Sharma:J7pylrN8FQPNrZHO@cluster0.5qriz.mongodb.net/TourismSite?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Mongo DB is successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });

//server working on port 2000
const port = 2000;
app.listen(port, () => {
  console.log(`working http://localhost:${port}`);
});


ReactDOM.render(
  <React.Fragment>
    <h1>Welcome Everyone</h1>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
