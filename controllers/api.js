const MyDatabase = require("../utils/dbHandler");
const { allQuery } = require("../utils/queries");

exports.getAll = (req, res, next) => {
  const db = new MyDatabase("./us-census.db");

  db.fetch(allQuery).then((data) => res.json(data));

  db.close();
};
