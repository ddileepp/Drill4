function problem4(users) {
  return Object.keys(users).reduce(function (result, userName) {
    const designation = users[userName].desgination;
    let language = "";

    if (designation.includes("Golang")) {
      language = "Golang";
    } else if (designation.includes("Javascript")) {
      language = "Javascript";
    } else if (designation.includes("Python")) {
      language = "Python";
    }

    if (language !== "") {
      if (!result[language]) {
        result[language] = [];
      }
      result[language].push(userName);
    }

    return result;
  }, {});
}

module.exports = problem4;
