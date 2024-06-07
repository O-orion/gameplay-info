import { Button, Text, Image, View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import imageDiscord  from '../../assets/dsicord.png'
import { styles } from "./style";

type Props = TouchableOpacityProps & {
    titulo: string
}
export function ButtonIcon({titulo, ...rest}: Props) {
    return (
        <TouchableOpacity  {...rest}   style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image style={styles.icon} source={imageDiscord} ></Image>
            </View>

            <Text style={styles.titule} >
                { titulo }
            </Text>
        </TouchableOpacity>
    )    
}