// import { Auth0Provider} from 'react-native-auth0';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useCameraPermissions } from "expo-camera";
import { Button, StyleSheet, Text, View } from 'react-native';

export default function RootLayout() {

  const [permission, setPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <View style={styles.centeredContainer}>
        <Text>No permission</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={setPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    // <Auth0Provider domain={`${process.env.EXPO_PUBLIC_AUTH0_DOMAIN}`} clientId={`${process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID}`}>
      <SafeAreaProvider>
        <StatusBar />
        <Stack
          screenOptions={{
            headerShown: false
          }}
        />
      </SafeAreaProvider>
    // </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
