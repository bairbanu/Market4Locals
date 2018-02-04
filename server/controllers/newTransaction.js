const Transaction = require("../models/transaction");

exports.newTransaction = (request, response, next) => {
  const { buyer_id, item_id, seller_id, driver_id } = request.body;

  const transaction = new Transaction({
    buyer_id: buyer_id,
    item_id: item_id,
    seller_id: seller_id,
    driver_id: driver_id
  });

  transaction.save(error => {
    if (error) {
      return next(error);
    }
  });

  const query = Transaction.find({});

  query.exec((error, transactions) => {
    if (error) response.send(error);
    response.json(transactions);
  });
}