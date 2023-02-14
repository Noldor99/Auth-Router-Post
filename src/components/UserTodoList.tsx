import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { FC } from 'react';
import { IUserTodos } from '../models/models';

interface UserTodoListProps {
  getTodos?: IUserTodos[]
}


const UserTodoList: FC<UserTodoListProps> = ({ getTodos }: UserTodoListProps) => {
  return (
    <FormGroup>
      {getTodos?.map(todo =>
        <FormControlLabel key={todo.id}
          control={<Checkbox defaultChecked checked={todo.completed} />}
          label={todo.title} />)}
    </FormGroup>);
}

export default UserTodoList