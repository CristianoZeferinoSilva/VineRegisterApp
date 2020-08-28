import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

import landingImg from "../../assets/images/Vine.jpg";
import heartIcon from "../../assets/images/icons/heart.png";
import Ionicons from  '@expo/vector-icons/build/Ionicons';


function Landing() {
  const { navigate } = useNavigation();

 
  function handleNavigateToScanPage() {
    navigate("ScanPage");
  }

  function handleNavigationToVinePages() {
    navigate("Vine");
  }

  return (
    <View style={styles.container}>
      <Image  source={landingImg} style={styles.bannere} />

      <Text style={styles.title}>
        Bem-vindo Rodrigo, {"\n"}
        <Text style={styles.titleBold}>O que desejas fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigationToVinePages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Ionicons name={"ios-book"} size={42} color={"#fff"} />
          <Text style={styles.buttonText}>Consultar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToScanPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Ionicons name={"ios-barcode"} size={42} color={"#fff"} />
          <Text style={styles.buttonText}>Registar</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
      COPYRIGHT© 2020 / DESENVOLVIDO POR{"  "}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
