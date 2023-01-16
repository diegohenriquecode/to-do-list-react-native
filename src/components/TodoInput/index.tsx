import { useContext, useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { TodoContext } from "../../contexts";
import { TodoContextType } from "../../types";
import { styles } from "./styles";

export function TodoInput() {
  const { saveTodo } = useContext(TodoContext) as TodoContextType;

  const [newTaskName, setNewTaskName] = useState<string>("");

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#808080"
        onChangeText={setNewTaskName}
        value={newTaskName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          saveTodo({ name: newTaskName, id: Math.random(), status: false });
          setNewTaskName("");
        }}
      >
        <View>
          <Image source={require("../../../assets/plus.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
