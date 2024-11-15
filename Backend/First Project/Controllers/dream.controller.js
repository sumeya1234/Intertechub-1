const { StatusCodes } = require("http-status-codes");

function getDream(req, res){
  res.status(StatusCodes.OK).send("Believe in the power of your dreams, no matter how big or small. Every step you take brings you closer to your goals. Stay persistent, embrace challenges, and trust the journey. Remember, it's not just about reaching the destination but growing stronger and wiser along the way. You have everything it takes to succeed—keep moving forward, and never give up.");
}
module.exports = { 
  getDream
}
