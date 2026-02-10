function problem2(users) {
  return Object.keys(users).filter(function (name) {
    return users[name].nationality === "Germany";
  });
}

module.exports = problem2;
