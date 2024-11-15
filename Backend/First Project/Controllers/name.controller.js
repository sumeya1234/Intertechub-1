const { StatusCodes } = require("http-status-codes");

async function getName(req, res){
  res.status(StatusCodes.OK).send('My name is Sumeya Muhidin');
}
module.exports = {getName}
