import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./components/BottomTabs";
import Login from "./screens/Login";

const Stack = createStackNavigator();

function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Login" component={BottomTabs} />
				<Stack.Screen name="Home" component={BottomTabs} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default Routes;
