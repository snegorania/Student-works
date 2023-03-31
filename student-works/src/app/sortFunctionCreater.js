import { sortASC, sortDESC } from "./sortFunctons";

function sortFunctionCreater(count, column) {
  switch (count) {
    case 0:
      return sortASC("id");
    case 1:
      return sortASC(column);
    case 2:
      return sortDESC(column);
    default:
      return sortASC("id");
  }
}

export default sortFunctionCreater;
