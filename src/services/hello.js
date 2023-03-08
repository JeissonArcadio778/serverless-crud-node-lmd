"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello From Services!",
        input: event,
      },
      null,
      2
    ),
  };
};
