import pageNumberCount from "./pageNumberCount";

function pagination(array, rowsNum, pageNum) {
  let arr = array.slice();
  let allpages = arr.length === 0 ? 1 : pageNumberCount(arr.length, rowsNum);
  let start = rowsNum * (pageNum - 1);
  let end = start + rowsNum;
  if (end > arr.length) {
    end = arr.length;
  }
  return {
    students: arr.slice(start, end),
    allpages,
    page: pageNum,
  };
}

export default pagination;
