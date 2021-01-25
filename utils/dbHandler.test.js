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
      .fetch(columnsQuery(["age", "class of worker"], { limit: 5 }))
      .then((data) =>
        expect(data).toEqual([
          { age: null, "class of worker": null },
          { age: null, "class of worker": null },
          { age: null, "class of worker": null },
          { age: null, "class of worker": null },
          { age: null, "class of worker": null },
        ])
      )
      .catch((err) => console.log(err));
  });
});
