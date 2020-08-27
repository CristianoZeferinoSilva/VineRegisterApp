import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
    
  },
  VineListPage: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24,
    
  },
 
  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },

  inputBlock: {
    width: "48%",
    
  },

  input: {
    height: 54,
    backgroundColor: "#FFF",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  submitButton: {
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  photoButton: {
    width:80,
    height:80,
    justifyContent: "center",
    alignItems: "center",
    left:'38%',
    right:'38%',
    overflow:'hidden',
    bottom:'3%',
  },
  photo: {
    width: "100%",
    resizeMode: "contain",
    overflow:'hidden',
},
photoTaked:{
  width:80,
  height:80,
},
  submitButtonText: {
    color: "#FFF",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    
  },
});

export default styles;
