import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./style";
import { Background } from "../../components/BackGround";
import { Avatar } from "../Avatar";
import { theme } from "../../global/styles/theme";

export type MemberProps = {
  id: string;
  username: string;
  avatarUrl: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export function Members({ data }: Props) {
  const { on, salmao } = theme.colors;
  const isOnline = data.status === "online";

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatarUrl}></Avatar>

      <View>
        <Text style={styles.title}>{data.username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : salmao,
              },
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
}
