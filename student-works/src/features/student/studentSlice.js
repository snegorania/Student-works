import { createSlice } from '@reduxjs/toolkit';
import sortFunctionCreater from '../../app/sortFunctionCreater';

const initialState = {
    students: [],
    column: "",
    counterL: 0,
    counterF: 0
};

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        studentAdded: {
            reducer(state, action) {
                state.students.push(action.payload);
                if(state.column === "LastName") {
                    state.students.sort(sortFunctionCreater(state.counterL, state.column));
                } else {
                    state.students.sort(sortFunctionCreater(state.counterF, state.column));
                }
            },

        },

        studentDeleted(state, action) {
            for(let i = 0; i < action.payload.length; i++) {
                state.students.splice((state.students.indexOf(state.students.find(el => el.id === action.payload[i]))), 1);
            }
            if(state.column === "LastName") {
                state.students.sort(sortFunctionCreater(state.counterL, state.column));
            } else {
                state.students.sort(sortFunctionCreater(state.counterF, state.column));
            }
        },

        studentEdited: { 
            reducer(state,action) {
                state.students.splice(state.students.indexOf(state.students.find(el => el.id === action.payload.id)), 1, action.payload.student);
                if(state.column === "LastName") {
                    state.students.sort(sortFunctionCreater(state.counterL, state.column));
                } else {
                    state.students.sort(sortFunctionCreater(state.counterF, state.column));
                }
            },

            prepare(student) {
                return {
                    payload: {
                        id: student.id,
                        student: {...student},
                    }
                }
            }
        },

        studentsFromLocalStorage(state) {
            state.length = 0;
            let arr = JSON.parse(localStorage.getItem('students'));
            for(let i = 0; i < arr.length; i++) {
                state.students.push(arr[i]);
            }

            if(state.column === "LastName") {
                state.students.sort(sortFunctionCreater(state.counterL, state.column));
            } else {
                state.students.sort(sortFunctionCreater(state.counterF, state.column));
            }
        },

        studentsLoadToLocalStorage(state) {
            localStorage.clear();
            localStorage.setItem('students', JSON.stringify(state))
        },

        studentsSorted(state, action) {
            state.column = action.payload
            if (action.payload === "LastName") {
                if( state.counterL === 2 ) {
                    state.counterL = 0;
                } else {
                    state.counterL++;
                }
                state.students.sort(sortFunctionCreater(state.counterL, state.column));
            } else {
                if( state.counterF === 2 ) {
                    state.counterF = 0;
                } else {
                    state.counterF++;
                }
                state.students.sort(sortFunctionCreater(state.counterF, state.column));
            }
        },

        studentsReset(state) {
            state.students.length = 0;
        }
    }
});

export const selectAllStudents = (state, filters) => {
    if (filters.group || filters.topic) {
        return state.students.students.filter(el => 
            ((filters.group && filters.topic) && (filters.topic === el.topic && filters.group === el.group)) || 
            (!(filters.group && filters.topic) && ((filters.group && el.group === filters.group) || (filters.topic && el.topic === filters.topic))))
    } else {
        return state.students.students;
    }
}
export const selectStudentById = (state, id) => state.students.students.find(el => el.id === id);
export const { studentAdded, studentDeleted, studentEdited, studentsReset, studentsFromLocalStorage, studentsLoadToLocalStorage, studentsSorted} = studentSlice.actions;

export default studentSlice.reducer;