function problem1(users) {
  let result = [];

  for (let userName in users) {
    let interestsArray = users[userName].interests;

    for (let i = 0; i < interestsArray.length; i++) {
      if (interestsArray[i].includes("Video Games")) {
        result.push({
          name: userName
        });
        break;
      }
    }
  }

  return result;
}

module.exports = problem1;

