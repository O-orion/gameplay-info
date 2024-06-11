import React from "react";
import { theme } from "../../global/styles/theme";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { style } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons"

export function ButtonAdd({...rest}: RectButtonProps) {


  return (
    <RectButton style={style.container}
    {...rest}

    >
        <MaterialCommunityIcons 
            name="plus"
            color={theme.colors.white}
            size={24}
        />
    </RectButton>
  );
}
