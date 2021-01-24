const sqlite3 = require("sqlite3").verbose();

exports.getAll = (req, res, next) => {
  console.log(`Fetching all`);

  const db = new sqlite3.Database(
    "./us-census.db",
    sqlite3.OPEN_READONLY,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("US Census SQlite database connected.");
    }
  );

  db.all(`SELECT * FROM census_learn_sql LIMIT 100`, [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    res.json(rows);
  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Database closed.");
  });
};
