import React, { useRef } from "react";
import { View,Text } from "react-native";
import { Video } from "expo-av";


interface VideoPlayerProps{
    videoURI:string;
    thumbnailURI:string;
};

const VideoPlayer = (props: VideoPlayerProps)=>{
    const { videoURI, thumbnailURI } =props;

    //const videoref = useRef<Video>(null)

    return (
      <View>
        <Video
          style={{ width: "100%", aspectRatio: 16 / 9 }}
          source={{ uri: videoURI }}
          posterSource={{ uri: thumbnailURI }}
          posterStyle={{ resizeMode: "cover" }}
          usePoster={false}
          useNativeControls
          resizeMode="contain"
        />
      </View>
    );
}

export default VideoPlayer;