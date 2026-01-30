const emitter = require("events");
const instanceEmitter = new emitter();

const eventCounts = {
  UserloggedIn: 0,
  UserLoggedOut: 0,
  ProfileUpdated: 0,
  UserPurchasedItem: 0,
};

instanceEmitter.on("UserloggedIn", () => {
  eventCounts.UserloggedIn++;
  console.log("User logged in");
});

instanceEmitter.on("UserLoggedOut", () => {
  eventCounts.UserLoggedOut++;
  console.log("User logged out");
});

instanceEmitter.on("ProfileUpdated", () => {
  eventCounts.ProfileUpdated++;
  console.log("Profile updated");
});

instanceEmitter.on("UserPurchasedItem", () => {
  eventCounts.UserPurchasedItem++;
  console.log("User purchased an item");
});


instanceEmitter.emit("UserloggedIn");
instanceEmitter.emit("ProfileUpdated");
instanceEmitter.emit("UserPurchasedItem");
instanceEmitter.emit("UserLoggedOut");
console.log("Event counts:", eventCounts);
