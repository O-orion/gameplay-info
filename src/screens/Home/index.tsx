import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { Avatar } from "../../components/Avatar";
import { ButtonAdd } from "../../components/ButtonAdd";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
    
        <Profile></Profile>
        <ButtonAdd ></ButtonAdd>
      </View>
    </View>
  );
}
