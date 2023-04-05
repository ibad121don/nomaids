import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'

import styles from './styles'
import BTN from '../../assets/components/btn'

import PhoneInput from "react-native-phone-number-input";
import { COLOR } from '../../assets/enum/styleGuide';
import SocialBtn from '../../assets/components/soicalBtn';

export default function Login() {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  return (
    <SafeAreaView style={styles.flexContainer}>
      <View style={styles.imageCard}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      </View>
      <View style={{ padding: 20 }}>

        <View style={styles.maincard}>
          <Image source={require('../../assets/images/loginSignup.png')} style={styles.loginSinup} />

          <Text style={styles.headerText}>
            Enter your phone number to Login / Signup
          </Text>
        </View>


        <View style={styles.input} >
          <Text style={styles.phoneText}>
            Phone Number
          </Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            textContainerStyle={{ backgroundColor: 'transparent' }}
            containerStyle={styles.inputCard}
          />
        </View>
        <BTN
          title={'Continue'}
          textStyle={styles.textbtn}
        />
        <Text style={[styles.headerText1]}>
          By using Grocbay, you agree to the
          <Text style={{ color: COLOR.black }}> Terms </Text>
          &
          <Text style={{ color: COLOR.black }}>
            {' '} Conditions
          </Text>
        </Text>
        <View style={styles.orView}>
          <Text style={styles.or}>
            Or
          </Text>
        </View>
        <SocialBtn
          svg={
            <Image source={require('../../assets/images/googleicon.png')} style={{ width: 25, height: 25 }} />
          }
          title={'Continue with Google'}
        />
     <SocialBtn
          svg={
            <Image source={require('../../assets/images/facbook.png')} style={{ width: 25, height: 25 }} />
          }
          title={'Continue with Facebook'}
        />
             <SocialBtn
          svg={
            <Image source={require('../../assets/images/apple.png')} style={{ width: 25, height: 25 }} />
          }
          title={'Continue with Apple'}
        />

      </View>

    </SafeAreaView>
  )
}