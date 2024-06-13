import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

type Props = RectButtonProps & {
  titulo: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
};

export function Category({
  titulo,
  icon: Icon,
  checked = false,
  hasCheckBox = true,
  ...rest
}: Props) {
  const { secondary50, secondary70, secondary80, secondary40, secondary85 } = theme.colors;

  return (
    <RectButton {...rest} >
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient 
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[ checked ? secondary85 : secondary50, secondary40 ]}
        >
          {
            hasCheckBox &&
            <View style={
              checked ? styles.checked : styles.check
            }/>
          }

          <Icon 
              width={48} 
              height={48}
          />

          <Text style={styles.title}>
            { titulo }
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
