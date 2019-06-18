module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.

function succeed(item) {
  if (item.enhancement >= 0 && item.enhancement < 20) {
    item = {
      ...item,
      enhancement: item.enhancement + 1
    }
    return { ...item };
  } else {
    if (item.enhancement === 20) {
      return { ...item }
    } else {
      item = {
        ...item,
        enhancement: 0
      }
      return { ...item };
    }
  }
}

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 
//   18 goes down to 17).

function fail(item) {
  if (item.enhancement >= 0 && item.enhancement < 15) {
    item = {
      durability: item.durability - 5
    }

  } else {
    if (item.enhancement == 15 || item.enhancement == 16) {
      item = {
        durability: item.durability - 10
      }

    } else {
      if (item.enhancement > 16 && item.enhancement < 20) {
        item = {
          durability: item.durability - 10,
          enhancement: item.enhancement - 1
        }
      } else {
        if (item.enhancement == 20) {
          return {...item}
        } else {
          item = {
            durability: 100,
            enhancement: 0
          }
        }
      }
    }
  }
  return {...item}
}
 
// Repair the item back to 100 durability
function repair(item) {
  item = {
    ...item,
    durability: 100
  }
  return { ...item };
}

// Stretch Problem
// - if the enhancement level is 0, the the name is not modified.
// - if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), 
// between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".

function get(item) {
  if (item.enhancement > 0 && item.enhancement <= 20) {

    const newItem = {
        ...item,
        name: `[+${item.enhancement}] ${item.name}`
      }

      return {...newItem};
  } else {
    if (item.enhancement === 0) {
      return {...item};
    } else {
      return {...item, message: "Where did you get this item?"}
    }
  }
}
