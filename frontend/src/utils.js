import percussion from "./images/percussion.png";
import brass from "./images/brass.png";
import string from "./images/string.png";
import woodwind from "./images/woodwind.png";
import world from "./images/world.png"

export const getIcon = (instrument) => {
  let icon = "";

  switch (instrument.Family.family) {
    case "woodwind":
      icon = woodwind;
      break;
    case "brass":
      icon = brass;
      break;
    case "string":
      icon = string;
      break;
    case "percussion":
      icon = percussion;
      break;
    default:
      icon = world;
      break;
  }

  return icon;
}

const calcRating = (ratings) => {
  let total = 0;
  ratings.forEach(rating => {
    total += rating;
  })

  let avg = total/ratings.length;
  let fixed = avg.toFixed(2);
  let parsed = Number(fixed);
  return  parsed;
}

export default calcRating;
