const logger = (statusCode, method, url, error = null) => {
    console.log(statusCode, method, url);
    if(error) console.error(error);
  };

module.exports = logger;