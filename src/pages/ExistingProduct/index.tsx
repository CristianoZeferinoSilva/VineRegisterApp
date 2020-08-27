import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import PageHeader from '../../components/PageHeader';
import styles from "./styles";

export interface Vine {
  name: string;
  localbuy: string;
  cost: string;
  feedback: number;
  barcode: string;
}


interface ExistingVine {
  vinelist: Vine;
  route:any;
}
const VineForm :React.FC<ExistingVine> = ({ route }) => {
  const { infoExisteProduct } =  route.params;
  const worried = require('../../components/feedBack/assets/worried_big.png')
  const sad = require('../../components/feedBack/assets/sad_big.png');
  const smile =require('../../components/feedBack/assets/smile_big.png');
  const ambitious = require('../../components/feedBack/assets/ambitious_big.png');
  const surprised =require('../../components/feedBack/assets/surprised_big.png');

  const worriedName ="Péssimo";
  const sadName ="Mau";
  const smileName ="Normal";
  const ambitiousName ="Bom";
  const surprisedName="Woow";
  const emojisname = { worriedName, sadName,smileName,ambitiousName, surprisedName};
  const emojis = { worried, sad,smile,ambitious, surprised};
  const [selected, setSelected] = useState(emojis.sad)
  const [selectedName, setSelectedName] = useState(emojisname.worriedName)
  

   function check(){
    (async () => {
    if(infoExisteProduct.feedback =="0"){
      setSelected(emojis.worried);
      setSelectedName(emojisname.worriedName);}
       if(infoExisteProduct.feedback =="60"){
       setSelected(emojis.sad);
       setSelectedName(emojisname.sadName);}
        if(infoExisteProduct.feedback =="120"){
        setSelected(emojis.smile);
        setSelectedName(emojisname.smileName);}
         if(infoExisteProduct.feedback =="180"){
         setSelected(emojis.ambitious);
         setSelectedName(emojisname.ambitiousName);}
        if(infoExisteProduct.feedback =="240"){
        setSelected(emojis.surprised);
        setSelectedName(emojisname.surprisedName);}
      })();
  }
check();
  return (
    <View style={styles.container}>
      <PageHeader
        title="Producto Existente"
        //headerRight={
          //<BorderlessButton onPress={handleToggleFiltersVisible}>
            //<Feather name="filter" size={20} color="#FFF" />
          //</BorderlessButton>
       // }
      >
        
      </PageHeader>
     <View style={styles.infoConteiner}>
       <View style={styles.left}>
         <Image  source={{ uri:infoExisteProduct.imgVine}} style={styles.imgExistProduct} />
       </View>
        <View style={styles.right}>
          
         <Text style={styles.labelname}>{infoExisteProduct.name}</Text>
         <Text style={styles.labellocalbuy}>{infoExisteProduct.localbuy}</Text>
         <Text style={styles.labelcost}>Preço {infoExisteProduct.cost}€</Text>
         <Image  source={selected}style={styles.emoji} />
         <Text style={styles.emojiText}> {selectedName}</Text>
         
        </View>
     </View>
   </View>
  );
}

export default VineForm;
