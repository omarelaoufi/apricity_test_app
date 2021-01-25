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
    expect(options).toHaveLength(3);
    expect([
      options[0].getAttribute("value"),
      options[1].getAttribute("value"),
      options[2].getAttribute("value"),
    ]).toEqual(variables);
  });
});
