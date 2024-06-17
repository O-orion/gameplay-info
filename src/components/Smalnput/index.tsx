
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./style";

export function SmallInput({...rest}: TextInputProps) {
    return (
        <TextInput 
        keyboardType="numeric"
        {...rest} 
        style={styles.container}
        />

        
    )
}