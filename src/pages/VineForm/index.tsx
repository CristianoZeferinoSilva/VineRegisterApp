import React, { useState, useEffect } from "react";
import { View, Text, TextInput,Image,ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Camera } from 'expo-camera';

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import {
  ScrollView,
  RectButton,
} from "react-native-gesture-handler";

import photoimgbg from '../../assets/images/photo.png';


export interface Vine {
  name: string;
  localbuy: string;
  cost: string;
  feedback: number;
  barcode: string;
  index:number;
  imgVine:string;
  imgWidth:number;
  imgHeight:number;
}

interface VineProps {
  vine: Vine;
  favorited: boolean;
  route:any;
}


const VineForm :React.FC<VineProps> = ({  route  }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const { navigate } = useNavigation();
  const [pictureImg,setPictureImg] = useState(null);

  const [name, setName] = useState("");
  const [localbuy, setLocalBuy] = useState("");
  const [cost, setCost] = useState("");
  const [feedback, setFeedback] = useState("120"); 
 

  useEffect(() => {
    const {imgVine} = route.params;
  if(imgVine != null)
    setPictureImg(imgVine);
  });
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    
    })();
  }, []);



  
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  async function HandleFormRegistration() {
    ToastAndroid.showWithGravity(
      "Guardando o Registo",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    const vines = await AsyncStorage.getItem("sjvherkvjervkwe");
    let favoritesArray: Array<any> = [];
    const {barcodevalue,imgVine,imgWidth,imgHeight} = route.params;
    setPictureImg(imgVine);
    if (vines) {
      favoritesArray = JSON.parse(vines);
      let index =favoritesArray.length; 
      favoritesArray.push({name,localbuy,cost,barcodevalue,feedback,index,imgVine,imgWidth,imgHeight});
      await AsyncStorage.setItem("sjvherkvjervkwe", JSON.stringify(favoritesArray));
      ToastAndroid.showWithGravity(
        "Guardando com Sucesso",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      navigate("Landing");
    }if (!vines){
      let index =favoritesArray.length; 
      favoritesArray.push({name,localbuy,cost,barcodevalue,feedback,index,imgVine,imgWidth,imgHeight});
      await AsyncStorage.setItem("sjvherkvjervkwe", JSON.stringify(favoritesArray));
      ToastAndroid.showWithGravity(
        "Guardando com Sucesso",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      navigate("Landing");
    }
  }



  function handleCamera(){
    navigate("CameraComponent");
  }



  return (
    <View style={styles.container}>
      <ScrollView>
      <PageHeader title="Registo do Vinho">
      
          <View style={styles.searchForm}>
            <Text style={styles.label}>Nome do Vinho:</Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Nome"
            />

              <View style={styles.searchForm}>
                <Text style={styles.label}>Local da Compra:</Text>
                <TextInput
                  value={localbuy}
                  onChangeText={(text) => setLocalBuy(text)}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Onde comprou?"
                />
              </View>

              <View style={styles.searchForm}>
                <Text style={styles.label}>Preço do Vinho:</Text>
                <TextInput
                  value={cost}
                  onChangeText={(text) => setCost(text)}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Preço"
                  keyboardType={'numeric'}
                />
              </View>
              <View style={styles.searchForm}>
                <Text style={styles.label}>Código de Barras</Text>
                <TextInput
                  value={route.params.barcodevalue} 
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  editable={false}
                />
              </View>
              <RectButton
              onPress={handleCamera}
              style={styles.photoButton}
               >
                 {pictureImg == null ? <Image  source={photoimgbg} style={styles.photo} /> :
                  <Image source={{
          uri:pictureImg}} style={styles.photoTaked} />}
                
                </RectButton>
            <RectButton
              onPress={HandleFormRegistration}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Guardar</Text>
              </RectButton>
          </View>
          </PageHeader>
      </ScrollView>
      

    </View>
  );
}

export default VineForm;
