import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.salmao,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24
    },
    titule: {
        flex: 1,
        fontFamily: theme.fonts.inter_500,
        color: theme.colors.white,
        textAlign: 'center'
    },
    icon: {
        width: 24,
        height: 24
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.gray
    }
})