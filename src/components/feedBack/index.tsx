import React from 'react';
import { PixelRatio, StyleSheet, Text, View, PanResponder, Animated, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Vinelist } from "../../components/VineItem";
const REACTIONS = [
  { label: "Péssimo", src: require('./assets/worried.png'), bigSrc: require('./assets/worried_big.png') },
  { label: "Mau", src: require('./assets/sad.png'), bigSrc: require('./assets/sad_big.png') },
  { label: "Normal", src: require('./assets/smile.png'), bigSrc: require('./assets/smile_big.png') },
  { label: "Bom", src: require('./assets/ambitious.png'), bigSrc: require('./assets/ambitious_big.png') },
  { label: "Woow", src: require('./assets/surprised.png'), bigSrc: require('./assets/surprised_big.png') },
];
const WIDTH = 300;
const DISTANCE =  WIDTH / REACTIONS.length;
const END = WIDTH - DISTANCE;
let offset=0;
interface Valorfeed {
  itemvalue: number;
  indexvalue:number;
}

const FeedBack : React.FC<Valorfeed> = ({ itemvalue,indexvalue }) => {

let _pan = new Animated.Value(2 * DISTANCE);
let _panResponder;
//let feed ;

async function handleToggleFavorite(toValue) {
  const favorites = await AsyncStorage.getItem("sjvherkvjervkwe");
  let favoritesArray: Array<any> = [];
  if (favorites) {
    favoritesArray = JSON.parse(favorites);
    favoritesArray.map((vinelist: Vinelist,index) => {
      
     if(index === indexvalue){
      vinelist.feedback=toValue;
     }
     
    })
   await AsyncStorage.setItem("sjvherkvjervkwe", JSON.stringify(favoritesArray));
    
}

}

  function updatePan(toValue) {
   // console.log(toValue);
    handleToggleFavorite(toValue);
    Animated.spring(_pan, { toValue, friction: 7,useNativeDriver: true}).start();
    
  }
  UNSAFE_componentWillMount();
 // updatePan(itemvalue);
  function UNSAFE_componentWillMount() {
    _panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        _pan.setOffset(_pan._value);
        _pan.setValue(0);
      },
      
    });
  }

  updatePan(parseFloat(itemvalue.toString()));
    
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <View style={styles.line} />

          <View style={styles.reactions}>
            {REACTIONS.map((reaction, idx) => {
              const u = idx * DISTANCE;
              let inputRange = [u-20, u, u+20];
              let scaleOutputRange = [1, 0.25, 1];
              let topOutputRange = [0, 10, 0];
              let colorOutputRange = ['#999', '#222', '#999'];

              if (u-20 < 0) {
                inputRange = [u, u+20];
                scaleOutputRange = [0.25, 1];
                topOutputRange = [10, 0];
                colorOutputRange = ['#222', '#999'];
              }

              if (u+20 > END) {
                inputRange = [u-20, u];
                scaleOutputRange = [1, 0.25];
                topOutputRange = [0, 10];
                colorOutputRange = ['#999', '#222'];
              }


              return (
                <TouchableOpacity onPress={() => updatePan(u)} activeOpacity={0.9} key={idx}>
                  <View style={styles.smileyWrap}>
                    <Animated.Image
                      source={reaction.src}
                      style={[styles.smiley, {
                        transform: [{
                          scale: _pan.interpolate({
                            inputRange,
                            outputRange: scaleOutputRange,
                            extrapolate: 'clamp',
                          })
                        }]
                      }]}
                    />
                  </View>

                  <Animated.Text style={[styles.reactionText, {
                    
                  
                  }]}>
                    {reaction.label}
                  </Animated.Text>
                </TouchableOpacity>
              );
            })}
            <Animated.View {..._panResponder.panHandlers} style={[styles.bigSmiley, {
              transform: [{
                translateX: _pan.interpolate({
                  inputRange: [0, END],
                  outputRange: [0, END],
                  extrapolate: 'clamp',
                })
              }]
            }]}>
              {REACTIONS.map((reaction, idx) => {
                let inputRange = [(idx-1)*DISTANCE, idx*DISTANCE, (idx+1)*DISTANCE];
                let outputRange = [0, 1, 0];

                if (idx == 0) {
                  inputRange = [idx*DISTANCE, (idx+1)*DISTANCE];
                  outputRange = [1, 0];
                }

                if (idx == REACTIONS.length - 1) {
                  inputRange = [(idx-1)*DISTANCE, idx*DISTANCE];
                  outputRange = [0, 1];
                }
                return (
                  <Animated.Image
                    key={idx}
                    source={reaction.bigSrc}
                    style={[styles.bigSmileyImage, {
                      opacity: _pan.interpolate({
                        inputRange,
                        outputRange,
                        extrapolate: 'clamp',
                      })
                    }]}
                  />
                );
              })}
            </Animated.View>
          </View>
        </View>
      </View>
    );
  }


const size = 42;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  wrap: {
    width: WIDTH,
    marginBottom: 50,
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    color: '#777',
    fontWeight: '600',
    fontFamily: 'Roboto',
    marginBottom: 50,
  },
  reactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  smileyWrap: {
    width: DISTANCE,
    height: DISTANCE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smiley: {
    width: size,
    height: size,
    borderRadius: size/2,
    backgroundColor: '#c7ced3',
  },
  bigSmiley: {
    width: DISTANCE,
    height: DISTANCE,
    borderRadius: DISTANCE/2,
    backgroundColor: '#ffb18d',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bigSmileyImage: {
    width: DISTANCE,
    height: DISTANCE,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  reactionText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#999',
    fontWeight: '400',
    fontFamily: 'Roboto',
    marginTop: 5,
  },
  line: {
    height: 4 / PixelRatio.get(),
    backgroundColor: '#eee',
    width: WIDTH - (DISTANCE-size),
    left: (DISTANCE-size) / 2,
    top: DISTANCE/2 + (2 / PixelRatio.get()),
  }
});
export default FeedBack;