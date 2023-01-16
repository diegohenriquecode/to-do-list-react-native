import { useContext, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TodoContext } from "../../contexts";
import { ITodo, TodoContextType } from "../../types";
import { styles } from "./styles";

export function Todo({ name, status, id }: ITodo) {
  const { todos, removeTodo, updateTodo } = useContext(
    TodoContext
  ) as TodoContextType;

  const [crurentStatus, setCurrentStatus] = useState<boolean>(status);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setCurrentStatus(!crurentStatus);
          updateTodo(id);
        }}
      >
        <View>
          {crurentStatus ? (
            <Image source={require("../../../assets/circle-checked.png")} />
          ) : (
            <Image source={require("../../../assets/circle.png")} />
          )}
        </View>
      </TouchableOpacity>
      <Text
        style={{
          color: "#FFF",
          textAlign: "left",
          paddingHorizontal: 6,
          maxWidth: "85%",
          textDecorationLine: crurentStatus ? "line-through" : "none",
        }}
      >
        {name}
      </Text>
      <TouchableOpacity onPress={() => removeTodo(id)}>
        <View>
          <Image source={require("../../../assets/trash.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
