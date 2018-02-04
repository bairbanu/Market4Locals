const Item = require('../models/item');

exports.addItem = (request, response, next) => {
  const { title, img_url, description, price, isBought, isDelivered, inDelivery } = request.body;

  const item = new Item({
    title: title, 
    img_url: img_url,
    description: description,
    price: price,
    isBought: false,
    isDelivered: false,
    inDelivery: false
  });

  item.save(error => {
    if (error) {
      return next(error);
    }
  });
}

exports.getItems = (request, response, next) => {
  const query = Item.find({});

  query.exec((error, items) => {
    if (error) response.send(error);
    response.json(items);
  });
}