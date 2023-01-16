import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}
