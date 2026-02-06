function problem2(users) {
  let result = [];

  for (let userName in users) {
    if (users[userName].nationality === "Germany") {
      result.push({
        name: userName,
        details: users[userName]
      });
    }
  }

  return result;
}

module.exports = problem2;
