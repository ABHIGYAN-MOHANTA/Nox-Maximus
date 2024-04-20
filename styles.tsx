import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  subcontainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Megloria",
    paddingBottom: 14,
  },
  textInput: {
    color: "#fff",
    fontFamily: "Megloria",
    padding: 10,
    height: "auto",
    borderWidth: 1,
    borderColor: "#fff",
    flex: 1,
    textAlignVertical: "top",
  },
  topBar: {
    backgroundColor: "#01796F",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#014040",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  topBarText: {
    color: "#fff",
    paddingTop: 24,
    fontSize: 40,
    fontFamily: "Megloria",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  quadrant: {
    flex: 1,
    borderColor: "#014040",
    borderWidth: 2,
  },
  quadrantHeader: {
    paddingTop: 10,
    zIndex: 1,
    backgroundColor: "#01796F",
  },
  header: {
    color: "#000000",
    fontFamily: "Megloria",
    fontSize: 22,
    textAlign: "center",
  },
  quadrantText: {
    fontFamily: "Megloria",
    paddingVertical: 2,
    textAlign: "center",
    color: "#000000",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
  },
  todoText: {
    flex: 1,
    color: "#fff",
    fontFamily: "Megloria",
    fontSize: 18,
  },
  deleteButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: "red",
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
    fontFamily: "Megloria",
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  taskLabel: {
    fontSize: 16,
    color: "white",
    marginRight: 10,
    fontFamily: "Megloria",
  },
  taskStatus: {
    fontSize: 16,
    color: "white",
    fontFamily: "Megloria",
  },
  waterCounter: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  counterButton: {
    paddingHorizontal: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  counterButtonText: {
    fontSize: 18,
    color: "white",
    fontFamily: "Megloria",
  },
  counterText: {
    fontSize: 16,
    color: "white",
    marginHorizontal: 10,
    fontFamily: "Megloria",
  },
  saveButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  saveButtonText: {
    fontSize: 18,
    color: "white",
    fontFamily: "Megloria",
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FF0000",
    borderRadius: 5,
  },
  resetButtonText: {
    fontSize: 18,
    color: "white",
    fontFamily: "Megloria",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
});

export default styles;
