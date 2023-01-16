import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext, useState } from "react";

import { styles } from "./styles";
import { Todo, EmptyList, Counter, TodoInput } from "../../components";
import { TodoContext } from "../../contexts";
import { TodoContextType } from "../../types";

export function Home() {
  const { todos } = useContext(TodoContext) as TodoContextType;

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} />

      <TodoInput />

      <Counter />

      <FlatList
        data={todos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Todo key={item.id} id={item.id} name={item.name} status={false} />
        )}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
