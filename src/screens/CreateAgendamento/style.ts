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
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        width: '100%',
        flexDirection: 'row',
        height: 68,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden'
    },
    selectBody: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8
    },

    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        marginRight: 4,
        fontSize: 18,
        fontFamily: theme.fonts.rajdhani_500,
        color: theme.colors.highlight
    },
    caracteresLimit: {
        fontFamily: theme.fonts.inter_400,
        fontSize: 13,
        color: theme.colors.highlight
    },
    footer: {
        marginVertical: 24,
        marginBottom: 56
    }
})
