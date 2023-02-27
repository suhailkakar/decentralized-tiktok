import { Button, Pressable, StyleSheet, Text, TextBase, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useWalletConnect } from "react-native-walletconnect";

export default function Login() {
	const {
		createSession,
		killSession,
		session,
		signTransaction,
	} = useWalletConnect();

	const hasWallet = !!session.length;


	return (
		<View style={styles.container}>
			{!hasWallet && (
				<Button title="Connect" onPress={createSession} />
			)}
			{!!hasWallet && (
				<Button
					title="Sign Transaction"
					onPress={() => signTransaction({
						from: "0xbc28Ea04101F03aA7a94C1379bc3AB32E65e62d3",
						to: "0x89D24A7b4cCB1b6fAA2625Fe562bDd9A23260359",
						data: "0x",
						gasPrice: "0x02540be400",
						gas: "0x9c40",
						value: "0x00",
						nonce: "0x0114",
					})}
				/>
			)}
			{!!hasWallet && (
				<Button
					title="Disconnect"
					onPress={killSession}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 50,
		paddingLeft: 30,
	},
	text: {
		fontSize: 40,
		fontWeight: "700",
		width: "50%",
		lineHeight: 50,
		marginTop: 50,
	},
	button: {
		borderWidth: 1,
		width: "90%",
		marginTop: 50,
		padding: 15,
		borderColor: "#ccc",
		alignItems: "center"
	},
	buttonText: {
		fontWeight: "600",
	},
	footer: {
		position: "absolute",
		bottom: 50,
		marginLeft: 30,
		textAlign: "center",
		color: "#aaa",
	}
})