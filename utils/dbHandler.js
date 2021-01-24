const sqlite3 = require("sqlite3");

class MyDatabase extends sqlite3.Database {
  constructor(fileName) {
    super(fileName, sqlite3.OPEN_READONLY, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("US Census database connected.");
    });
  }

  fetch(query) {
    return new Promise((resolve, reject) => {
      this.all(query, [], (err, rows) => {
        if (err) reject(err.message);
        else resolve(rows);
      });
    });
  }

  close() {
    super.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Database closed.");
    });
  }
}

module.exports = MyDatabase;
