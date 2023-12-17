const userModel = require("../models/User");

class UserController {
  static async create_user(req, res) {
    const { name, email, password, location, role, interests } = req.body;

    var result = await userModel.create_user(
      name,
      email,
      password,
      location,
      role,
      interests
    );

    if (result) {
      res.send(result);
    } else {
      res.send({ message: "empty" });
    }
  }

  static async get_users(req, res) {
    var results = await userModel.get_users();

    if (results) {
      res.send(results);
    }
  }
}

module.exports = UserController;
