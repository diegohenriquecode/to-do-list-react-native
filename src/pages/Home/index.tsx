import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

import { styles } from "./styles";
import { Task, EmptyList, Counter } from "../../components";

export function Home() {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [taskName, setTaskName] = useState<string>("");

  function handleAddTask() {
    return {};
  }

  function handleTaskRemove(task: string) {
    return {};
  }

  return (
    <View>
      <Image source={require("../../../assets/logo.png")} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={String(styles.placeholderTextColor)}
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Counter />

      <FlatList
        data={taskList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            name={item}
            onRemove={() => handleTaskRemove(item)}
          />
        )}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
