const Model = require('../model');
const { Manufacturer } = Model;

const manufacturerController = {
  all(req, res, next) {
    Manufacturer.find({})
      .then(manufacturers => res.json(manufacturers))
      .catch(next);
  },
  byId(req, res, next) {
    const idParams = req.params.id;
    Manufacturer.findOne({ _id: idParams })
      .then(manufacturer => res.json(manufacturer))
      .catch(next);
  },
  create(req, res, next) {
    const requestBody = req.body;
    console.log(requestBody)
    console.log(req.body)
    const newManufacturer = new Manufacturer(requestBody);

    newManufacturer.save()
      .then(manufacturer => res.json(manufacturer))
      .catch(next);
  },
  update(req, res, next) {
    const idParams = req.params.id;
    let manufacturer = req.body;

    Manufacturer.updateOne({ _id: idParams }, { ...manufacturer })
      .then(updated => res.json(updated))
      .catch(next);
  },
  remove(req, res, next) {
    const idParams = req.params.id;
    Manufacturer.findOneAndRemove({ _id: idParams })
      .then(removed => res.json(idParams))
      .catch(next);
  }
}

module.exports = manufacturerController;
