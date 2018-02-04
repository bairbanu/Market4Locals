const Item = require('../models/item');

exports.addItem = (request, response, next) => {
  const { title, img_url, description, isBought, isDelivered, inDelivery } = request.body;

  const item = new Item({
    title: title, 
    img_url: img_url,
    description: description,
    isBought: false,
    isDelivered: false,
    inDelivery: false
  });

  item.save(error => {
    if (error) {
      return next(error);
    }
  });

  response.json({ saved: "fa show!"})
}