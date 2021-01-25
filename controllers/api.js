const MyDatabase = require("../utils/dbHandler");
const { queryAll } = require("../utils/queries");

exports.getAll = (req, res, next) => {
  const db = new MyDatabase("./us-census.db");

  db.fetch(queryAll).then((data) => res.json(data));

  db.close();
};
