const { StatusCodes } = require("http-status-codes");

function getName(req, res){
  res.status(StatusCodes.OK).send('My name is Sumeya Muhidin');
}
exports.module = {getName}
