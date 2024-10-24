import React from "react";
import { StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import ExtraScreen from "../screens/ExtraScreen";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();
const green = "#226f54"; 
const yellow = "#f6ae2d";

const Navigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="face-woman"
              size={25}
              color={focused ? yellow : green}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? yellow : green }}>Profile</Text>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Extra"
        component={ExtraScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="pac-man"
              size={25}
              color={focused ? yellow : green}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? yellow : green }}>Extra</Text>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="login"
              size={25}
              color={focused ? yellow : green}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? yellow : green }}>Log Out</Text>
          ),
        }}
      ></Tab.Screen>

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Navigator;
