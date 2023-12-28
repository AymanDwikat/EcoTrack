const scoreModel = require("../models/Score");

class ScoreController {
  static async delete_score(req, res) {
    const id = parseInt(req.user.userId);
    var result = await scoreModel.delete_score(id);

    if (result.affectedRows > 0) {
      // Deleted successfully
      res.send({ message: `The score with ID ${id} has been deleted` });
    } else {
      res.send({ message: "This score does not exist" });
    }
  }

  static async update_score(req, res) {
    const id = parseInt(req.user.userId);
    const { scoreValue } = req.body;

    var result = await scoreModel.update_score(id, scoreValue);

    if (result.affectedRows > 0) {
      // Updated successfully
      res.send({ message: `The score with ID ${id} has been updated` });
    } else {
      res.send({ message: "This score does not exist" });
    }
  }

  static async get_score_byId(req, res) {
    const id = parseInt(req.user.userId);
    var result = await scoreModel.get_score_byId(id);

    if (Array.isArray(result) && result.length > 0) {
      var extractedData = result.map((score) => {
        return {
          scoreValue: score.scoreValue,
        };
      });

      res.send(extractedData);
    } else {
      res.send({ message: "This score does not exist" });
    }
  }

  static async get_scores(req, res) {
    var result = await scoreModel.get_scores();

    if (Array.isArray(result) && result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "There is no score" });
    }
  }
}

module.exports = ScoreController;
