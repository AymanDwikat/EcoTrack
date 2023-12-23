const educationalmodel = require("../models/educationalmodel");

class educationalcontroller {
 
  static async geteduacationaldata(req, res) {
    var result = await educationalmodel.geteduacationaldata();

    if (Array.isArray(result) && result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Sorry ,There is no educational data" });
    }
  }
  static async updateedudata(req, res) {
    const educationalid = parseInt(req.params.eduid);
    const {title,description,url,category} = req.body;

    var result = await educationalmodel.updateedudata(
        educationalid,title,description,url,category);

    if (result.affectedRows > 0) {
      // Updated successfully
      res.send({ message: `The edudata with ID ${educationalid} has been updated` });
    } else {
      res.send({ message: "This edudata does not exist" });
    }
  }
static async insertedudata(req, res) {
    const {title,description	,url	,category} = req.body;

    var result = await educationalmodel.insertedudata(
title,description,url,category);
    if (result.affectedRows > 0) {
      // Created successfully
      res.send({ message: "The Educational Data was inserted successfully" });
    } else {
      res.send(result);
    }
  }
  static async deleteedudata(req, res) {
    const eduid = parseInt(req.params.eduid);
    var result = await educationalmodel.deleteedudata(eduid);

    if (result.affectedRows > 0) {
      // Deleted successfully
      res.send({ message: `The eduData with ID ${eduid} has been deleted` });
    } else {
      res.send({ message: "This eduData does not exist" });
    }
  }
}
module.exports = educationalcontroller;
