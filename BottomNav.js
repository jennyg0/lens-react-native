import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FeedStackNavigator,
  NotificationStackNavigator,
  ProfileStackNavigator,
  UploadStackNavigator,
} from "./Navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  ImageBackground,
  Pressable,
  View,
  StyleSheet,
  Text,
} from "react-native";
import image from "./atmlanding2.jpeg";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onPressCreate = () => setIsLoggedIn(true);
  return (
    <>
      {isLoggedIn ? (
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
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
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
      ) : (
        <View style={styles.container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={styles.header}> in the moment </Text>
            <Text style={styles.subheading}>stay in-the-know</Text>
            <Text style={styles.subheading2}>with real-time video updates</Text>
            <Text style={styles.subheading2}>
              from the people you care about
            </Text>

            {/* <Pressable style={styles.button} onPress={onPressLogin}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onPressSignup}>
        <Text style={styles.text}>Signup</Text>
      </Pressable> */}
            <Pressable style={styles.button} onPress={onPressCreate}>
              <Text style={styles.buttonText}>Create a Moment</Text>
            </Pressable>
          </ImageBackground>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 50,
    // width: "100%",
    // height: "100%",
    // justifyContent: "center",
    //alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  header: {
    //height: 40,
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 40,
    padding: 10,
    marginBottom: 30,
    color: "#BF40BF",
    // backgroundColor: "white",
    borderRadius: 10,
    alignSelf: "center",
  },
  subheading: {
    //height: 20,
    fontSize: 20,
    //lineHeight: 20,
    paddingBottom: 20,
    color: "white",
    alignSelf: "center",
  },
  subheading2: {
    //height: 20,
    fontSize: 15,
    //lineHeight: 20,
    paddingBottom: 10,
    color: "white",
    alignSelf: "center",
  },
  button: {
    bottom: 0,
    paddingVertical: 22,
    paddingHorizontal: 32,
    borderRadius: 10,
    // elevation: 3,
    backgroundColor: "#BF40BF",
    //width: "30%",
    //margin: "auto",
    // marginBottom: 30,
    marginTop: 400,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
