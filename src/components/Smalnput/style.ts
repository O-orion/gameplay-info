import { StyleSheet } from "react-native";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
// Tela do iphone

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.secondary40,
        color: theme.colors.white,
        borderRadius: 8,
        fontFamily: theme.fonts.inter_400,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center'
    },
})
