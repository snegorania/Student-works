function sortASC(column) {
  return (a, b) => (a[column] > b[column] ? 1 : -1);
}

function sortDESC(column) {
  return (a, b) => (a[column] < b[column] ? 1 : -1);
}

export { sortASC, sortDESC };
