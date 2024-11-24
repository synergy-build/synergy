import { Image, StyleSheet, Platform, View, StatusBar, Text, Pressable, TextInput } from 'react-native';
import React, {useState} from 'react';
import * as colors from '../colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import ThemedButton from '@/components/ThemedButton'

export default function ResumeUpload() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  return (
    <View style={styles.view}>
      {/* text */}
      <View style={styles.textGroup}>
        <Ionicons name="document-text" size={70} color={colors.darkgray} />
        <Text style={styles.title} >Upload Resume</Text>
        <Text style={styles.paragraph}>We saved your login, now you can fill out your profile with your experience!</Text>
      </View>

      <View style={styles.buttonGroup}>
          <ThemedButton text="Auto-fill with Resume" type="fill"/>
          <ThemedButton text="Manually Fill"  type="outline"/>
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
  buttonGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});