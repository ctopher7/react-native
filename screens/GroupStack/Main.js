import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import HeaderOptions from '../../utils/HeaderOptions'
import {NavigatePush} from '../../utils/Navigate'

MainScreen= (props)=>{
  return(
  <View style = {[StyleSheet.absoluteFill,{justifyContent:"center",alignItems:'center'}]}>
    {Title()}
  </View>)
}

MainScreen.options=()=>HeaderOptions({title:'Group'})

const Title=()=><Text>This is main group screen</Text>


export default MainScreen