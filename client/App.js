import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme,Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import store from "./Redux/Store";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00AACF',
    dark:"#1B263D",
    secondary:"#E52B2B"
  },
};
export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              options={{ title: "Bienvenido!" }}
              name="Login"
              component={LoginScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#1954C2",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
