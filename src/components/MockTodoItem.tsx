import { Checkbox, Input, Box, ListItem, ListItemButton, ListItemText, debounce } from '@mui/material';
import { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../hook/useTypedSelector';
import { TodoList } from '../models/modelsMock';
import { chengeCheketTodo, chengeTitleTodo } from '../store/redusers/mockTodo.slice';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import React from 'react';

interface MockTodoItemProps {
  todo?: TodoList
}

const MockTodoItem: FC<MockTodoItemProps> = ({ todo }: MockTodoItemProps) => {

  const [onChecked, setOnChecked] = useState<boolean | any>(todo?.completed);
  const [onTitle, setOnTitle] = useState<string | any>(todo?.title);
  const [onTodo, setOnTodo] = useState<TodoList | any>(todo);


  const [edit, setEdit] = useState(false);

  const dispatch = useAppDispatch()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateTitleValue = React.useCallback(
    debounce((todoNext) => {
      console.log(todo?.title)
      dispatch(chengeTitleTodo({ title: todoNext?.title, id: todoNext?.id }))
    }, 321), []
  )

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOnTitle(e.target.value)
    const todoNext = {
      title: e.target.value,
      completed: onChecked,
      id: todo?.id
    }
    updateTitleValue(todoNext)
  }

  const hendleChendge = () => {
    setOnChecked(!onChecked)
    setOnTodo({ ...onTodo, completed: onChecked })

  }

  useEffect(() => {
    dispatch(chengeCheketTodo({ onChecked: onChecked, id: todo?.id }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChecked]);

  return (
    <>
      <ListItem
        disablePadding
      >
        <Checkbox
          edge="start"
          checked={onChecked}
          onChange={hendleChendge}
        />
        <ListItemButton
          onClick={() => setEdit(true)}
        >
          {edit ?
            <Box>
              <Input
                value={onTitle}
                onChange={onChangeInput}
              />

            </Box>
            : <ListItemText primary={onTitle}
              onClick={() => setEdit(!edit)}
            />
          }
        </ListItemButton>
        {edit && <TaskAltIcon
          onClick={(e) => {
            e.stopPropagation()
            setEdit(!edit)
          }} />}
        {/* <DeleteIcon
          sx={{
            "&:hover": {
              color: "#b0a72bcc",
            },
            color: "#551aa8"
          }}
        // onClick={() => deleteTodo(item.id)}
        /> */}
      </ListItem>
    </>
  )
}
export default MockTodoItem