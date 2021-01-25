const MyDatabase = require("../utils/dbHandler");
const { allQuery, columnsQuery } = require("../utils/queries");

exports.getAll = (req, res, next) => {
  const db = new MyDatabase("./us-census.db");

  db.fetch(allQuery).then((data) => res.json(data));

  db.close();
};

exports.getVariableData = (req, res, next) => {
  let variable = req.params.variable;

  const db = new MyDatabase("./us-census.db");

  db.fetch(columnsQuery([variable])).then((data) => res.json(data));

  db.close();
};
