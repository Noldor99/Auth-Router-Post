/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, FormGroup, List } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MockTodoItem from "../components/MockTodoItem";
import { useAppDispatch, useTypedSelector } from "../hook/useTypedSelector";
import { TodoList } from "../models/modelsMock";
import { dataUserTodo, dataUserTodoPut } from "../services/dataMock";
import { AppDispatch } from "../store";


const MockDetails = () => {

  const { id } = useParams<number | any>()

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { userData } = useTypedSelector(state => state.todo)
  console.log(userData)

  useEffect(() => {
    dispatch(dataUserTodo(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //@ts-ignore
    dispatch(dataUserTodoPut({ id: id, userData: userData }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);





  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {userData?.todoList.map((todo: TodoList | undefined) =>
          <MockTodoItem
            key={todo?.id}
            todo={todo}
          />
        )}
      </List>
      <Button
        size="small"
        onClick={() => navigate(-1)}
      >Go bask</Button>
    </Box >
  )
}

export default MockDetails