import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./../components/pages/Login/Login";
const LoginStack = createNativeStackNavigator();

export default function LoginNav() {
  return (
    <LoginStack.Navigator mode="modal">
      <LoginStack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
    
    </LoginStack.Navigator>
  );
}