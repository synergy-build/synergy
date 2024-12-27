import AsyncStorage from "@react-native-async-storage/async-storage";

// Check if the user is logged in
export const isLoggedIn = async (): Promise<boolean> => {
  try {
    // Retrieve stored login credential
    const loginCredential = await AsyncStorage.getItem("@loginCredential");
    if (loginCredential !== null) {
      // Retrieve stored login expiration date
      const loginExpires = await AsyncStorage.getItem("@loginExpires");
      if (loginExpires !== null) {
        const now = new Date();
        const expiryDate = new Date(loginExpires); // Parse the date directly
        if (expiryDate > now) {
          return true; // Login is valid
        } else {
          console.log("Login expired.");
          await logOut(); // Log out if expired
        }
      } else {
        console.log("No expiration date found.");
        await logOut(); // Log out if no expiration date is found
      }
    }
    return false; // No stored login
  } catch (error) {
    console.error("Error checking login status:", error);
    return false;
  }
};

// Log out the user
export const logOut = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem("@loginCredential");
    await AsyncStorage.removeItem("@loginExpires");
    console.log("Logged out successfully.");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

// Log in the user
export const logIn = async (loginCredential: string): Promise<void> => {
  try {
    // Store login credential
    await AsyncStorage.setItem("@loginCredential", loginCredential);

    // Set the expiration date (30 days from now)
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    await AsyncStorage.setItem("@loginExpires", expiryDate.toISOString()); // Store as an ISO string for consistency
    console.log("Logged in successfully.");
  } catch (error) {
    console.error("Error during login:", error);
  }
};
