import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import VineItem, { Vinelist } from "../../components/VineItem";

import {ScrollView} from "react-native-gesture-handler";

function VineListPage() {
  const [isFavorited, setIsFavorited] = useState<any[]>([]);

  async function handleToggleFavorite() {
    const vines = await AsyncStorage.getItem("aekjgfheirjgheirjghweirhg4");
    let favoritesArray: Array<any> = [];
    if (vines) {
      favoritesArray = JSON.parse(vines);
      setIsFavorited(favoritesArray);
    }
  }

  useEffect(() => {
    (async () => {
      handleToggleFavorite();
    })();
  }, []);


  return (
    <View style={styles.container}>
      <PageHeader title="Lista dos Vinhos Comprados">
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
            {vinelist.imgVine!="" ?
          <VineItem
            key={index}
            vinelist={vinelist}
             />:<View></View>}
          
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default VineListPage;
