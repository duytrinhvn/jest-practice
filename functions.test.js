const functions = require("./functions");
const axios = require("axios");

test("Adds 2+2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2+2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("The fetch return an user with name of Ervin Howell", async () => {
  const user = await functions.fetchUser();
  expect(user.name).toBe("Ervin Howell");
});
