import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import HeaderOptions from '../../utils/HeaderOptions'

MainScreen= (props)=>{
  return(
  <View style = {[StyleSheet.absoluteFill,{justifyContent:"center",alignItems:'center'}]}>
    {Title()}
  </View>)
}

MainScreen.options=()=>HeaderOptions({title:'Profile'})

const Title=()=><Text>This is main profile screen</Text>


export default MainScreen