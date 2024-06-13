import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { GuildIcon } from "../GuildIcon";
import { categories } from "../../UTILS/categories";

import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
    id: string,
  name: string;
  icon: null
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const { owner } = data.guild;
  const [category] = categories.filter((item) => item.id === Number(data.id));
  const { on, white } = theme.colors;
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg fill={!owner ? white : on} />
              <Text
                style={[
                  styles.player,
                  {
                    color: owner ? white : on,
                  },
                ]}
              >
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
