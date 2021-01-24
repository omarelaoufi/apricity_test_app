const MyDatabase = require("../utils/dbHandler");
const dbHandler = require("../utils/dbHandler");

exports.getAll = (req, res, next) => {
  const db = new MyDatabase("./us-census.db");

  db.fetch(`SELECT * FROM census_learn_sql LIMIT 100`).then((data) =>
    res.json(data)
  );
};
