import data from './data.json';

export function fillStorage() {
    localStorage.setItem("students", JSON.stringify(data.students));    
}