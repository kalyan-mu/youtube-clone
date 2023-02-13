import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import VideoListItem from "../../components/VideoListItem";
import VideoPlayer from "../../components/VideoPlayer";

import video from "../../assets/data/video.json"
import videos from "../../assets/data/videos.json"

import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const VideoScreen = () => {

  let viewsString = video.views.toString();
  if (video.views > 1_000_000) {
    viewsString = (video.views / 1_000_000).toFixed(1) + "m";
  } else if (video.views > 1_000) {
    viewsString = (video.views / 1_000).toFixed(1) + "k";
  }


    return (
      <View style={{ backgroundColor: "#141414", flex: 1 }}>
        {/*video player */}
        <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />
        {/*video info*/}
        <View style={styles.videpInfoContainer}>
          <Text style={styles.tags}>{video.tags}</Text>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            {video.user.name} {viewsString} views {video.createdAt}
          </Text>
        </View>

        {/* Action icon*/}
        <View style={styles.actionListContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.actionListItem}>
              <AntDesign name="like1" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="dislike2" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="export" size={30} color="lightgrey" />
              <Text style={styles.actionText}>Share</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgrey" />
              <Text style={styles.actionText}>Download</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgrey" />
              <Text style={styles.actionText}>Download</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgrey" />
              <Text style={styles.actionText}>Download</Text>
            </View>
          </ScrollView>
        </View>
        {/* user info*/}
        <View style={styles.box}>
          <Image style={styles.avatar} source={{ uri: video.user.image }} />

          <View style={styles.main}>
            <Text style={styles.channalName}>{video.user.name}</Text>
            <Text style={styles.subscribers1}>
              {video.user.subscribers} subscribers
            </Text>
          </View>
          <Text style={styles.Subcribe}>Subcribe</Text>
        </View>
        {/*Comments*/}
        <View>
          <Text style={{ color: "white", marginLeft: 10 }}>Comments 978</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Image
              style={{ width: 35, height: 35, borderRadius: 20 }}
              source={{ uri: video.user.image }}
            />
            <Text style={{ color: "white", marginLeft: 10 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>

        {/*All comments
        <BottomSheet snapPoints={[0, '50%', '100%',]} index={2}>
          <Text>Hello</Text>
        </BottomSheet>
        */}
        <BottomSheet snapPoints={[0, "50%", "100%"]} index={2}>
          <Text>Hello</Text>
        </BottomSheet>

        {/*Recommened videos*/}
      </View>
    );
};
const VideoScreenWithRecommendation = () =>{
  return (
    <SafeAreaView
      style={{ backgroundColor: "#141414", flex: 1, paddingTop: 25 }}
    >
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
        ListHeaderComponent={VideoScreen}
      />
    </SafeAreaView>
  );
}

export default VideoScreenWithRecommendation;