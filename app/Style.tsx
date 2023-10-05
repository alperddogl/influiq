import { StyleSheet } from "react-native";
export const colorPalette = {
  blue: "#2B53EB",
  blueD: "#2342BA",
  green: "#58F3A8",
  greenD: "#49CC8F",
  purple: "#8C70F7",
  red: "#E35B63",
  redD: "#AD4750",
  yellow: "#F5C651",
  yellowD: "#C7A142",
  black: "#000000",
  blackL: "#1A1A1A",
  white: "#FFFFFF",
  pink: "#EB2BD6",
};

export const styles = StyleSheet.create({
  view: {
    paddingTop: 100,
    paddingBottom: 200,
    flex: 1,
    backgroundColor: colorPalette.black,
  },
  viewT: {
    flex: 1,
    backgroundColor: colorPalette.black,
  },
  viewG: {
    paddingTop: 100,
    paddingBottom: 200,
    flex: 1,
    backgroundColor: colorPalette.green,
    borderRadius: 20,
  },
  card: {
    backgroundColor: colorPalette.blue,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  cardY: {
    backgroundColor: colorPalette.yellow,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  cardG: {
    backgroundColor: colorPalette.green,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    borderRadius: 10,
    padding: 10,
  },
  h1: {
    color: colorPalette.white,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  h1B: {
    color: colorPalette.black,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: colorPalette.white,
    textAlign: "left",
    fontSize: 17,
    fontWeight: "normal",
  },
  textB: {
    color: colorPalette.black,
    textAlign: "left",
    fontSize: 17,
    fontWeight: "500",
  },
  checkBoxCon: {
    backgroundColor: colorPalette.black,
    borderColor: colorPalette.black,
    borderWidth: 2,
    borderRadius: 20,
    alignSelf: "stretch",
  },
  checkBox: {
    backgroundColor: colorPalette.black,
    alignSelf: "stretch",
    paddingLeft: 0,
  },

  button: {
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: colorPalette.black,
    margin: 20,
    borderColor: colorPalette.black,
    padding: 10,
  },

  buttonKey: {
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: colorPalette.green,
  },

  topicContainer: {
    margin: 0,
    padding: 10,

    alignItems: "center",

    backgroundColor: colorPalette.blue,

    borderRadius: 20,
  },
  topicContainerG: {
    margin: 0,
    padding: 10,

    alignItems: "center",

    backgroundColor: colorPalette.green,

    borderRadius: 20,
  },
  topicContainerY: {
    margin: 0,
    padding: 10,

    alignItems: "center",

    backgroundColor: colorPalette.yellow,

    borderRadius: 20,
  },
  input: {
    backgroundColor: colorPalette.black,
    borderColor: colorPalette.black,
    borderWidth: 2,
    borderRadius: 15,
    height: 46,
  },
  inputMulti: {
    backgroundColor: colorPalette.black,
    borderColor: colorPalette.black,
    borderWidth: 2,
    borderRadius: 15,
    padding: 20,
    paddingBottom: 0,
  },
  inputMultiS: {
    backgroundColor: colorPalette.black,
    borderRadius: 15,
    padding: 20,
    paddingBottom: 0,
  },

  contentView: {
    padding: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "stretch",
  },

  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});
