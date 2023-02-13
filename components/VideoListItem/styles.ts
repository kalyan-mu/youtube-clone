import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
  videoCard:{
    
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  timeContaner: {
    backgroundColor: "#00000099",
    height: 25,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    position: "absolute",
    right: 5,
    bottom: 5,
  },
  time: {
    color: "white",
    fontWeight: "bold",
  },
  titleRow: {
    flexDirection: "row",
    padding: 10,
  },
  midleContaner: {
    marginHorizontal: 15,
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  subtitle: {
    color: "grey",
    fontSize: 11,
    fontWeight: "500",
  },
  });
  export default styles;