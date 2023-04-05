import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR, wp } from '../enum/styleGuide'

export default function BTN(props) {
  return (
    <TouchableOpacity style={[props.style,styles.mainCard]}>
      <Text style={[props.textStyle,{color:COLOR.white}]}>{
        props?.title
      }</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    mainCard:{
width:wp(90),
height:50,
justifyContent:'center',
alignItems:'center',
backgroundColor:COLOR.blue,borderRadius:10
    }
})