import { StyleSheet, View, Text, Pressable } from 'react-native';
import React, {useState} from 'react';
import * as colors from '@/app/colors';
import { Link } from 'expo-router';

export default function ThemedButton({text, path="/", type, customButtonStyle = {}, customTextStyle = {}}) {
  const buttonStyle = StyleSheet.flatten([
    styles.button, 
    (type == 'fill') ? styles.fillButton : (type == 'outline' ? styles.outlineButton : styles.textButton),
    customButtonStyle
  ]);
  const textStyle = StyleSheet.flatten([
    styles.buttonText, 
    (type == 'fill') ? styles.fillButtonText : (type == 'outline' ? styles.outlineButtonText : styles.textButtonText),
    customTextStyle
  ]);
  const pressedStyle = StyleSheet.flatten([
    buttonStyle,
    styles.buttonPressed
  ]);

  return (
    <Link href={path} asChild>
        <Pressable style={buttonStyle}>
            <Text style={textStyle}>{text}</Text>
        </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 14,
    width: '100%',
    padding: 10,
  },
  buttonText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonPressed: {
    filter: 'brightness(0.7)',
  },

  fillButton: {
    backgroundColor: colors.purple,
  },
  fillButtonText: {
    color: 'white',
  },

  outlineButton : {
    borderColor: colors.purple,
    borderWidth: 1,
  },
  outlineButtonText: {
    color: colors.purple,
  },

  textButton: {
    backgroundColor: 'transparent',
  },
  textButtonText: {
    color: colors.black,
  }
});