const ApiServer = require("./apiServer");

process.on("uncaughtException", function(error) {
  console.error(error);
});

new ApiServer({});
