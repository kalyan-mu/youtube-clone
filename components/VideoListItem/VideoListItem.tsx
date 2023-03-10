import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

type VideoListItemProps={
    video:{
        id: string;
        createdAt: string;
        title: string;
        thumbnail: string;
        videoUrl:string;
        duration:number;
        views: number;
        user:{
            name:string;
            image: string;
        }
    }
    
};


function VideoListItem(props: VideoListItemProps) {
  const { video } = props;


  const min = Math.floor(video.duration/60);
  const sec =video.duration % 60;

  let viewsString = video.views.toString();
  if(video.views > 1_000_000){
    viewsString = (video.views/1_000_000).toFixed(1) + "m"
  } else if (video.views > 1_000) {
    viewsString = (video.views / 1_000).toFixed(1) + "k";
  }

  return (
    <View style={styles.videoCard}>
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: video.thumbnail,
          }}
        />
        <View style={styles.timeContaner}>
          <Text style={styles.time}>{min}:{sec < 10 ? '0':''}{sec}</Text>
        </View>
      </View>
      <View style={styles.titleRow}>
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />
        <View style={styles.midleContaner}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            {video.user.name} {viewsString} views {video.createdAt}
          </Text>
        </View>
        <Entypo name="dots-three-vertical" size={14} color="white" />
      </View>
    </View>
  );
}

export default VideoListItem;
