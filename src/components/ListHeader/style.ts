import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
// Tela do iphone

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    title: {
        fontFamily: theme.fonts.rajdhani_700,
        color: theme.colors.white,
        fontSize: 18
    },
    subTitle: {
        fontFamily: theme.fonts.inter_400,
        color: theme.colors.highlight,
        fontSize: 13
    }
})
