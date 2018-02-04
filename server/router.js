const Authentication = require("./controllers/authentication");
const AddItem = require("./controllers/addItem");
const NewTransaction = require("./controllers/newTransaction");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = app => {
  app.get("/", (request, response) => {
    response.send({ hi: "there" });
  });

  app.get("/items", AddItem.getItems);
  app.post("/item", AddItem.addItem);

  app.get("/transactions", NewTransaction.getTransactions);
  app.post("/transaction", NewTransaction.newTransaction);

  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);
};
