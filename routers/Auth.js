const jwt = require('jsonwebtoken');

function requireAuthentication(req, res, next) {
  let token = req.query.Authorization;
console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - no header ' });
  }
  
  try {
    // Verify and decode the token
    const decoded = jwt.verify(token,'SecretKey');
    console.log(decoded);
    // Set the decoded user information in the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
   
  } catch (err) {
    //console.log(err)
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = requireAuthentication;