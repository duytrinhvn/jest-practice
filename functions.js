const axios = require("axios");
const functions = {
  add: (num1, num2) => num1 + num2,
  fetchUser: async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/2");
    const data = res.data;
    return data;
  }
};

module.exports = functions;
