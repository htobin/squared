const sample = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function squared(array) {
  const sameArray = [];
  const filteredSquare = _.filter(array, function (num) {
    return Math.sqrt(num) % 1 === 0;
  });
  sameArray.push(filteredSquare);
  const filterNotSquare = _.filter(array, function (num) {
    return Math.sqrt(num) % 1 !== 0;
  });
  sameArray.push(filterNotSquare);
  return sameArray;
}

console.log(squared(sample));
