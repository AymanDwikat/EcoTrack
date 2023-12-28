const userModel = require("../models/User");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/db");

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

    if (result.affectedRows > 0) {
      // Created successfully
      res.send({ message: "The user was created successfully" });
    } else {
      if (result.code === "ER_DUP_ENTRY") {
        // Duplicate entry error for 'email'
        res.send({ message: "Email address is already in use" });
      } else {
        res.send(result);
      }
    }
  }

  static async delete_user(req, res) {
    try {
      const id = parseInt(req.user.userId);
      var result = await userModel.delete_user(id);

      if (result.affectedRows > 0) {
        // Deleted successfully
        res.send({ message: `The user with ID ${id} has been deleted` });
      } else {
        res.send({ message: "This user does not exist" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal server error" });
    }
  }

  static async update_user(req, res) {
    const id = parseInt(req.user.userId);
    const { name, password, location, role, interests } = req.body;

    var result = await userModel.update_user(
      id,
      name,
      password,
      location,
      role,
      interests
    );

    if (result.affectedRows > 0) {
      // Updated successfully
      res.send({ message: `The user with ID ${id} has been updated` });
    } else {
      res.send({ message: "This user does not exist" });
    }
  }

  static async get_user_byId(req, res) {
    const id = parseInt(req.user.userId);
    var result = await userModel.get_user_byId(id);

    if (Array.isArray(result) && result.length > 0) {
      var extractedData = result.map((user) => {
        return {
          name: user.name,
          email: user.email,
          password: user.password,
          location: user.location,
          role: user.role,
          interests: user.interests,
        };
      });

      res.send(extractedData);
    } else {
      res.send({ message: "This user does not exist" });
    }
  }

  static async get_users(req, res) {
    var result = await userModel.get_users();

    if (Array.isArray(result) && result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "There is no user" });
    }
  }

  static async login(req, res) {
    const user = await userModel.authenticateUser(
      req.body.email,
      req.body.password
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT
    const payload = {
      userId: user.userId,
      username: user.username,
      location: user.location, // Extract the location here
    };
    const token = jwt.sign(payload, "SecretKey", { expiresIn: "1h" });
    delete user.password;
    const user_name = user.username;
    res.status(200).json({ token, user_name });
  }
  catch(err) {
    // Send the token to the client
    res.json({ token });
  }
}
module.exports = UserController;
