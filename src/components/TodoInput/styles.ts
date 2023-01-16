import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFFF",
    padding: 16,
    fontSize: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1e6f9f",
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
