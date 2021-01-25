const MyDatabase = require("./dbHandler");
const { allQuery, columnsQuery } = require("./queries");

describe("Database handler", () => {
  it("should fetch all data", async () => {
    const db = new MyDatabase("./us-census.db");

    return db.fetch(allQuery).then((data) => expect(data.length).toEqual(100));
  });

  it("should fetch columns data", async () => {
    const db = new MyDatabase("./us-census.db");

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
      );
  });
});
