const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Vedant World from Router  ! ");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body); 
    res.status(200).json({message : req.body }); 
  } catch (error) {
    res.status(400).json("Page not found ");
  }
};

module.exports = { home , register } ; 
