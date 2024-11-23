import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as colors from '../colors'
import "../globals.css";

export default function LoginLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="otp"/>
    </Stack>
  );
}
