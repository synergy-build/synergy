import { Stack } from "expo-router";
import "./globals.css";
import testBackendConnection from "@/utils/testBackendConnection";
import { useEffect } from "react";

export default function RootLayout() {
  // useEffect(() => {
  //   // Call backend connection test on mount
  //   testBackendConnection();
  // }, []);

  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(login)" />
    </Stack>
  );
}
