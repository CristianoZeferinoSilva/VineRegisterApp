import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import PageHeader from '../../components/PageHeader';
import styles from "./styles";


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
  const emojisname = { worriedName, sadName,smileName,ambitiousName, surprisedName};
  const emojis = { worried, sad,smile,ambitious, surprised};
  const [selected, setSelected] = useState(emojis.sad)
  const [selectedName, setSelectedName] = useState(emojisname.worriedName)
  

  useEffect(() => {
    (async () => {
      if(infoExisteProduct[0].feedback =="0"){
        setSelected(emojis.worried);
        setSelectedName(emojisname.worriedName);}
         if(infoExisteProduct[0].feedback =="60"){
        setSelected(emojis.sad);
         setSelectedName(emojisname.sadName);}
          if(infoExisteProduct[0].feedback =="120"){
          setSelected(emojis.smile);
          setSelectedName(emojisname.smileName);}
           if(infoExisteProduct[0].feedback =="180"){
           setSelected(emojis.ambitious);
           setSelectedName(emojisname.ambitiousName);}
          if(infoExisteProduct[0].feedback =="240"){
          setSelected(emojis.surprised);
          setSelectedName(emojisname.surprisedName);}
    })();
  }, []);
    
   

      
  

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
      {infoExisteProduct[0].imgVine ?
     <View style={styles.infoConteiner}>
     
       <View style={styles.left}>
         <Image  source={{ uri:infoExisteProduct[0].imgVine}} style={styles.imgExistProduct} />
       </View>
        <View style={styles.right}>
          
         <Text style={styles.labelname}>{infoExisteProduct[0].name}</Text>
         <Text style={styles.labellocalbuy}>{infoExisteProduct[0].localbuy}</Text>
         <Text style={styles.labelcost}>Preço {infoExisteProduct[0].cost}€</Text>
         <Image  source={selected}style={styles.emoji} />
         <Text style={styles.emojiText}> {selectedName}</Text>
         
        </View>
     </View>:<View style={styles.shitWiew}><Text style={styles.shitText}>Era mesmo uma merda para teres apagado xD</Text><Image  source={worried}style={styles.shitemoji} /></View>}
   </View>
  );
}

export default VineForm;
