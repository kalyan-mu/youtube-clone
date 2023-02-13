import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    videoPlayer:{
      width:'100%',
      aspectRatio:16/9,
        
    },
    videpInfoContainer: {
      margin: 15,
  },
  tags: {
    color: "#0094e3",
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 5,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 0,
  },
  subtitle: {
    color: "grey",
    fontSize: 11,
    fontWeight: "500",
  },
   avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },


// action list

 actionListContainer: {
    marginVertical:5,
  },
  actionListItem: {
    width: 70,
    height: 45,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    fontSize:11,
  },
  //haha
  main:{
    marginHorizontal: 10, 
    flex: 1
  },
  box:{
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderColor: "#3d3d3d",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  channalName:{
     color: "white", 
     fontSize: 18, 
     fontWeight: "bold"
  },
  subscribers1:{
    color: "grey", 
    fontSize: 18,
  },
  Subcribe:{
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
});


export default styles;