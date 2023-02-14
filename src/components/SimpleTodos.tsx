import { FC } from 'react'
import {Typography } from '@mui/material';
import { ITodos } from '../models/models';
 

interface TodosProps{
  title:string,
  todos:ITodos[]
}

const SimpleTodos:FC<TodosProps> = ({title, todos}:TodosProps) => {
  return (
    <>
      <Typography variant="h4" textAlign = 'center'>{title}</Typography>
        {todos.map(item=>(
          <Typography key={item.id}>
            {item.title}
      </Typography>
        ))}
    </>
  )
}

export default SimpleTodos