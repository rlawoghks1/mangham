import React, { useState, useEffect, useCallback, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { isAndroid } from "../components/util/Util";
import { Ionicons } from "@expo/vector-icons";
import Main from "../components/pages/Main/Main";
import Profile from "../components/pages/Profile/Profile";

const LogedInStack = createBottomTabNavigator();

export default function LogedInNav() {
  return (
    <LogedInStack.Navigator
      tabBarStyle={{
        activeTintColor: "#101757",
        tabStyle: {
          paddingTop: 1,
          backgroundColor: 'blue'
        },
        labelStyle: {
          textTransform: "uppercase",
          fontWeight: "600",
        },
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarVisible: true,
        tabBarStyle: { position: 'absolute' },
        tabBarIcon: ({ focused }) => {
          const isPlatform = isAndroid();
          isColor = "blue";
          if (focused) {
            isColor = "white";
          }
          let iconName = `${isPlatform ? "md-" : "ios-"}`;
          if (route.name == "메인") {
            return (
              <Ionicons
                name={iconName += "home"}
                size={24}
                color={focused ? "#2F80ED" : "#828282"}
              />
            )
          } 
          else {
            return (<Ionicons name="settings" size={24} color={focused ? "#2F80ED" : "#828282"} />)
          }
        },
      })}
    >
      <LogedInStack.Screen
        name="메인"
        options={{ headerShown: false }}
        component={Main}
      />

      <LogedInStack.Screen
        name="설정"
        options={{ headerShown: false }}
        component={Profile}
      />
    </LogedInStack.Navigator>
  );
}
