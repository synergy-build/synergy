import { OtpInput } from "react-native-otp-entry";
import { Image, StyleSheet, Platform, View, StatusBar, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import * as colors from '../colors';


export default function OTPEntry() {
  return (
    <View style={styles.view}>
      <View style={styles.textGroup}>
        <Text style={styles.title} >Enter OTP</Text>
        <Text style={styles.paragraph}>Enter the 6-digit code you received in your text messages. It expires in 30 minutes.</Text>
      </View>
      <OtpInput style={{backgroundColor:colors.darkpurple}}
        numberOfDigits={6} 
        focusColor={colors.purple}
        onTextChange={(text) => console.log(text)}
        onFilled={(text) => console.log(`OTP is ${text}`)}
        textInputProps={{
          accessibilityLabel: "One-Time Password",
        }}
        theme={{
          containerStyle: styles.otpContainer,
          pinCodeContainerStyle: styles.pinCodeContainer,
        }}
      />
      {/* back & next buttons */}
      <View style={styles.navigationButtonGroup}>
        <Link href="otp-info" asChild>
            <Pressable style={{paddingHorizontal: 14, paddingVertical: 10}}>
                <Text style={{color: colors.purple, fontFamily: 'Inter-Regular', fontSize: 16, textAlign: 'center',}}>Back</Text>
            </Pressable>
        </Link>
        <Link href="resume-upload" asChild>
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
  otpContainer: {
    position: 'relative',
  },
  pinCodeContainer: {
    backgroundColor: 'white',
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
  navigationButtonGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});