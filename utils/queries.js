exports.allQuery = "SELECT * FROM census_learn_sql LIMIT 100";

exports.columnsQuery = (columns, params = {}) =>
  `SELECT "${columns.join('", "')}" FROM census_learn_sql LIMIT ${
    "limit" in params ? params["limit"] : 100
  }`;
