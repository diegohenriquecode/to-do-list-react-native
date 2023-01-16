import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 18,
  },

  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  textCreateds: {
    color: "#499ed0",
    fontWeight: "bold",
  },

  textCompletedes: {
    color: "#8284FA",
    fontWeight: "bold",
  },

  circle: {
    backgroundColor: "#454545",
    color: "#D9D9D9",
    marginLeft: 12,
    borderRadius: 100,
    width: 25,
    height: 19,
    alignItems: "center",
    justifyContent: "center",
  },
});
