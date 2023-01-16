import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
    marginLeft: -5,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    marginRight: 12,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFFF",
    padding: 16,
    fontSize: 16,
  },

  placeholderTextColor: {
    color: "#6B6B6B",
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
  },

  form: {
    flexDirection: "row",
    width: "100%",
    marginTop: 36,
    marginBottom: 42,
  },

  emptyList: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
});
