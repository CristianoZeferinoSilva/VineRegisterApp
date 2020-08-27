import React, { useState, useEffect } from "react";
import { View, Image, Text, Linking } from "react-native";


import FeedBack from "../feedBack";
import styles from "./styles";



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
}

const VineItem: React.FC<VinelistItemProps> = ({ vinelist }) => {
  return (
    <View style={styles.container}>
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
