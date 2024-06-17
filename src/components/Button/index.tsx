import { Button, Text, Image, View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import imageDiscord  from '../../assets/dsicord.png'
import { styles } from "./style";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type Props = RectButtonProps & {
    titulo: string
}
export function Buttonn({titulo, ...rest}: Props) {
    return (
        <RectButton  {...rest}   style={styles.container}>

            <Text style={styles.titule} >
                { titulo }
            </Text>
        </RectButton>
    )    
}