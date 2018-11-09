import React from 'react';
import Inputs from './components/Inputs'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import LoopAnimation from 'react-native-LoopAnimation'

const App = () => {
  const imgSource = {
    uri: 'http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg',
    width: 700,
    height: 306
  }
  return (
    <View>
      <SafeAreaView>
        <LoopAnimation 
          source={imgSource}
          duration={10000}
        />
        <Inputs style={styles.loginView}/>
      </SafeAreaView>
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginView: {
    marginTop: 50
  }
});
