import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
// Tela do iphone

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        fontSize: 18,
        fontFamily: theme.fonts.rajdhani_700,
        color:  theme.colors.white
    },
    nameStatus: {
        fontSize: 13,
        fontFamily: theme.fonts.inter_400,
        color:  theme.colors.highlight
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bulletStatus: {
        width: 7,
        height: 8,
        borderRadius: 4,
        marginRight: 9
    }

})
