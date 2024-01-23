const sessionIdToUserMap = new Map();
let setUser = (id, user) => {
  sessionIdToUserMap.set(id, user);
};
let getUser = (id, user) => {
  sessionIdToUserMap.get(id);
};

module.exports = { setUser, getUser };
