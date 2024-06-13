import React from "react";
import { Image } from "react-native";
import { styles } from "./style";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";


type Props = RectButtonProps & {
  data: string
};

export function GuildIcon() {

  return (
 
    <Image 
    style={styles.container}
    source={{ uri: 'https://i.pinimg.com/736x/6b/24/79/6b2479f117f973e31088e8168a5254ac.jpg'}}
    resizeMode="cover"
    ></Image>

  );
}
