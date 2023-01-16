import { createContext, ReactElement, useState } from "react";
import { Alert } from "react-native";
import { TodoContextType, ITodo } from "../../types";

export const TodoContext = createContext<TodoContextType | null>(null);

function TodoProvider({ children }: any) {
  const [todos, setTodos] = useState<ITodo[]>([]);

  async function saveTodo({ name, status = false }: ITodo) {
    if (name === "")
      return Alert.alert("Please, give a description to your task 🤡");

    const newTodo: ITodo = {
      id: Math.ceil(Math.random() * 10),
      name,
      status,
    };

    setTodos([...todos, newTodo]);
  }

  async function updateTodo(id: number) {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
        setTodos([...todos]);
      }
    });
  }

  async function removeTodo(id: number) {
    Alert.alert("Remover", `Deseja remover a task ${id} ?`, [
      {
        text: "Sim",
        onPress: () => {
          setTodos((_) => todos.filter((todo) => todo.id !== id));
          Alert.alert(`To Do [${id}] removido com sucesso ✅`);
        },
      },

      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
