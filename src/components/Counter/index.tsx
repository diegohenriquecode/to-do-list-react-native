import { useContext } from "react";
import { Text, View } from "react-native";
import { TodoContext } from "../../contexts";
import { TodoContextType } from "../../types";
import { styles } from "./styles";

export function Counter() {
  const { todos } = useContext(TodoContext) as TodoContextType;

  const completedes = todos.filter((todo) => todo.status);

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.textCreateds}>Criadas</Text>

        <View style={styles.circle}>
          <Text>{todos.length}</Text>
        </View>
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.textCompletedes}>Conclídas</Text>

        <View style={styles.circle}>
          <Text>{completedes.length}</Text>
        </View>
      </View>
    </View>
  );
}
