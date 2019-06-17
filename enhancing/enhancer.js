module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

// Repair the item back to 100 durability
function repair(item) {
  item = {
    ...item,
    durability:100
  }
  return { ...item };
}

// Stretch Problem
function get(item) {
  return { ...item };
}
