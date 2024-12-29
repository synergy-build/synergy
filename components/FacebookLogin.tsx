import React from "react";
import { Button } from "react-native";
import auth from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";

const FacebookLogin = () => {
  const handleFacebookLogin = async () => {
    try {
      // Log in with Facebook
      const result = await LoginManager.logInWithPermissions(["public_profile", "email"]);

      if (result.isCancelled) {
        throw "User cancelled the login process";
      }

      // Get the Facebook access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw "Something went wrong obtaining the Facebook access token";
      }

      // Create a Firebase credential with the Facebook access token
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

      // Sign in with Firebase using the credential
      const userCredential = await auth().signInWithCredential(facebookCredential);

      console.log("User signed in:", userCredential.user);
    } catch (error) {
      console.error("Error during Facebook login:", error);
    }
  };

  return <Button title="Login with Facebook" onPress={handleFacebookLogin} />;
};

export default FacebookLogin;
