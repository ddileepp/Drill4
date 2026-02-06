function problem3(users) {
  let result = [];

  for (let userName in users) {
    if (users[userName].qualification === "Masters") {
      result.push({
        name: userName,
        details: users[userName]
      });
    }
  }

  return result;
}

module.exports = problem3;
