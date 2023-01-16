import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/clipboard.png")} />

      <Text style={styles.text}>
        Você ainda não tem tarefas cadastradas Crie tarefas e organize seus
        itens a fazer
      </Text>
    </View>
  );
}
