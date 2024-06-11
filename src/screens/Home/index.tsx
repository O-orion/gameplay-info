import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { Avatar } from "../../components/Avatar";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
    
        <Profile></Profile>
      </View>
    </View>
  );
}
