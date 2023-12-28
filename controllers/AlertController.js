const alertModel = require("../models/Alerts");

class AlertController {
  static async create_alert(req, res) {
    const userId = parseInt(req.user.userId);
    const { alertType, threshold } = req.body;

    var result = await alertModel.create_alert(alertType, threshold, userId);

    if (result.affectedRows > 0) {
      // Created successfully
      res.send({ message: "The alert was created successfully" });
    } else {
      res.send(result);
    }
  }

  static async delete_alert(req, res) {
    const id = parseInt(req.params.id);
    var result = await alertModel.delete_alert(id);

    if (result.affectedRows > 0) {
      // Deleted successfully
      res.send({ message: `The alert with ID ${id} has been deleted` });
    } else {
      res.send({ message: "This alert does not exist" });
    }
  }

  static async update_alert(req, res) {
    const id = parseInt(req.params.id);
    const { threshold } = req.body;

    var result = await alertModel.update_alert(id, threshold);

    if (result.affectedRows > 0) {
      // Updated successfully
      res.send({ message: `The alert with ID ${id} has been updated` });
    } else {
      res.send({ message: "This alert does not exist" });
    }
  }

  static async get_alert_byId(req, res) {
    const id = parseInt(req.params.id);
    var result = await alertModel.get_alert_byId(id);

    if (Array.isArray(result) && result.length > 0) {
      var extractedData = result.map((alert) => {
        return {
          alertType: alert.alertType,
          threshold: alert.threshold,
        };
      });

      res.send(extractedData);
    } else {
      res.send({ message: "This alert does not exist" });
    }
  }
}

module.exports = AlertController;
