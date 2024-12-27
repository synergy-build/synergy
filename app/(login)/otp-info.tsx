import KeyboardWrapper from "@/components/KeyboardWrapper";
import { colors } from "@/constants/Colors";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default function OTPInfo() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [focusedInput, setFocusedInput] = useState<string | null>(null); // Track which input is focused

  const formatPhoneNumberForDisplay = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (!match) return value;

    const part1 = match[1] ? `(${match[1]}` : ""; // First group: (XXX
    const part2 = match[2] ? `) ${match[2]}` : ""; // Second group: ) XXX
    const part3 = match[3] ? `-${match[3]}` : ""; // Third group: -XXXX

    return `${part1}${part2}${part3}`.trim();
  };

  return (
    <KeyboardWrapper>
      <View style={styles.container}>
        {/* text */}
        <View style={styles.textGroup}>
          <Text style={styles.title}>Sign-in with OTP</Text>
          <Text style={styles.paragraph}>
            You'll receive a 6-digit code in your text messages. Enter this code
            on the next screen.
          </Text>
        </View>

        <View style={styles.otpInputs}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Your Name</Text>
            <TextInput
              style={[
                styles.inputEntry,
                focusedInput === "name" && styles.focusedInput, // Highlight when focused
              ]}
              onFocus={() => setFocusedInput("name")}
              onBlur={() => setFocusedInput(null)}
              onChangeText={(nameInput) => setName(nameInput)}
              value={name}
              placeholder="Jane Doe"
              cursorColor={colors.purple}
              autoFocus={true}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={[
                styles.inputEntry,
                focusedInput === "number" && styles.focusedInput, // Highlight when focused
              ]}
              onFocus={() => setFocusedInput("number")}
              onBlur={() => setFocusedInput(null)}
              onChangeText={(numberInput) => {
                const cleaned = numberInput.replace(/\D/g, ""); // Remove non-numeric characters
                setNumber(numberInput)
              }}
              value={formatPhoneNumberForDisplay(number)}
              inputMode="tel"
              placeholder="(111) 222 3333"
              maxLength={14}
              cursorColor={colors.purple}
            />
          </View>
        </View>

        {/* back & next buttons */}
        <View style={styles.navigationButtonGroup}>
          <Link href={{ pathname: "/" }} asChild>
            <Pressable style={{ paddingHorizontal: 14, paddingVertical: 10 }}>
              <Text
                style={{
                  color: colors.purple,
                  fontFamily: "Inter-Regular",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Back
              </Text>
            </Pressable>
          </Link>
          <Link href={{ pathname: "/otp-entry" }} asChild>
            <Pressable
              style={{
                borderRadius: 14,
                paddingHorizontal: 14,
                paddingVertical: 10,
                backgroundColor: colors.purple,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Inter-Regular",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Next
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </KeyboardWrapper>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "10%",
    gap: 60,
  },
  navigationButtonGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  textGroup: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontFamily: "Epilogue-SemiBold",
    fontSize: 32,
    fontWeight: "semibold",
    textAlign: "center",
    color: colors.darkBlue,
  },
  paragraph: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    textAlign: "center",
  },
  otpInputs: {
    gap: 20,
    width: "100%",
  },
  input: {
    gap: 5,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  inputLabel: {
    color: colors.black,
    fontFamily: "Inter-Regular",
  },
  inputEntry: {
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.darkGray,
    fontFamily: "Inter-Regular",
    fontSize: 16,
  },
  focusedInput: {
    borderColor: colors.purple,
    borderWidth: 1.5, // Thicker border when focused
  },
});
