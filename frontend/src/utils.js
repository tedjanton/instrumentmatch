const calcRating = (ratings) => {
  let total = 0;
  ratings.forEach(rating => {
    total += rating;
  })

  return total/ratings.length;
}

export default calcRating;
