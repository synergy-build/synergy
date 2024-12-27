import { Stack } from "expo-router";
import "../globals.css";

export default function LoginLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="otp-info"/>
      <Stack.Screen name="otp-entry"/>
      <Stack.Screen name="resume-upload"/>
    </Stack>
  );
}
