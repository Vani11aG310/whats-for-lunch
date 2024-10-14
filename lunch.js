
const whatToDoForLunch = function(hungry, availableTime) {
  // check if we are not hungry
  if (!hungry) {
    console.log("I should get back to work.");
  } else {
    // check how much time I have to eat
    if (availableTime < 20) {
      console.log("I should pick something up and eat it in the lab.");
    } else if (availableTime >= 20 && availableTime <= 30) {
      console.log("I can try to find a nice place to eat nearby.");
    } else {
      console.log("Remember, I am in the bootcamp now, I should try to see if I can get more work done before I grab something to eat.");
    }
  }
};

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);