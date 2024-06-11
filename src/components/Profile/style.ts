import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
// Tela do iphone

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection:'row'
    },
    greeting: {
        fontFamily: theme.fonts.inter_500,
        fontSize: 24,
        color: theme.colors.white,
        marginRight: 6
    },
    username: {
        fontFamily: theme.fonts.inter_500,
        fontSize: 24,
        color: theme.colors.white
    },
    mensagem: {
        fontFamily: theme.fonts.inter_400,
        color: theme.colors.white

    }
    
})
