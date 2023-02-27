import { Image, StyleSheet } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const BottomTab = createBottomTabNavigator();

export default function BottomTabs() {
	return (
		<BottomTab.Navigator
			screenOptions={{
				tabBarStyle: { backgroundColor: "black", borderWidth: 0 },
				headerShown: false,
				tabBarActiveTintColor: "white",
			}}
		>
			<BottomTab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={require("../assets/home.png")}
							style={[
								styles.bottomTabIcon,
								focused && styles.bottomTabIconFocused,
							]}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Discover"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={require("../assets/search.png")}
							style={[
								styles.bottomTabIcon,
								focused && styles.bottomTabIconFocused,
							]}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="NewVideo"
				component={Home}
				options={{
					tabBarLabel: () => null,
					tabBarIcon: ({ focused }) => (
						<Image
							source={require("../assets/new-video.png")}
							style={[
								styles.newVideoButton,
								focused && styles.bottomTabIconFocused,
							]}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Inbox"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={require("../assets/message.png")}
							style={[
								styles.bottomTabIcon,
								focused && styles.bottomTabIconFocused,
							]}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Profile"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={require("../assets/user.png")}
							style={[
								styles.bottomTabIcon,
								focused && styles.bottomTabIconFocused,
							]}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

const styles = StyleSheet.create({
	bottomTabIcon: {
		width: 20,
		height: 20,
		tintColor: "grey",
	},
	bottomTabIconFocused: {
		tintColor: "white",
	},
	newVideoButton: {
		width: 50,
		height: 25,
	},
});
