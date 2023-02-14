import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { dataUserTodo } from "../../services/dataMock";
import { ITodoMock } from '../../models/modelsMock'


interface mockTodoSliceProps {
  loading: boolean,
  errorMessage: string | null,
  userData?: ITodoMock | any,
}

const initialState: mockTodoSliceProps = {
  loading: false,
  errorMessage: '',
  userData: null,
};

const mockTodoSlice = createSlice({
  name: "mockTodo",
  initialState,
  reducers: {
    chengeCheketTodo(state, action) {
      const findItem: any = state.userData.todoList.find((item: any) => item.id === action.payload.id)
      findItem.completed = action.payload.onChecked
      console.log(JSON.stringify(state.userData, undefined, 2))
    },
    chengeTitleTodo(state, action) {
      const findItem: any = state.userData.todoList.find((item: any) => item.id === action.payload.id)
      console.log(JSON.stringify(action, undefined, 2))
      findItem.title = action.payload.title
    },
  },
  extraReducers(builder) {
    builder
      .addCase(dataUserTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(dataUserTodo.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = "Something went wrong";
      })
      .addCase(dataUserTodo.fulfilled, (state, action: PayloadAction<ITodoMock | any>) => {
        state.loading = false;
        state.userData = action.payload
        state.errorMessage = null;
      });
  },
});

export const { chengeCheketTodo, chengeTitleTodo } = mockTodoSlice.actions

export default mockTodoSlice.reducer;