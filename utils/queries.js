exports.allQuery = (params = {}) =>
  `SELECT * FROM census_learn_sql ${
    "limit" in params ? `LIMIT ${params["limit"]}` : ""
  }`;

exports.columnsQuery = (columns, params = {}) => {
  return `SELECT "${columns.join(
    '", "'
  )}" FROM census_learn_sql WHERE ${columns
    .map((column) => `"${column}" is not NULL`)
    .join(" OR ")}${"limit" in params ? ` LIMIT ${params["limit"]}` : ""}`;
};
