import ThemedButton from '@/components/ThemedButton';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/Colors';

export default function ChooseLogin() {
  return (
    <View style={styles.view}>
        <View style={styles.textGroup}>
            <Text style={styles.title}>Login with...</Text>
            <Text style={styles.paragraph}>This lets you access your account across any device or web browser!</Text>
        </View>
        <View style={styles.buttonGroup}>
            <ThemedButton text="LinkedIn" type="fill"/>
            <ThemedButton text="Apple"  type="outline"/>
            <ThemedButton text="Google" type="outline"/>
            <ThemedButton text="OTP" path="/otp-info" type="outline"/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: Dimensions.get('window').height, 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    gap: 100,
  },
  buttonGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 13,
    width: '100%',
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
    color: colors.darkBlue,
  },
  paragraph: {
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    textAlign: 'center',
  }
});