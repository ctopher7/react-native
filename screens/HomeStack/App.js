import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import HeaderOptions from '../../utils/HeaderOptions'
import {NavigatePush} from '../../utils/Navigate'

export default class MainScreen extends React.PureComponent{
  static options=()=>HeaderOptions({title:'MAIN'})

  render(){
    return(<View style = {[StyleSheet.absoluteFill,{justifyContent:"center",alignItems:'center'}]}>
      {Button({component:this})}
    </View>)
  }
};

const Button=()=>{
  <TouchableOpacity onPress={()=>NavigatePush(component.props.componentId,'HomeStack.Detail')}>
    <Text>This is main screen</Text>
  </TouchableOpacity>
}