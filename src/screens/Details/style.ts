import { StyleSheet } from "react-native";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
// Tela do iphone

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        width: '100%',
        height: 230,
        marginBottom: 30
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    title: {
        fontSize: 28,
        fontFamily: theme.fonts.rajdhani_700,
        color:  theme.colors.white
    },
    subTitle: {
        fontSize: 13,
        fontFamily: theme.fonts.inter_500,
        color:  theme.colors.white
    },
    members: {
        marginLeft: 24,
        marginTop: 27
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    }

})
