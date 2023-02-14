import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import mockTodoSlice from '../store/redusers/mockTodo.slice'



const actions = {
  ...mockTodoSlice
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}