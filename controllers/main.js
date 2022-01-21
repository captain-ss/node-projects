const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')



const login = async (req, res) => {
    
    const { username, password } = req.body
    console.log(req.body);
    if (!username || !password) {
        throw new CustomAPIError('please provide email and pass ', 400)
    }

    const id = new Date().getDate()
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(200).json({msg:`user created` , token })
}


const dashboard = async (req, res) => {
    console.log();
  
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `hello ${decoded.username} `, secret: `you are authorised and here is your lucky number ${luckyNumber}` })
    

}

module.exports = { login, dashboard }