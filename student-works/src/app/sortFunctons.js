function SortById(a, b){
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
}

function SortByLastNameASC(a, b) {
    if (a.LastName > b.LastName) return 1;
    if (a.LastName === b.LastName) return 0;
    if (a.LastName < b.LastName) return -1;
}

function SortByLastNameDESC(a, b) {
    if (a.LastName > b.LastName) return -1;
    if (a.LastName === b.LastName) return 0;
    if (a.LastName < b.LastName) return 1;
}

function SortByFirstNameASC(a, b) {
    if (a.FirstName > b.FirstName) return 1;
    if (a.FirstName === b.FirstName) return 0;
    if (a.FirstName < b.FirstName) return -1;
}

function SortByFirstNameDESC(a, b) {
    if (a.FirstName > b.FirstName) return -1;
    if (a.FirstName === b.FirstName) return 0;
    if (a.FirstName < b.FirstName) return 1;
}

export {SortById, SortByLastNameASC, SortByLastNameDESC, SortByFirstNameASC, SortByFirstNameDESC};