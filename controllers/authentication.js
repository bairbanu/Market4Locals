const jwt = require("jwt-simple");
const User = require("../models/user");
const config = require("../config");

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

exports.signin = (request, response, next) => {
  response.send({ token: tokenForUser(request.user) });
};

exports.signup = (request, response, next) => {
  const { name, eth_address, email, password, address } = request.body;

  if (!email || !password) {
    return response
      .status(422)
      .send({ error: "You must provide email and password" });
  }

  User.findOne({ email: email }, (error, existingUser) => {
    if (error) {
      return next(error);
    }

    if (existingUser) {
      return response.status(422).send({ error: "Email is in use" });
    }

    const user = new User({
      name: name,
      eht_address: eth_address,
      email: email,
      password: password,
      address: address
    });

    user.save(error => {
      if (error) {
        return next(error);
      }
    });

    response.json({ token: tokenForUser(user) });
  });
};
