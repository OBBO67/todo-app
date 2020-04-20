function errorHandler(error, req, res, next) {
  return res.status(error.status || 500).json({
    error: {
      status: error.status,
      message: error.message || "Error, something went wrong.",
    },
  });
}

module.exports = errorHandler;
