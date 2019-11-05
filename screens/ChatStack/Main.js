import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import HeaderOptions from '../../utils/HeaderOptions'

MainScreen= (props)=>{
  return(
  <View style = {[StyleSheet.absoluteFill,{justifyContent:"center",alignItems:'center'}]}>
    {Title()}
  </View>)
}

MainScreen.options=()=>HeaderOptions({title:'Chat'})

const Title=()=><Text>This is main chat screen</Text>


export default MainScreen