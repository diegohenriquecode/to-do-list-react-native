import { Text } from "react-native";
import { TaskType } from "../types";

export function Task({ name, onRemove }: TaskType) {
  return <Text>TASK EXAMPLE {name}</Text>;
}
