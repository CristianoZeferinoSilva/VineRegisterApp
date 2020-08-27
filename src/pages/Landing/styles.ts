import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
    justifyContent: "center",
    alignItems:'center',
    padding: 40,
  },

  bannere: {
    width: "100%",
    height:150,
    resizeMode: "contain",
    bottom:0,
    borderRadius: 3,
    borderTopRightRadius:32,
    borderBottomLeftRadius:32,
    overflow:'hidden',
  
  },

  title: {
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },

  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    margin:10,
    justifyContent: "space-between",
  },
  buttonPrimary: {
    backgroundColor: "#9871F5",
    alignItems:'center',
    justifyContent:'center',
  },
  buttonSecondary: {
    backgroundColor: "#04d361",
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 20,
  },
  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2ff",
    fontSize: 10,
    lineHeight: 20,
    maxWidth: '80%',
    marginBottom:20,
    bottom:0,
    position:'absolute',
  },
});

export default styles;
