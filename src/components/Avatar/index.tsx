import React from "react";
import { View,Text, Image } from "react-native";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

type Props = {
    urlImage: string
}

export function Avatar({ urlImage }: Props) {

    const { secondary80, secondary100 } = theme.colors

    return (

            <LinearGradient 
            colors={[secondary80, secondary100]}
            style={styles.container}
            >
                <Image style={styles.avatar} source={{ uri:urlImage }} ></Image>
            </LinearGradient>

    )
}
