const sessionIdToUserMap = new Map();

let setUser = (id, user) => {
  return sessionIdToUserMap.set(id, user);
};

let getUser = (id) => {
  return sessionIdToUserMap.get(id);
};

module.exports = { setUser, getUser };
