const reportModel = require("../models/Report");

class ReportController {
  static async create_report(req, res) {
    const userId = parseInt(req.user.userId);
    const { reportType, description, location } = req.body;

    var result = await reportModel.create_report(
      reportType,
      description,
      location,
      userId
    );

    if (result.affectedRows > 0) {
      // Created successfully
      res.send({ message: "The report was created successfully" });
    } else {
      res.send(result);
    }
  }

  static async delete_report(req, res) {
    const id = parseInt(req.params.id);
    var result = await reportModel.delete_report(id);

    if (result.affectedRows > 0) {
      // Deleted successfully
      res.send({ message: `The report with ID ${id} has been deleted` });
    } else {
      res.send({ message: "This report does not exist" });
    }
  }

  static async update_report(req, res) {
    const id = parseInt(req.params.id);
    const { location } = req.body;

    var result = await reportModel.update_report(
      id,
      location
    );

    if (result.affectedRows > 0) {
      // Updated successfully
      res.send({ message: `The report with ID ${id} has been updated` });
    } else {
      res.send({ message: "This report does not exist" });
    }
  }

  static async get_report_byId(req, res) {
    const id = parseInt(req.params.id);
    var result = await reportModel.get_report_byId(id);

    if (Array.isArray(result) && result.length > 0) {
      var extractedData = result.map((report) => {
        return {
          reportType: report.reportType,
          description: report.description,
          location: report.location,
          userId: report.userId,
        };
      });

      res.send(extractedData);
    } else {
      res.send({ message: "This report does not exist" });
    }
  }

  static async get_reports(req, res) {
    var result = await reportModel.get_reports();

    if (Array.isArray(result) && result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "There is no report" });
    }
  }
}

module.exports = ReportController;
