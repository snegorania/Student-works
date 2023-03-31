function filter(array, topic, group) {
  let arr = array.slice();

  if (topic) {
    arr = arr.filter((el) => el.topic === topic);
  }

  if (group) {
    arr = arr.filter((el) => el.group === group);
  }

  return arr;
}

export default filter;
