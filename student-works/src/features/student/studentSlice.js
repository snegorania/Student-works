import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

function compareNumeric(a, b) {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
}

function compareFirstName(a, b) {
    if (a.FirstName > b.FirstName) return 1;
    if (a.FirstName < b.FirstName) return -1;
}

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        studentAdded: {
            reducer(state, action) {
                state.push(action.payload.student);
                if (action.payload.sortType === "id") {
                    state.sort(compareNumeric);
                } else {
                    state.sort(compareFirstName);
                }
            },

            prepare(student, sortType) {
                return {
                    payload: {
                        student,
                        sortType
                    }
                }
            }
        },

        studentDeleted(state, action) {
            state.splice(action.payload, 1);
        },

        studentEdited: { 
            reducer(state,action) {
                state.splice(action.payload.id, 1, action.payload.student);
                if (action.payload.sortType === "id") {
                    state.sort(compareNumeric);
                } else {
                    state.sort(compareFirstName);
                }
            },

            prepare(student, sortType) {
                return {
                    payload: {
                        id: student.id,
                        student: {...student},
                        sortType
                    }
                }
            }
        },

        studentsFromLocalStorage(state, action) {
            state.length = 0;
            let key = '';
            for(let i = 0; i < localStorage.length; i++) {
              key = localStorage.key(i);
              state.push(JSON.parse(localStorage.getItem(key)));
            }
            if (action.payload === "id") {
                state.sort(compareNumeric);
            } else {
                state.sort(compareFirstName);
            }
        },

        studentsLoadToLocalStorage(state) {
            localStorage.clear();
            state.forEach((el, i) => {localStorage.setItem(String(i), JSON.stringify(el));});
        },

        studentsSorted(state, action) {
            if (action.payload === "id") {
                state.sort(compareNumeric);
            } else {
                state.sort(compareFirstName);
            }
        },

        studentsReset(state) {
            state.length = 0;
        }
    }
});

export const selectAllStudents = (state) => state.students;
export const selectStudentById = (state, id) => state.students.find(el => el.id === id);
export const { studentAdded, studentDeleted, studentEdited, studentsReset, studentsFromLocalStorage, studentsLoadToLocalStorage, studentsSorted} = studentSlice.actions;

export default studentSlice.reducer;