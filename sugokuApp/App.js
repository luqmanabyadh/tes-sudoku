import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { Home, Game, Finish } from "./src/screens";
import store from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import * as eva from "@eva-design/eva";
// import { ApplicationProvider } from "@ui-kitten/components";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <ApplicationProvider {...eva} theme={eva.light}> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome to SUGOKU" }}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{ title: "Can You Solve it?" }}
          />
          <Stack.Screen name="Finish" component={Finish} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
      {/* </ApplicationProvider> */}
    </Provider>
  );
}
