import { Image, StyleSheet, Platform, View, StatusBar, Text, Pressable, TextInput } from 'react-native';
import React, {useState} from 'react';
import * as colors from '../colors';
import { Link } from 'expo-router';

export default function OTPInfo() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  return (
    <View style={styles.view}>
      {/* text */}
      <View style={styles.textGroup}>
        <Text style={styles.title} >Sign-in with OTP</Text>
        <Text style={styles.paragraph}>You'll receive a 6-digit code in your text messages. Enter this code on the next screen.</Text>
      </View>
    
      <View style={styles.otpInputs}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Your Name</Text>
          <TextInput 
            style={styles.inputEntry} 
            onChangeText={(nameInput) => {setName(nameInput)}} 
            value={name} 
            placeholder="Jane Doe"
            cursorColor={colors.purple}
            autoFocus={true}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Your Name</Text>
          <TextInput 
            style={styles.inputEntry} 
            onChangeText={(numberInput) => {setNumber(numberInput)}} 
            value={number} 
            inputMode='tel'
            placeholder="(111) 222 3333"
            cursorColor={colors.purple}
          />
        </View>

      </View>

      {/* back & next buttons */}
      <View style={styles.navigationButtonGroup}>
        <Link href="/" asChild>
            <Pressable style={{paddingHorizontal: 14, paddingVertical: 10}}>
                <Text style={{color: colors.purple, fontFamily: 'Inter-Regular', fontSize: 16, textAlign: 'center',}}>Back</Text>
            </Pressable>
        </Link>
        <Link href="otp-entry" asChild>
            <Pressable style={{borderRadius: 14, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: colors.purple,}}>
                <Text style={{color: 'white', fontFamily: 'Inter-Regular', fontSize: 16, textAlign: 'center',}}>Next</Text>
            </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: '100vh',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    gap: 60,
  },
  navigationButtonGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  textGroup: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontFamily: 'Epilogue-SemiBold',
    fontSize: 32,
    fontWeight: 'semibold',
    textAlign: 'center',
    color: colors.darkblue,
  },
  paragraph: {
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  otpInputs: {
    gap: 20,
  },
  input: {
    gap: 5,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  inputLabel: {
    color: colors.black,
    fontFamily: 'Inter-Regular',
  },
  inputEntry: {
    backgroundColor: 'white',
    width: 'auto',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.darkgray,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  }
});