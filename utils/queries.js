exports.allQuery = (params = {}) =>
  `SELECT * FROM census_learn_sql LIMIT ${
    "limit" in params ? params["limit"] : 100
  }`;

exports.columnsQuery = (columns, params = {}) =>
  `SELECT "${columns.join('", "')}" FROM census_learn_sql LIMIT ${
    "limit" in params ? params["limit"] : 100
  }`;
