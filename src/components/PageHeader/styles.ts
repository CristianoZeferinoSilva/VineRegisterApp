import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#8257e5",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  title: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 14,
    lineHeight: 32,
    maxWidth: '90%',
    marginVertical: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    bottom:0,
    
  },
  logovine:{
    height:50,
    width:100,
    left:20,

  },
  
});

export default styles;
