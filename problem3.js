function problem3(users) {
  return Object.keys(users).filter(function (name) {
    return users[name].qualification === "Masters";
  });
}

module.exports = problem3;
