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
    color: "#000000"
  },
});

export default styles;
