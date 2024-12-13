import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';

import "./globals.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(login)" />
    </Stack>
  );
}
