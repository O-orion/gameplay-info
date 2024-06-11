import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/Signin";
import { Background } from "../components/BackGround";

const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
        <Stack.Navigator
         screenOptions={{
            headerShown: false,
          }}
        >
        <Stack.Screen

            name="SignIn"
            component={SignIn}
        ></Stack.Screen>
        <Stack.Screen

            name="Home"
            component={Home}
        ></Stack.Screen>
        </Stack.Navigator>
  );
}