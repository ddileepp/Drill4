function problem1(users) {
  return Object.keys(users).filter(function (name) {
    return users[name].interests
      .join()
      .toLowerCase()
      .includes("video games");
  });
}

module.exports = problem1;
