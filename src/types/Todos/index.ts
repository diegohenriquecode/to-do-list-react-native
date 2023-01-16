export interface ITodo {
  id: number;
  name: string;
  status: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};
