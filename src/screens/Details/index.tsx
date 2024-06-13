import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./style";
import { Background } from "../../components/BackGround";
import { Header } from "../../components/Header";
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

import CerebroPng from "../../assets/cerebro.jpg";
import { ListHeader } from "../../components/ListHeader/ListHeader";
import { MemberProps, Members } from "../../components/Member";
import { ListDivisor } from "../../components/ListDivisor";
import { ButtonIcon } from "../../components/ButtonIcon";

export function Details() {
  const members: MemberProps[] = [
    {
      id: "1",
      username: "Lucas",
      avatarUrl: "https://github.com/O-orion.png",
      status: "Online",
    },
    {
      id: "2",
      username: "Lucas",
      avatarUrl: "https://github.com/O-orion.png",
      status: "Online",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.salmao} />
          </BorderlessButton>
        }
      ></Header>

      <ImageBackground source={CerebroPng} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde,
            est nostrum nisi qui ipsum, nihil sit nulla eligendi, pariatur ea
            eaque maiores non. Quis magni obcaecati commodi aspernatur iusto.
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subTitle="total: 03"></ListHeader>

      <FlatList
        style={styles.members}
        data={members}
        ItemSeparatorComponent={() => <ListDivisor />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Members data={item}></Members>}
      ></FlatList>

      <View style={styles.footer}>
        <ButtonIcon titulo="Entrar Na Call" />
      </View>
    </Background>
  );
}
