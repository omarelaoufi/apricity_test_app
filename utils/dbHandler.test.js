const MyDatabase = require("./dbHandler");
const { allQuery, columnsQuery } = require("./queries");
const { databaseFile } = require("./statics");

describe("Database handler", () => {
  it("should fetch all data", async () => {
    const db = new MyDatabase(databaseFile);

    return db
      .fetch(allQuery())
      .then((data) => expect(data.length).toEqual(215132))
      .catch((err) => console.log(err));
  });

  it("should fetch columns data", async () => {
    const db = new MyDatabase(databaseFile);

    return db
      .fetch(columnsQuery(["class of worker"], "age", { limit: 5 }))
      .then((data) =>
        expect(data).toEqual([
          {
            avg_age: 34.494198663813194,
            "class of worker": "Not in universe",
            variable_count: 199523,
          },
        ])
      )
      .catch((err) => console.log(err));
  });
});
