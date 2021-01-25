import React from "react";
import { render } from "@testing-library/react";
import DataViewer from "./DataViewer";

describe("DataViewer", () => {
  it("should allow user to choose within variables", () => {
    const variables = ["age", "class of worker", "industry code"];
    const { container } = render(<DataViewer variables={variables} />);

    const select = container.getElementsByTagName("select");
    const options = select[0].getElementsByTagName("option");

    expect(select).toHaveLength(1);
    expect(options).toHaveLength(4);
    expect([
      options[0].getAttribute("value"),
      options[1].getAttribute("value"),
      options[2].getAttribute("value"),
      options[3].getAttribute("value"),
    ]).toEqual(["", ...variables]);
  });

  it("should display data table when data is available", () => {
    const data = [
      { "wage per hour": 0, variable_count: 188219, avg_age: 34 },
      { "wage per hour": 10, variable_count: 34234, avg_age: 0 },
      { "wage per hour": 324, variable_count: 3, avg_age: 5 },
    ];
    const { container } = render(
      <DataViewer
        variables={["age", "class of worker", "industry code"]}
        data={data}
      />
    );

    const table = container.getElementsByTagName("table");

    expect(table).toHaveLength(1);
  });

  it("should display remainder", () => {
    const data = [
      { "wage per hour": 0, variable_count: 188219, avg_age: 34 },
      { "wage per hour": 10, variable_count: 34234, avg_age: 0 },
      { "wage per hour": 324, variable_count: 3, avg_age: 5 },
    ];

    const { container } = render(
      <DataViewer
        variables={["age", "class of worker", "industry code"]}
        data={data}
        remainder={20}
      />
    );

    const p = container.getElementsByTagName("p");

    expect(p).toHaveLength(1);
    expect(p[0].innerHTML).toEqual("20 non-displayed values left");
  });
});
