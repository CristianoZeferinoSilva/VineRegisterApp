import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },
  vineimage: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    paddingLeft:30,
  },
  all:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  avatar: {
    width: 80,
    height: 180,
    borderRadius: 40,
    backgroundColor: "#eee",
  },
  removeButton:{
    width:30,
    height:30,
    borderRadius:30,
    backgroundColor:'#32264d',
    justifyContent:'center',
    alignItems:'center',
  },
x:{
  margin:10,
  justifyContent:'flex-end',
  alignItems:'flex-end',
  flex:1,
},
  profileInfo: {
    marginLeft: 0,
  },
  name: {
    fontFamily: "Archivo_700Bold",
    color: "#32264d",
    fontSize: 20,
  },

  subject: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 12,
    marginTop: 4,
  },



  footer: {
    backgroundColor: "#e0bcdd",
    padding: 24,
    alignItems: "center",
    marginTop: 4,
    bottom:10
  },

  price: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 14,
  },

  priceValue: {
    fontFamily: "Archivo_700Bold",
    color: "#8257e5",
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: "#8257e5",
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  favorited: {
    backgroundColor: "#e33d3e",
  },

  contactButton: {
    backgroundColor: "#04d361",
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  contactButtonText: {
    color: "#FFF",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;
