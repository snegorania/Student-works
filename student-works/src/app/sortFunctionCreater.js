import {SortById, SortByLastNameASC, SortByLastNameDESC, SortByFirstNameASC, SortByFirstNameDESC} from './sortFunctons'

function sortFunctionCreater(count, column) {
    switch (column) {
        case "FirstName":
            switch(count) {
                case 0:
                    return SortById;
                case 1:
                    return SortByFirstNameASC;
                case 2:
                    return SortByFirstNameDESC;
                default:
                   return SortById;
            }
        case "LastName":
            switch(count) {
                case 0:
                    return SortById;
                case 1:
                    return SortByLastNameASC;
                case 2:
                    return SortByLastNameDESC;
                default:
                    return SortById;
            }
        default:
            return SortById;
    }
}

export default sortFunctionCreater;