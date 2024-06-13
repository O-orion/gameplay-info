import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
// Tela do iphone

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    content: {
        flex: 1,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    title: {
        fontFamily: theme.fonts.rajdhani_700,
        color: theme.colors.white,
        fontSize: 18
    },
    category: {
        fontFamily: theme.fonts.inter_400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginRight: 24
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        fontFamily: theme.fonts.rajdhani_500,
        color: theme.colors.white,
        fontSize: 13,
        marginLeft: 7
    },
    player: {
        fontFamily: theme.fonts.inter_500,
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24
    }

})
