const {
  User
} = require('../models')

const {
  encodeToken
} = require('../helper/jwt');

class RegisterController {
  static async addRegisterAdmin(req, res, next) {
    try {
      const {
        username,
        email,
        password,
        phoneNumber,
        address
      } = req.body

      const adminRegister = await User.create({
        username,
        email,
        role: "admin",
        password,
        phoneNumber,
        address
      });
      res.status(201).json({
        id: adminRegister.id,
        email: adminRegister.email
      })
    } catch (error) {
      next(error)
    }

  }



}

module.exports = RegisterController