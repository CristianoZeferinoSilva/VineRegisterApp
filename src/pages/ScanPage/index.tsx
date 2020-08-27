import React ,{useState,useEffect}from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import AsyncStorage from "@react-native-community/async-storage";

import ScanPageBgImage from '../../assets/images/give-classes-background.png';
import { Vinelist } from "../../components/VineItem";
import PageHeader from "../../components/PageHeader";
import styles from './styles';

function ScanPage() {
    const { goBack } = useNavigation();
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [scanned, setScanned] = useState<any>(false);
    const { navigate } = useNavigation();
    const [passvinevalues, setPassVineValues] = useState<any[]>([]);
    let checked= false;
  
   
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
     const handleBarCodeScanned = async ({ type, data }) => {
      setScanned(true);
      //console.log(passvinevalues);

       const favorites = await AsyncStorage.getItem("sjvherkvjervkwe");
       let favoritesArray: Array<any> = [];
       let favoay: Array<any> = [];
       if (favorites) {
         favoritesArray = JSON.parse(favorites);
       favoritesArray.map((vinelist: Vinelist,index) => {
         if(vinelist.barcodevalue===data){
           setPassVineValues({imgVine:vinelist.imgVine,name:vinelist.name,cost:vinelist.cost,feedback:vinelist.feedback,localbuy:vinelist.localbuy});
           checked= true;}
         })
       }
       hasPermission ? navigate("VineForm", {
        barcodevalue: data,
      }) :navigate("ExistingProduct", {
        infoExisteProduct: passvinevalues,
      });
      //setScanned(false);
    };
  
   
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    

    function handleNavigateBack() {
        goBack();
    }

  
    return (
<>
        <PageHeader  title="Aponte para o código de barras" ></PageHeader>
        <View style={styles.container}>
           
            <ImageBackground
                resizeMode="contain"
                source={ScanPageBgImage}
                style={styles.content}
            >
          <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
           
      <BarCodeScanner
        onBarCodeScanned={scanned ? null : handleBarCodeScanned}
        style={styles.barcodecontainer}
      />

    </View>
 
            </ImageBackground>

        </View>
        </>
    )
}

export default ScanPage;