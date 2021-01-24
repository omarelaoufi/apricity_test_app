const MyDatabase = require("./dbHandler");

describe("Database handler", () => {
  it("should fetch all data", async () => {
    const db = new MyDatabase("./us-census.db");

    return db
      .fetch(`SELECT * FROM census_learn_sql LIMIT 100`)
      .then((data) => expect(data.length).toEqual(100));
  });
});
