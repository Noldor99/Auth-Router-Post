export interface TodoList {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoMock {
  todoList: TodoList[];
  id: string;
}