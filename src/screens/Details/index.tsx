import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Background } from "../../components/BackGround";
import { Header } from "../../components/Header";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

export function Details() {
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

      
    </Background>
  );
}
