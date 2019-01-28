// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) { return driver.toUpperCase() === name.toUpperCase(); });
};

function fuzzyMatch(drivers, string) {
  let stringLength = string.length;
  return drivers.filter(function (driver) { return driver.slice(0, stringLength) === string;})
};

function matchName(drivers, name) {
  return drivers.filter(function (driver) { return driver.name.toUpperCase() === name.toUpperCase();
  });
};
