import { StyleSheet } from "react-native";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
// Tela do iphone

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.rajdhani_700,
        color: theme.colors.white,
        
    }
})
