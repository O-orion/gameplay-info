import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    input: {
        width: 200,
        height: 50,
        borderBottomWidth: 2
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    image: {
        width:'100%',
        height: 360
    },
    titule: {
        color: theme.colors.white,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.rajdhani_700,
        lineHeight: 40
    },
    subTitule: {
        color: theme.colors.white,
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.rajdhani_500,
        lineHeight: 25
    }
})