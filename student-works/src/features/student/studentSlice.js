import { createSlice } from "@reduxjs/toolkit";
import sortFunctionCreater from "../../app/sortFunctionCreater";
import pagination from "../../app/pagination";
import search from "../../app/search";
import filter from "../../app/filter";

const initialState = {
  students: [],
  checked: [],
  column: "",
  counter: 0,
  filters: {
    group: "",
    topic: "",
  },
  searchText: "",
  page: 1,
  rows: 5,
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    studentAdded: {
      reducer(state, action) {
        state.students.push(action.payload);

        state.students.sort(sortFunctionCreater(state.counter, state.column));
      },
    },

    studentDeleted(state) {
      state.students = state.students.filter(
        (el) => !state.checked.includes(el.id)
      );
      state.checked = [];

      state.students.sort(sortFunctionCreater(state.counter, state.column));
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

        state.students.sort(sortFunctionCreater(state.counter, state.column));
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
      state.page = 1;
      state.students = [];
      let arr = JSON.parse(localStorage.getItem("students"));
      arr.forEach((el) => {
        state.students.push(el);
      });

      state.students.sort(sortFunctionCreater(state.counter, state.column));
    },

    studentsLoadToLocalStorage(state) {
      state.page = 1;
      localStorage.setItem("students", JSON.stringify(state.students));
    },

    studentsSorted(state, action) {
      state.page = 1;
      state.page = 1;
      if (!(state.column === action.payload)) {
        state.counter = 0;
        state.column = action.payload;
      }
      if (state.counter === 2) {
        state.counter = 0;
      } else {
        state.counter++;
      }
      state.students.sort(sortFunctionCreater(state.counter, state.column));
    },

    studentsReset(state) {
      state.page = 1;
      state.students = [];
    },

    studentCheck(state, action) {
      if (state.checked.includes(action.payload)) {
        state.checked.splice(state.checked.indexOf(action.payload), 1);
      } else {
        state.checked.push(action.payload);
      }
    },

    studentsFilterGroup(state, action) {
      state.page = 1;
      state.filters.group = action.payload;
    },

    studentsFilterTopic(state, action) {
      state.page = 1;
      state.filters.topic = action.payload;
    },

    changePage(state, action) {
      if (
        action.payload.isDirectionNext &&
        state.page < action.payload.maxPage
      ) {
        state.page++;
      }

      if (!action.payload.isDirectionNext && state.page > 1) {
        state.page--;
      }
    },

    studentsSetNum(state, action) {
      state.page = 1;
      if (action.payload) {
        state.rows = Number(action.payload);
      } else {
        state.rows = 5;
      }
    },

    studentsSearch(state, action) {
      state.page = 1;
      state.searchText = action.payload;
    },
  },
});

export const selectAllStudents = (state) =>
  pagination(
    search(
      filter(
        state.students.students,
        state.students.filters.topic,
        state.students.filters.group
      ),
      state.students.searchText
    ),
    state.students.rows,
    state.students.page
  );
export const selectStudentById = (state, id) =>
  state.students.students.find((el) => el.id === id);

export const selectCheckedLength = (state) => state.students.checked.length;

export const {
  studentAdded,
  studentDeleted,
  studentEdited,
  studentsReset,
  studentsFromLocalStorage,
  studentsLoadToLocalStorage,
  studentsSorted,
  studentCheck,
  studentsFilterGroup,
  studentsFilterTopic,
  changePage,
  studentsSetNum,
  studentsSearch,
  clearSearch,
} = studentSlice.actions;

export default studentSlice.reducer;
