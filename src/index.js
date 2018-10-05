/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;

  for (let i = 0; i < preferences.length; i++) {

    let positionOne = preferences[i];
    let positionTwo = preferences[positionOne - 1];
    let positionThree = preferences[positionTwo - 1];

    let conditionOne = positionThree === i + 1;
    let conditionTwo = positionOne !== i + 1;

    if (conditionOne && conditionTwo) {
      count++;
    }
  }

  return count / 3;
};
