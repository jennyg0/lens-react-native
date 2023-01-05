import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FeedStackNavigator,
  NotificationStackNavigator,
  ProfileStackNavigator,
  UploadStackNavigator,
} from "./Navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  // const color = "blue";
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={FeedStackNavigator}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        name="Activity"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bell-badge"
              color={color}
              size={size}
            />
          ),
        }}
        component={NotificationStackNavigator}
      />
      <Tab.Screen
        name="Create"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="youtube-tv"
              color={color}
              size={size}
            />
          ),
        }}
        component={UploadStackNavigator}
      />
    </Tab.Navigator>
  );
}
