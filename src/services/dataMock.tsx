import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserTodos } from "../models/models";
import { ITodoMock } from "../models/modelsMock";

export const dataUserTodo = createAsyncThunk(
  "data/dataFetch",
  async (id: string | any) => {
    try {
      const response = await axios.get<ITodoMock>(
        `https://63e4093e4474903105e57490.mockapi.io/api/v1/todos/${id}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
)

interface objTodoPutProps {
  id: string,
  userData: IUserTodos
}

export const dataUserTodoPut = createAsyncThunk(
  "data/dataFetchPut",
  async (objTodoPut: objTodoPutProps) => {
    try {
      console.log(objTodoPut.userData)
      const response: any = await axios.put<ITodoMock>(
        `https://63e4093e4474903105e57490.mockapi.io/api/v1/todos/${objTodoPut.id}`, objTodoPut.userData);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
)

