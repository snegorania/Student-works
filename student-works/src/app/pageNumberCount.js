function pageNumberCount(length, rows) {
  let num = length % rows;
  if (num === 0) {
    return length / rows;
  } else {
    return (length - num) / rows + 1;
  }
}

export default pageNumberCount;
