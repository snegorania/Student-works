import { createSlice } from "@reduxjs/toolkit";
import sortFunctionCreater from "../../app/sortFunctionCreater";

const initialState = {
  students: [],
  column: "",
  counterL: 0,
  counterF: 0,
  filters: {
    group: "",
    topic: "",
  },
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    studentAdded: {
      reducer(state, action) {
        state.students.push(action.payload);
        if (state.column === "LastName") {
          state.students.sort(
            sortFunctionCreater(state.counterL, state.column)
          );
        } else {
          state.students.sort(
            sortFunctionCreater(state.counterF, state.column)
          );
        }
      },
    },

    studentDeleted(state) {
      let arr = state.students.filter((el) => el.checked);
      for (let i = 0; i < arr.length; i++) {
        state.students.splice(state.students.indexOf(arr[i]), 1);
      }
      if (state.column === "LastName") {
        state.students.sort(sortFunctionCreater(state.counterL, state.column));
      } else {
        state.students.sort(sortFunctionCreater(state.counterF, state.column));
      }
    },

    studentEdited: {
      reducer(state, action) {
        state.students.splice(
          state.students.indexOf(
            state.students.find((el) => el.id === action.payload.id)
          ),
          1,
          action.payload.student
        );
        if (state.column === "LastName") {
          state.students.sort(
            sortFunctionCreater(state.counterL, state.column)
          );
        } else {
          state.students.sort(
            sortFunctionCreater(state.counterF, state.column)
          );
        }
      },

      prepare(student) {
        return {
          payload: {
            id: student.id,
            student: { ...student },
          },
        };
      },
    },

    studentsFromLocalStorage(state) {
      state.length = 0;
      let arr = JSON.parse(localStorage.getItem("students"));
      for (let i = 0; i < arr.length; i++) {
        state.students.push(arr[i]);
      }

      if (state.column === "LastName") {
        state.students.sort(sortFunctionCreater(state.counterL, state.column));
      } else {
        state.students.sort(sortFunctionCreater(state.counterF, state.column));
      }
    },

    studentsLoadToLocalStorage(state) {
      localStorage.clear();
      localStorage.setItem("students", JSON.stringify(state.students));
    },

    studentsSorted(state, action) {
      state.column = action.payload;
      if (action.payload === "LastName") {
        if (state.counterL === 2) {
          state.counterL = 0;
        } else {
          state.counterL++;
        }
        state.students.sort(sortFunctionCreater(state.counterL, state.column));
      } else {
        if (state.counterF === 2) {
          state.counterF = 0;
        } else {
          state.counterF++;
        }
        state.students.sort(sortFunctionCreater(state.counterF, state.column));
      }
    },

    studentsReset(state) {
      state.students.length = 0;
    },

    studentMarkChecked(state, action) {
      state.students[
        state.students.indexOf(
          state.students.find((el) => el.id === action.payload)
        )
      ].checked = true;
    },

    studentMarkUnChecked(state, action) {
      state.students[
        state.students.indexOf(
          state.students.find((el) => el.id === action.payload)
        )
      ].checked = false;
    },

    studentsFilterGroup(state, action) {
      state.filters.group = action.payload;
    },

    studentsFilterTopic(state, action) {
      state.filters.topic = action.payload;
    },
  },
});

export const selectAllStudents = (state) => {
  if (state.students.filters.group || state.students.filters.topic) {
    return state.students.students.filter(
      (el) =>
        (state.students.filters.group &&
          state.students.filters.topic &&
          state.students.filters.topic === el.topic &&
          state.students.filters.group === el.group) ||
        (!(state.students.filters.group && state.students.filters.topic) &&
          ((state.students.filters.group &&
            el.group === state.students.filters.group) ||
            (state.students.filters.topic &&
              el.topic === state.students.filters.topic)))
    );
  } else {
    return state.students.students;
  }
};

export const selectStudentById = (state, id) =>
  state.students.students.find((el) => el.id === id);

export const selectCheckedLength = (state) =>
  state.students.students.filter((el) => el.checked).length;

export const {
  studentAdded,
  studentDeleted,
  studentEdited,
  studentsReset,
  studentsFromLocalStorage,
  studentsLoadToLocalStorage,
  studentsSorted,
  studentMarkChecked,
  studentMarkUnChecked,
  studentsFilterGroup,
  studentsFilterTopic,
} = studentSlice.actions;

export default studentSlice.reducer;
