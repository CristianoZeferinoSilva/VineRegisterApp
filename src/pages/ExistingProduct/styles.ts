import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },
 
  labelname: {
    flex:1,
    color: "#fff",
    backgroundColor:'#be7abb',
    textAlignVertical:'center',
    textAlign:'center',
    width:'100%',
    fontFamily: "Poppins_400Regular",
    fontSize:20,
    marginTop:0,
  },
  labelcost: {
    flex:1,
    color: "#fff",
    backgroundColor:'#e0bcdd',
    textAlignVertical:'center',
    textAlign:'center',
    width:'100%',
    fontFamily: "Poppins_400Regular",
    fontSize:23,
    marginTop:0,
  }, 
  labellocalbuy: {
    flex:1,
    color: "#fff",
    backgroundColor:'#cf9bcc',
    textAlignVertical:'center',
    textAlign:'center',
    width:'100%',
    fontFamily: "Poppins_400Regular",
    fontSize:18,
    marginTop:0,
  },
  
  imgExistProduct: {
    flex:1,
    marginLeft:20,
    width: '80%',
    marginTop:20,
    marginBottom:20,
    position:'relative',
    margin:'auto',
    borderRadius: 80,
  },
  emoji:{
    flex:1,
    top:10,
    width:95,
    height:100,
    transform: [{rotate:'30deg'}],
  },
  emojiText:{
    fontSize:33,
    position:'absolute',
    bottom:-20,
    left:30,
    fontWeight:'700',
    color:'#8257E5',

  },
  infoConteiner:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    width:'100%',
    
  },
  left:{
    width:'50%',
    backgroundColor:'#ac58aa',
  },
  right:{
    marginBottom:20,
    width:'50%',
    alignItems:'center',
    justifyContent:'center',
  },
  shitemoji:{
    top:30,
width:'40%',
height:'40%',
resizeMode:'contain',
  },
  shitWiew:{
  flex:1,
    alignItems:'center',
    justifyContent:'center',
    top:0,
  },
  shitText:{
    top:0,
    textAlign:'center',
  },

});

export default styles;
