import React from "react";
import { render } from "@testing-library/react";
import DataTable from "./DataTable";

describe("DataTable", () => {
  it("should display right headers", () => {
    const data = [
      { "wage per hour": 0, variable_count: 188219, avg_age: 34 },
      { "wage per hour": 10, variable_count: 34234, avg_age: 0 },
      { "wage per hour": 324, variable_count: 3, avg_age: 5 },
    ];

    const { container } = render(<DataTable data={data} />);

    const table = container.getElementsByTagName("table");
    const th = table[0].getElementsByTagName("th");

    expect(table).toHaveLength(1);
    expect(th).toHaveLength(3);
    expect([th[0].innerHTML, th[1].innerHTML, th[2].innerHTML]).toEqual([
      "wage per hour",
      "variable_count",
      "avg_age",
    ]);
  });

  it("should display right body", () => {
    const data = [
      { "wage per hour": 0, variable_count: 188219, avg_age: 34 },
      { "wage per hour": 10, variable_count: 34234, avg_age: 0 },
      { "wage per hour": 324, variable_count: 3, avg_age: 5 },
    ];

    const { container } = render(<DataTable data={data} />);

    const table = container.getElementsByTagName("table");
    const td = table[0].getElementsByTagName("td");

    expect(table).toHaveLength(1);
    expect(td).toHaveLength(9);
    expect([td[0].innerHTML, td[1].innerHTML, td[2].innerHTML]).toEqual([
      "0",
      "188219",
      "34",
    ]);
  });
});
