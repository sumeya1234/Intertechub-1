const {StatusCodes} = require("http-status-codes")
function getHobby(req, res){
  res.status(StatusCodes.OK).json({ hobby: "Graphic design is my favorite hobby because it allows me to express my creativity and bring ideas to life visually. I love experimenting with colors, typography, and layouts to create designs that are both beautiful and meaningful. Whether I'm working on digital illustrations, branding projects, or user interfaces, graphic design challenges me to think outside the box and find unique solutions to visual problems. It's not just about making things look good—it's about telling a story and communicating effectively. For me, every project is an opportunity to learn, innovate, and share my passion with others." });
}

module.exports={
  getHobby
}