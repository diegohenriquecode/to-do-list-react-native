import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import TodoProvider from "./src/contexts/todoContext";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <TodoProvider>
      <View style={{ backgroundColor: "#292929", flex: 1 }}>
        <StatusBar style="auto" />
        <Home />
      </View>
    </TodoProvider>
  );
}
