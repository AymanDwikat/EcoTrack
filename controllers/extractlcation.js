const jwt = require('jsonwebtoken');

function extractUserLocation(req, res, next) {
  let token = req.query.Authorization;

  if (token) {
    jwt.verify(token, 'SecretKey', (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }

      // Attach the user's location to the request object
      req.userLocation = decoded.location;
      
      next();
    });
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = extractUserLocation;
