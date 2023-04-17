function search(array, searchText) {
  let arr = array.slice();
  if (searchText) {
    arr = arr.filter(
      (el) =>
        el.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        el.firstName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  return arr;
}

export default search;
