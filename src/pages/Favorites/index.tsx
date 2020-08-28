import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import VineItem, { Vinelist } from "../../components/VineItem";

import {
  ScrollView,
  RectButton,
} from "react-native-gesture-handler";

let cont=0;
function Favorites() {
  const [isFavorited, setIsFavorited] = useState<any[]>([]);

  async function handleToggleFavorite() {
    const vines = await AsyncStorage.getItem("aekjgfheirjgheirjghweirhg4");
    let favoritesArray: Array<any> = [];
    let top5: Array<any> = [];

    if (vines) {
      favoritesArray = JSON.parse(vines);
     // console.log(favoritesArray);
     // console.log(favoritesArray.sort(compare));
     favoritesArray.sort(compare)
     favoritesArray.map((vinelist: Vinelist) => {
      if(vinelist.imgVine!="" )
      cont++;
      if(cont<=5){
        if(vinelist.imgVine!="" )
           top5.push(vinelist);

         }    })
      
      setIsFavorited(top5);
    }
  }
  useEffect(() => {
    (async () => {
      handleToggleFavorite();
    })();
  }, []);

  function compare(a, b) {
    const bandA = a.feedback;
    const bandB = b.feedback;
    
    let comparison = 0;
    if (bandA < bandB) {
      comparison = 1;
    } else if (bandA > bandB) {
      comparison = -1;
    }
    return comparison;
  }
  return (
    <View style={styles.container}>
      <PageHeader
        title="Lista dos Vinhos Comprados"
        //headerRight={
          //<BorderlessButton onPress={handleToggleFiltersVisible}>
            //<Feather name="filter" size={20} color="#FFF" />
          //</BorderlessButton>
       // }
      >
        
      </PageHeader>

      <ScrollView
        style={styles.VineListPage}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
       
        {isFavorited.map((vinelist: Vinelist,index) => (
          <View key={index}>
          <VineItem
            key={index}
            vinelist={vinelist}
             />

          
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
export default Favorites;
