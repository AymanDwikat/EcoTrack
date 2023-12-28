const educationalmodel = require("../models/Resource");

class educationalcontroller {
  static async get_resources(req, res) {
    var result = await educationalmodel.get_resources();

    if (Array.isArray(result) && result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Sorry ,There is no resource data" });
    }
  }

  static async update_resource(req, res) {
    const educationalid = parseInt(req.params.id);
    const { title, description, url, category } = req.body;

    var result = await educationalmodel.update_resource(
      educationalid,
      title,
      description,
      url,
      category
    );

    if (result.affectedRows > 0) {
      // Updated successfully
      res.send({
        message: `The resource with ID ${educationalid} has been updated`,
      });
    } else {
      res.send({ message: "This resource does not exist" });
    }
  }

  static async insert_resource(req, res) {
    const { title, description, url, category } = req.body;

    var result = await educationalmodel.insert_resource(
      title,
      description,
      url,
      category
    );
    if (result.affectedRows > 0) {
      // Created successfully
      res.send({ message: "The resource data was inserted successfully" });
    } else {
      res.send(result);
    }
  }

  static async delete_resource(req, res) {
    const eduid = parseInt(req.params.id);
    var result = await educationalmodel.delete_resource(eduid);

    if (result.affectedRows > 0) {
      // Deleted successfully
      res.send({ message: `The resource with ID ${eduid} has been deleted` });
    } else {
      res.send({ message: "This resource does not exist" });
    }
  }
}
module.exports = educationalcontroller;
