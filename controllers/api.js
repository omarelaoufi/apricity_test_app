const MyDatabase = require("../utils/dbHandler");
const { allQuery, columnsQuery } = require("../utils/queries");
const { databaseFile, referenceVariable } = require("../utils/statics");

exports.getAll = (req, res, next) => {
  const db = new MyDatabase(databaseFile);

  db.fetch(allQuery())
    .then((data) => res.json(data))
    .catch((err) => console.log(err));

  db.close();
};

exports.getVariableData = (req, res, next) => {
  let variable = req.params.variable;

  const db = new MyDatabase(databaseFile);

  db.fetch(columnsQuery([referenceVariable, variable], { limit: 100 }))
    .then((data) => res.json(data))
    .catch((err) => console.log(err));

  db.close();
};

exports.getColumnsNames = (req, res, next) => {
  const db = new MyDatabase(databaseFile);

  db.fetch(allQuery({ limit: 1 }))
    .then((data) => res.json(Object.keys(data[0])))
    .catch((err) => console.log(err));

  db.close();
};
