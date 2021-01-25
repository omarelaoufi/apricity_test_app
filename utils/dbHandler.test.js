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
            avg_age: 30.512973215621727,
            "class of worker": "Not in universe",
            variable_count: 100245,
          },
          {
            avg_age: 36.93895429555173,
            "class of worker": "Private",
            variable_count: 72028,
          },
          {
            avg_age: 44.92161042036708,
            "class of worker": "Self-employed-not incorporated",
            variable_count: 8445,
          },
          {
            avg_age: 41.90506166495375,
            "class of worker": "Local government",
            variable_count: 7784,
          },
          {
            avg_age: 39.911757747811684,
            "class of worker": "State government",
            variable_count: 4227,
          },
        ])
      )
      .catch((err) => console.log(err));
  });
});
