import { FlatList, StyleSheet, View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { EXPLORE_POSTS } from "../queries";
import { useQuery } from "@apollo/client";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import VideoPlayer from "../components/VideoPlayer";

export default function Home() {
	const [activeVideoIndex, setActiveVideoIndex] = useState(0);

	const bottomTabHeight = useBottomTabBarHeight();
	const { height: WINDOW_HEIGHT } = Dimensions.get("window");
	const { data } = useQuery(EXPLORE_POSTS, {
		variables: {
			request: {
				limit: 5,
				sources: ["lenstube-bytes"],
				publicationTypes: ["POST"],
				sortCriteria: "CURATED_PROFILES",
			},
		},
	});

	const pageInfo = data?.explorePublications?.pageInfo;
	const videos = data?.explorePublications?.items;

	return (
		<View style={styles.container}>
			<FlatList
				data={videos}
				pagingEnabled
				renderItem={({ item, index }) => (
					<VideoPlayer data={item} isActive={activeVideoIndex === index} />
				)}
				onScroll={(e) => {
					const index = Math.round(
						e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight)
					);
					setActiveVideoIndex(index);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#fff",
		alignItems: "center",
	},
});
