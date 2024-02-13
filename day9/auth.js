const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
 const authHeader = req.headers['authorization'];
 // console.log(authHeader)
 if(!authHeader){
  return res.status(401).json({message: 'UNAUTHORIZED'});
 }
 const token = authHeader.split(' ')[1];
 try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // Access decoded user information here
  req.userId = decoded.id;
  next();
} catch (err) {
  if (err instanceof jwt.TokenExpiredError) {
    return res.status(401).json({ message: 'Token expired' });
  } else {
    console.error(err);
    return res.status(403).json({ message: 'Forbidden' });
  }
 }
}

module.exports = verifyToken