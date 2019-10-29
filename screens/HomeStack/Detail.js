import React from 'react';
import {View,Text} from 'react-native';
import HeaderOptions from '../../utils/HeaderOptions'

export default class Detail extends React.PureComponent{
  static options=()=>HeaderOptions({title:'Detail'})
  render(){
    return(<View>
      <Text>This is detail screen</Text>
    </View>)
  }
};