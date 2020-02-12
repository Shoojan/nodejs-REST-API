const mongoose = require("mongoose");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/user");

exports.signUp = (req, res, next) => {
  //JOI Validation
  const userSchema = joi.object().keys({
    username: joi
      .string()
      .trim()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    password: joi
      .string()
      .trim()
      .min(3)
      .max(10)
      .required()
  });

  //validate here
  joi.validate(req.body, userSchema, (err, validatedUser) => {
    if (err) {
      res.status(500).json(err);
    } else {
      //if validation okay, check if user exists or not
      User.findOne({ username: validatedUser.username })
        .exec()
        .then(user => {
          if (user) return res.status(409).json({ message: "User exists!" });
          else {
            //   encrypt password provided
            bcrypt.hash(validatedUser.password, 10, (err, hashPassword) => {
              if (err) {
                return res.status(500).json(err);
              } else {
                //if password successfully encrypted,
                const newUser = new User({
                  _uid: new mongoose.Types.ObjectId(),
                  username: foundValidatedUser.username,
                  password: hashPassword
                });
                newUser
                  .save()
                  .then(() =>
                    res.status(200).json({ message: "User registered!" })
                  )
                  .catch(err => res.status(500).json(err));
              }
            });
          }
        })
        .catch(err => res.status(500).json(err));
    }
  });
};

exports.deleteUser = (req, res, next) => {
  const uid = req.params.uid;
  User.remove({ _uid: uid })
    .exec()
    .then(() => res.status(200).json({ message: "User deleted!" }))
    .catch(err => res.status(500).json(err));
};

exports.authenticate = (req, res, next) => {
  User.findOne({ username: req.body.username })
    .exec()
    .then(user => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err)
            return res.status(404).json({ message: "Authentication Failed!" });
          if (result) {
              //generate a token with a signature and user credentials
            const token = jwt.sign(
              {
                _uid: user._id,
                username: user.username
              },
              process.env.JWT_KEY,
              {
                expiresIn: "1h"
              }
            );
            return res.status(200).json({
              message: "Authentication Successful!",
              token: token
            });
          }

          return res.status(404).json({ message: "Authentication Failed!" });
        });
      } else return res.status(404).json({ message: "Authentication Failed!" });
    })
    .catch(err => res.status(500).json(err));
};
