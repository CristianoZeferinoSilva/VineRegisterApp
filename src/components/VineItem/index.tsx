import React from "react";
import { View, Image, Text,Button, Alert ,ToastAndroid} from "react-native";
import {RectButton} from "react-native-gesture-handler";
import * as FileSystem from 'expo-file-system';
import AsyncStorage from "@react-native-community/async-storage";
import FeedBack from "../feedBack";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Ionicons from  '@expo/vector-icons/build/Ionicons';



export interface Vinelist {
  name: string;
  localbuy: string;
  cost: string;
  feedback: number;
  barcodevalue: string;
  index:number;
  imgVine:string;
  imgWidth:number;
  imgHeight:number;
}

interface VinelistItemProps {
  vinelist: Vinelist;
  title:string;
}


const VineItem: React.FC<VinelistItemProps> = ({ vinelist ,title}) => {
  const { navigate } = useNavigation();


function handlePressButton(numberindex,vinelist){
  Alert.alert(
    "Apagar "+vinelist.name+" ?",
    "Apagará parte dos dados têm a certeza?",
    [
      {
        text: "Cancelar",
        onPress: () => { 
          ToastAndroid.showWithGravity(
          "Nada foi Apagado",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );},
        style: "cancel"
      },
      { text: "OK", onPress: () => RemoveItem(numberindex) }
    ],
    { cancelable: false }
  );
console.log(vinelist);

}

async function RemoveItem(numberindex){
  const favorites = await AsyncStorage.getItem("aekjgfheirjgheirjghweirhg4");
  let favoritesArray: Array<any> = [];
  if (favorites) {
    favoritesArray = JSON.parse(favorites);
    favoritesArray.map((vinelist: Vinelist,index) => {
      
     if(index === numberindex){
       try{
         FileSystem.deleteAsync(vinelist.imgVine);
       } catch (e) {
         console.error(e);
       }
      vinelist.imgVine="";
      ToastAndroid.showWithGravity(
      "Apagado Com Sucesso",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    navigate("Landing");
     }
     
    })
   
   await AsyncStorage.setItem("aekjgfheirjgheirjghweirhg4", JSON.stringify(favoritesArray));
    
}

}
  return (
    <View style={styles.container}>
      {title==="withButton" ?
      <View style={styles.x}>
       <RectButton style={styles.removeButton} onPress={()=>handlePressButton(vinelist.index,vinelist)}><Ionicons name={"ios-close"} size={42} color={"#8257E5"} /></RectButton>
       </View> : <View></View>}
      <View style={styles.all}>
      <View style={styles.vineimage}>
      <Image  source={{
          uri:vinelist.imgVine}} style={styles.avatar} />
          </View>
      <View style={styles.profile}>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{vinelist.name}</Text>
          <Text style={styles.subject}>{vinelist.localbuy}</Text>
        </View>
      </View>
      
          </View>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço {"   "}
          <Text style={styles.priceValue}>{vinelist.cost} €</Text>
        </Text>
      </View>
      <FeedBack  itemvalue={vinelist.feedback} indexvalue={vinelist.index} />
    </View>
  );
};

export default VineItem;
