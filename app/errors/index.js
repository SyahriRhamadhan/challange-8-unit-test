const CarAlreadyRentedError = require("./CarAlreadyRentedError");
const EmailNotRegisteredError = require("./EmailNotRegisteredError");
const InsufficientAccessError = require("./InsufficientAccessError");
const NotFoundError = require("./NotFoundError");
const EmailAlreadyTakenError = require("./EmailAlreadyTakenError");
const WrongPasswordError = require("./WrongPasswordError");

module.exports = {
  CarAlreadyRentedError,
  EmailNotRegisteredError,
  EmailAlreadyTakenError,
  InsufficientAccessError,
  NotFoundError,
  WrongPasswordError,
};
