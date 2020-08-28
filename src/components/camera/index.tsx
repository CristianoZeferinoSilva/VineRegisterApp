import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity,ToastAndroid } from "react-native";
import { Camera } from 'expo-camera';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";




const CameraComponent  = () => {
  const [data, setData] = useState("");
  const { navigate } = useNavigation();
 

  //setInterval( () =>{}, 1000);
  
  let camera;
  async function takePicture(){
    if( camera ) {
      ToastAndroid.showWithGravity(
        "Capturando a Foto",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      const options = {quality: 0.5};
      const data = await camera.takePictureAsync(options);
      setData(data.uri);
      navigate("VineForm", {
        imgVine: data.uri,
        imgWidth: data.width,
        imgHeight: data.height,
      });
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={ref => (camera = ref)} style={{ flex: 1 }} type={data} >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent:'center',
            alignContent:'center',
            borderLeftColor:'#8257e5',
            borderLeftWidth:6,
            marginLeft:60,
            borderRightColor:'#8257e5',
            borderRightWidth:6,
            marginRight:60,
            marginTop:30,
            marginBottom:30,

          }}>

<Text style={{ textAlign:'center', fontSize: 20, marginTop: 10, color: 'white' }}>Coloca o vinho entre as duas barras para tirar a Fotografia</Text>
          <TouchableOpacity
            style={{
              flex: 0.1,
              bottom:10,
              width:100,
              height:100,
              borderRadius:80,
              position:'absolute',
              backgroundColor:'#8257e5',
              justifyContent:'center',
               alignContent:'center',
            }}
            onPress={() => {
              takePicture();
            }}>
            <Text style={{marginTop:5, marginLeft:25 ,  fontSize: 20, marginBottom: 10, color: 'white' }}> Click </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
export default CameraComponent;
