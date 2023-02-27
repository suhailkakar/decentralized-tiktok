import React from "react";
import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Player } from "@livepeer/react-native";

const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get("window");


export default function VideoPlayer({ data, isActive }) {
	const bottomTabHeight = useBottomTabBarHeight();
	const statusBarHeight = StatusBar.currentHeight || 0;

	const getIPFSLink = (hash) => {
		const gateway = "https://lens.infura-ipfs.io/ipfs/";

		return hash
			.replace(/^Qm[1-9A-Za-z]{44}/gm, `${gateway}${hash}`)
			.replace("https://ipfs.io/ipfs/", gateway)
			.replace("ipfs://", gateway);
	};

	return (
		<View
			style={[
				styles.container,
				{ height: WINDOW_HEIGHT - bottomTabHeight - statusBarHeight },
			]}
		>
			<StatusBar barStyle={"light-content"} />
			<Player
				src={getIPFSLink(data?.metadata?.media?.[0]?.original?.url)}
				aspectRatio="9to16"
				objectFit="cover"
				loop
				autoplay={isActive}
			>
				<View />
			</Player>
			<View style={styles.bottomSection}>
				<View style={styles.bottomLeftSection}>
					<Text style={styles.channelName}>{data?.profile.name}</Text>
					<Text style={styles.caption}>{data?.metadata.name}</Text>
				</View>
				<View style={styles.bottomRightSection}>
					<Image
						source={require("../assets/floating-music-note.png")}
						style={[styles.floatingMusicNote]}
					/>
					<Image
						source={require("../assets/disc.png")}
						style={[styles.musicDisc]}
					/>
				</View>
			</View>

			<View style={styles.verticalBar}>
				<View style={[styles.verticalBarItem, styles.avatarContainer]}>
					{data?.profile?.picture?.original?.url && (
						<Image
							style={styles.avatar}
							source={{
								uri: getIPFSLink(data?.profile?.picture?.original?.url),
							}}
						/>
					)}
					<View style={styles.followButton}>
						<Image
							source={require("../assets/plus-button.png")}
							style={styles.followIcon}
						/>
					</View>
				</View>
				<View style={styles.verticalBarItem}>
					<Image
						style={styles.verticalBarIcon}
						source={require("../assets/heart.png")}
					/>
				</View>
				<View style={styles.verticalBarItem}>
					<Image
						style={styles.verticalBarIcon}
						source={require("../assets/message-circle.png")}
					/>
				</View>
				<View style={styles.verticalBarItem}>
					<Image
						style={styles.verticalBarIcon}
						source={require("../assets/reply.png")}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: WINDOW_WIDTH,
		paddingTop: 70,
		backgroundColor: "#000",
	},
	video: {
		position: "absolute",
		width: "100%",
		height: "100%",
	},
	bottomSection: {
		position: "absolute",
		bottom: 0,
		flexDirection: "row",
		width: "100%",
		paddingHorizontal: 8,
		paddingBottom: 16,
	},
	bottomLeftSection: {
		flex: 4,
	},
	bottomRightSection: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	channelName: {
		color: "white",
		fontWeight: "bold",
	},
	caption: {
		color: "white",
		marginVertical: 8,
	},
	musicNameContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	musicNameIcon: {
		width: 12,
		height: 12,
		marginRight: 8,
	},
	musicName: {
		color: "white",
	},
	musicDisc: {
		width: 40,
		height: 40,
	},
	verticalBar: {
		position: "absolute",
		right: 8,
		bottom: 72,
	},
	verticalBarItem: {
		marginBottom: 24,
		alignItems: "center",
	},
	verticalBarIcon: {
		width: 32,
		height: 32,
	},
	verticalBarText: {
		color: "white",
		marginTop: 4,
	},
	avatarContainer: {
		marginBottom: 48,
	},
	avatar: {
		width: 48,
		height: 48,
		borderRadius: 24,
	},
	followButton: {
		position: "absolute",
		bottom: -8,
	},
	followIcon: {
		width: 21,
		height: 21,
	},
	floatingMusicNote: {
		position: "absolute",
		right: 40,
		bottom: 16,
		width: 16,
		height: 16,
		tintColor: "white",
	},
});
