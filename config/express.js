const express = require("express");

exports.setExpressConfig = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

exports.ErrorHandler = (app) => {
  app.use((req, res, next) => {
    const error = new Error("Url Not Found! Invalid URL!");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    console.error(error.message || error);

    res.status(error.status || 500);
    res.json({
      status: error.status || 500,
      success: false,
      message: error.message,
    });
  });
};
