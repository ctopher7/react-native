import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import HeaderOptions from '../../utils/HeaderOptions'
import {NavigatePush} from '../../utils/Navigate'

MainScreen= (props)=>{
  return(
  <View style = {[StyleSheet.absoluteFill,{justifyContent:"center",alignItems:'center'}]}>
    {Button({props})}
  </View>)
}

MainScreen.options=()=>HeaderOptions({title:'Home'})

const Button=({props})=>
<TouchableOpacity onPress={()=>NavigatePush(props.componentId,'HomeStack.Detail')}>
  <Text>This is main home screen</Text>
</TouchableOpacity>


export default MainScreen