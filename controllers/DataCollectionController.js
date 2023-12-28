const Datacollection = require("../models/DataCollection");
class DataCollectionController {
  static async insertdata(req, res) {
    const userId = parseInt(req.user.userId);
    const { dataType, location, value, source, unit } = req.body;

    var result = await Datacollection.insertdata(
      dataType,
      location,
      value,
      source,
      unit,
      userId
    );

    if (result.affectedRows > 0) {
      // Created successfully
      res.send({ message: "The Data was inserted successfully" });
    } else {
      res.send(result);
    }
  }

  static async updatedata(req, res) {
    const dataid = parseInt(req.params.dataId);
    const { value } = req.body;

    var result = await Datacollection.updatedata(
      value,
      dataid
    );

    if (result.affectedRows > 0) {
      // Updated successfully
      res.send({ message: `The data with ID ${dataid} has been updated` });
    } else {
      res.send({ message: "This data does not exist" });
    }
  }

  static async getData(req, res) {
    const userId = parseInt(req.params.userId);

    try {
      const result = await Datacollection.getData(userId);

      if (result.length > 0) {
        // Data found for the user
        res.send({ data: result });
      } else {
        // No data found for the user
        res.send({ message: "No data found for this user" });
      }
    } catch (error) {
      // Handle the error
      res.status(500).send({ message: "Internal Server Error" });
    }
  }

  static async deletedata(req, res) {
    const dataId = parseInt(req.params.dataId);
    var result = await Datacollection.deletedata(dataId);

    if (result.affectedRows > 0) {
      // Deleted successfully
      res.send({ message: `The Data with ID ${dataId} has been deleted` });
    } else {
      res.send({ message: "This Data does not exist" });
    }
  }
}

module.exports = DataCollectionController;
