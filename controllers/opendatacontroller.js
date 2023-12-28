const opendata = require("../models/opendata");
class opendatacontroller {
    static async getdata(req, res) {
        var result = await opendata.getdata();
    
        if (Array.isArray(result) && result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "There is no data" });
        }
      }
    
}
module.exports = opendatacontroller;