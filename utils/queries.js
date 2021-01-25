const { tableName } = require("./statics");

exports.allQuery = (params = {}) =>
  `SELECT * FROM ${tableName} ${
    "limit" in params ? `LIMIT ${params["limit"]}` : ""
  }`;

exports.columnsQuery = (columns, referenceColumn, params = {}) => {
  const queryColumns = `"${columns.join(
    '", "'
  )}", count(*) as variable_count, avg("${referenceColumn}") as avg_${referenceColumn.replace(
    " ",
    "_"
  )}`;

  const filters = `${[...columns, referenceColumn]
    .map((column) => `"${column}" is not NULL`)
    .join(" OR ")}`;

  const limiter = "limit" in params ? ` LIMIT ${params["limit"]}` : "";

  const groupBy = `"${columns.join('", "')}"`;

  return `SELECT ${queryColumns} FROM ${tableName} WHERE ${filters} GROUP BY ${groupBy} ORDER BY variable_count DESC${limiter}`;
};
