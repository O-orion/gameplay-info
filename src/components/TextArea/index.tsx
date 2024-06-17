
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./style";

export function TextArea({...rest}: TextInputProps) {
    return (
        <TextInput 
        
        {...rest} 
        style={styles.container}
        />

        
    )
}