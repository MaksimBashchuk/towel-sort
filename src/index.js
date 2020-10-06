module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let sortedMatrix = matrix.map((item, index) => index % 2 === 0 ? item : item.reverse());
  return sortedMatrix.flat();
};
